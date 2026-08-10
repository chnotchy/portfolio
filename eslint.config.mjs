import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier/flat'

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ['.next/**', 'out/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      // images.unoptimized では next/image に最適化の役目がなく、
      // 出力する inline style が CSP の style-src に抵触する。
      '@next/next/no-img-element': 'off',
    },
  },
  // 整形系ルールを打ち消すため最後に置く。
  prettier,
]

export default config
