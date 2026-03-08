"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

type PlayState = "idle" | "loading" | "playing" | "paused";

export default function TextToSpeechPlayer({ text }: { text: string }) {
  const [playState, setPlayState] = useState<PlayState>("idle");
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobUrlRef = useRef<string | null>(null);

  // Cleanup blob URL and audio on unmount or when text changes
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
  }, [text]);

  const fetchAudio = useCallback(async (): Promise<string> => {
    // Return cached blob URL if available
    if (blobUrlRef.current) return blobUrlRef.current;

    const res = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error || "Failed to generate audio");
    }

    const { audioContent } = await res.json();

    // Decode base64 → binary → Blob → Object URL
    const binary = atob(audioContent);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    blobUrlRef.current = url;
    return url;
  }, [text]);

  const getOrCreateAudio = useCallback(
    (blobUrl: string): HTMLAudioElement => {
      if (audioRef.current) {
        if (audioRef.current.src !== blobUrl) {
          audioRef.current.src = blobUrl;
        }
        return audioRef.current;
      }

      const audio = new Audio(blobUrl);

      audio.ontimeupdate = () => {
        if (audio.duration) {
          setProgress((audio.currentTime / audio.duration) * 100);
        }
      };
      audio.onended = () => {
        setPlayState("idle");
        setProgress(0);
      };
      audio.onerror = () => {
        setError("Audio playback error — please try again");
        setPlayState("idle");
      };

      audioRef.current = audio;
      return audio;
    },
    []
  );

  const handlePlay = useCallback(async () => {
    setError(null);

    try {
      // Resume from pause
      if (playState === "paused" && audioRef.current) {
        audioRef.current.playbackRate = speed;
        await audioRef.current.play();
        setPlayState("playing");
        return;
      }

      // Fetch audio (uses cache on repeat plays)
      setPlayState("loading");
      const blobUrl = await fetchAudio();

      const audio = getOrCreateAudio(blobUrl);
      audio.playbackRate = speed;
      await audio.play();
      setPlayState("playing");
    } catch (err) {
      console.error("TTS play error:", err);
      setError(err instanceof Error ? err.message : "Playback failed");
      setPlayState("idle");
    }
  }, [playState, speed, fetchAudio, getOrCreateAudio]);

  const handlePause = useCallback(() => {
    audioRef.current?.pause();
    setPlayState("paused");
  }, []);

  const handleStop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlayState("idle");
    setProgress(0);
  }, []);

  const handleSpeedChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = parseFloat(e.target.value);
      setSpeed(val);
      if (audioRef.current) {
        audioRef.current.playbackRate = val;
      }
    },
    []
  );

  const progressPct = Math.round(progress);

  return (
    <div className="flex flex-col gap-2 my-6 rounded-lg border border-border/40 bg-card/40 px-4 py-3">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Label */}
        <div className="flex items-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-muted-foreground"
            aria-hidden="true"
          >
            <path d="M7 4a1 1 0 0 0-1.447-.894l-4 2A1 1 0 0 0 1 6v8a1 1 0 0 0 .553.894l4 2A1 1 0 0 0 7 16V4Z" />
            <path d="M9 6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6ZM15 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1Z" />
          </svg>
          <span className="text-sm text-muted-foreground font-medium">
            Listen to this article
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Play / Pause / Loading button */}
          {playState === "loading" ? (
            <button
              disabled
              aria-label="Loading audio…"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-border/60 bg-background opacity-70"
            >
              <svg
                className="animate-spin w-4 h-4 text-muted-foreground"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            </button>
          ) : playState === "playing" ? (
            <button
              onClick={handlePause}
              aria-label="Pause"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-border/60 bg-background hover:bg-accent/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1ZM12 3a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handlePlay}
              aria-label="Play"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-border/60 bg-background hover:bg-accent/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M3 3.732a1.5 1.5 0 0 1 2.305-1.265l6.706 4.267a1.5 1.5 0 0 1 0 2.531l-6.706 4.268A1.5 1.5 0 0 1 3 12.267V3.732Z" />
              </svg>
            </button>
          )}

          {/* Stop */}
          <button
            onClick={handleStop}
            disabled={playState === "idle" || playState === "loading"}
            aria-label="Stop"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-border/60 bg-background hover:bg-accent/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="12" height="12" rx="1" />
            </svg>
          </button>

          {/* Speed selector */}
          <select
            value={speed}
            onChange={handleSpeedChange}
            aria-label="Playback speed"
            className="text-xs rounded border border-border/60 bg-background px-1.5 py-1 text-foreground cursor-pointer"
          >
            <option value={0.75}>0.75×</option>
            <option value={1}>1×</option>
            <option value={1.25}>1.25×</option>
            <option value={1.5}>1.5×</option>
            <option value={2}>2×</option>
          </select>
        </div>
      </div>

      {/* Progress bar — shown while playing or paused */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 rounded-full bg-border/40 overflow-hidden">
          <div
            className="h-full rounded-full bg-foreground/40 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span className="text-xs text-muted-foreground tabular-nums w-8 text-right">
          {progressPct > 0 ? `${progressPct}%` : ""}
        </span>
      </div>

      {/* Error */}
      {error && (
        <p className="text-xs text-destructive mt-1">{error}</p>
      )}
    </div>
  );
}
