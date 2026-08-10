export function SiteFooter() {
  return (
    <footer className="p-[0.6em] text-center">
      <small className="text-ink-muted text-[clamp(12px,2.5vw,16px)]">
        © {new Date().getFullYear()} Notchy
      </small>
    </footer>
  )
}
