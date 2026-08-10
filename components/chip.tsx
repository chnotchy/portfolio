export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="bg-surface-secondary text-ink-secondary rounded-full px-2.5 py-0.5 text-xs">
      {children}
    </li>
  )
}
