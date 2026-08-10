'use client'

import { Moon, Sun } from 'lucide-react'

// 表示中のテーマはアイコンの dark: バリアントで切り替わるため、React の状態は持たない。
export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="テーマを切り替える"
      className="text-ink-secondary hover:bg-surface-secondary hover:text-ink rounded-full p-1.5 transition-colors"
    >
      <Moon aria-hidden strokeWidth={1.5} className="size-4 dark:hidden" />
      <Sun aria-hidden strokeWidth={1.5} className="hidden size-4 dark:block" />
    </button>
  )
}
