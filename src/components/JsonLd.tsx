// Per Next.js's current JSON-LD guidance: render via a native <script> tag,
// escaping `<` so the payload can't break out into an XSS-exploitable context.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
