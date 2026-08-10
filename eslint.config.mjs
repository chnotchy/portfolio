import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier/flat'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['.next/**', 'out/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  // 整形系ルールを打ち消すため最後に置く。
  prettier,
]

export default config
