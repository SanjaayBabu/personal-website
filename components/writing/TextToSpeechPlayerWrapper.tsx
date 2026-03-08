"use client";

import dynamic from "next/dynamic";

const TextToSpeechPlayer = dynamic(() => import("./TextToSpeechPlayer"), {
  ssr: false,
});

export default function TextToSpeechPlayerWrapper({ text }: { text: string }) {
  return <TextToSpeechPlayer text={text} />;
}
