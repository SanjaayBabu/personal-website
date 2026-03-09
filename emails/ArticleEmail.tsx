import {
  Html,
  Body,
  Head,
  Heading,
  Text,
  Link,
  Hr,
  Section,
  Container,
  Preview,
  Button,
} from "@react-email/components";

export type ArticleEmailProps = {
  post: {
    title: string;
    date: string;
    summary: string;
    slug: string;
    url: string;
  };
  articleHtml: string;
  unsubscribeUrl: string;
};

export default function ArticleEmail({
  post,
  articleHtml,
  unsubscribeUrl,
}: ArticleEmailProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{post.summary || `New article: ${post.title}`}</Preview>
      <Body
        style={{
          backgroundColor: "#ffffff",
          fontFamily:
            "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "#0a0a0a",
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            maxWidth: "640px",
            margin: "48px auto",
            padding: "0 24px",
          }}
        >
          {/* Header */}
          <Section style={{ marginBottom: "32px" }}>
            <Link
              href="https://sanjaaybabu.com/writing"
              style={{
                fontSize: "13px",
                color: "#737373",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Sanjaay Babu · Writing
            </Link>
          </Section>

          {/* Article title */}
          <Heading
            as="h1"
            style={{
              fontSize: "32px",
              fontWeight: "600",
              lineHeight: "1.2",
              margin: "0 0 8px 0",
              color: "#0a0a0a",
            }}
          >
            {post.title}
          </Heading>

          {/* Date */}
          {post.date && (
            <Text
              style={{
                fontSize: "13px",
                color: "#737373",
                margin: "0 0 16px 0",
              }}
            >
              {post.date}
            </Text>
          )}

          {/* Summary */}
          {post.summary && (
            <Text
              style={{
                fontSize: "17px",
                color: "#525252",
                lineHeight: "1.6",
                margin: "0 0 32px 0",
              }}
            >
              {post.summary}
            </Text>
          )}

          <Hr style={{ borderColor: "#e5e5e5", marginBottom: "32px" }} />

          {/* Article body */}
          <Section
            dangerouslySetInnerHTML={{ __html: articleHtml }}
            style={{
              fontSize: "16px",
              lineHeight: "1.75",
              color: "#0a0a0a",
            }}
          />

          <Hr style={{ borderColor: "#e5e5e5", margin: "40px 0 32px" }} />

          {/* CTA */}
          <Section style={{ textAlign: "center", marginBottom: "40px" }}>
            <Button
              href={post.url}
              style={{
                backgroundColor: "#0a0a0a",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "6px",
                fontSize: "14px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Read on the site
            </Button>
          </Section>

          {/* Footer */}
          <Section>
            <Text
              style={{
                fontSize: "12px",
                color: "#a3a3a3",
                lineHeight: "1.6",
                textAlign: "center",
              }}
            >
              You&apos;re receiving this because you subscribed on
              sanjaaybabu.com.
              <br />
              <Link href={unsubscribeUrl} style={{ color: "#a3a3a3" }}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
