const variants = {
  primary: 'bg-ink text-surface hover:opacity-80',
  secondary: 'border-border text-ink hover:bg-surface-secondary border',
}

export function buttonClass(variant: keyof typeof variants = 'primary') {
  return `inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${variants[variant]}`
}
