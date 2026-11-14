'use client'

import { useSyncExternalStore } from 'react'

import { WorkCard, WorkLinks } from '@/components/work-card'
import { workCategories, works, workYear, type WorkCategory } from '@/content/works'

type Filter = WorkCategory | 'all'

const filters: { value: Filter; label: string; count: number }[] = [
  { value: 'all', label: 'All', count: works.length },
  ...workCategories.map(({ value, label }) => ({
    value,
    label,
    count: works.filter((work) => work.category === value).length,
  })),
]

function isFilter(value: string | null): value is Filter {
  return filters.some((filter) => filter.value === value)
}

const filterChange = 'works-filter-change'

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange)
  window.addEventListener(filterChange, onChange)
  return () => {
    window.removeEventListener('popstate', onChange)
    window.removeEventListener(filterChange, onChange)
  }
}

function readFilter(): Filter {
  const type = new URLSearchParams(window.location.search).get('type')
  return isFilter(type) ? type : 'all'
}

function select(value: Filter) {
  const url = new URL(window.location.href)
  if (value === 'all') url.searchParams.delete('type')
  else url.searchParams.set('type', value)
  window.history.replaceState(null, '', url)
  window.dispatchEvent(new Event(filterChange))
}

export function WorksTimeline() {
  const active = useSyncExternalStore(subscribe, readFilter, () => 'all' as const)

  const visible = works
    .filter((work) => active === 'all' || work.category === active)
    .sort((a, b) => b.date.localeCompare(a.date))

  const years = [...new Set(visible.map((work) => workYear(work.date)))]

  return (
    <>
      <div role="group" aria-label="種類で絞り込む" className="fade-up mb-12 flex flex-wrap gap-2">
        {filters.map(({ value, label, count }) => {
          const selected = value === active
          return (
            <button
              key={value}
              type="button"
              aria-pressed={selected}
              onClick={() => select(value)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                selected
                  ? 'bg-ink text-surface'
                  : 'bg-surface-secondary text-ink-secondary hover:bg-ink hover:text-surface'
              }`}
            >
              {label}
              <span className="opacity-60">{count}</span>
            </button>
          )
        })}
      </div>

      <ol key={active} className="stagger">
        {years.map((year) => (
          <li
            key={year}
            className="group/year fade-up relative grid gap-5 pb-14 last:pb-0 md:grid-cols-[7rem_1fr] md:gap-8"
          >
            <div className="relative md:pt-0.5">
              <h2 className="text-ink-tertiary text-sm font-semibold tracking-wider tabular-nums">
                <span className="inline-flex items-center gap-3">
                  <span
                    aria-hidden
                    className="bg-ink ring-surface relative z-10 size-2 rounded-full ring-4"
                  />
                  {year}
                </span>
              </h2>
            </div>
            <span
              aria-hidden
              className="bg-border-subtle absolute top-2 bottom-0 left-[3.5px] w-px group-last/year:hidden"
            />
            <ul className="grid grid-cols-1 gap-5 pl-5 sm:grid-cols-2 md:pl-0">
              {visible
                .filter((work) => workYear(work.date) === year)
                .map((work) => (
                  <li key={work.title} className="space-y-3">
                    <WorkCard work={work} headingAs="h3" />
                    <WorkLinks links={work.links} />
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ol>
    </>
  )
}
