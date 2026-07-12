/**
 * Centered content column: max width + horizontal page gutter.
 * Everything on the site sits inside one of these.
 */
export default function Container({ className = "", children }) {
  return (
    <div
      className={`mx-auto max-w-[var(--container)] px-[var(--gutter)] ${className}`}
    >
      {children}
    </div>
  );
}
