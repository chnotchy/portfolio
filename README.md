# chnotchy.com

ポートフォリオサイト。https://chnotchy.com

## 技術構成

- Next.js 16 (App Router) / React 19 / TypeScript
- Tailwind CSS v4
- 静的書き出し (`output: 'export'`) を Cloudflare Pages で配信

## 開発

Node.js のバージョンは `.nvmrc`、pnpm のバージョンは `package.json` の `packageManager` に従う。

```bash
pnpm install
pnpm dev
```

| コマンド         | 内容                                 |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | 開発サーバー (http://localhost:3000) |
| `pnpm build`     | 本番ビルド。`out/` に出力            |
| `pnpm lint`      | ESLint                               |
| `pnpm typecheck` | 型チェック                           |
| `pnpm format`    | Prettier で整形                      |

依存の解決ポリシーは [pnpm-workspace.yaml](pnpm-workspace.yaml) を参照。

## デプロイ

`main` への push で GitHub Actions が Cloudflare Pages へデプロイする。
プルリクエストにはプレビュー URL がコメントされる。
