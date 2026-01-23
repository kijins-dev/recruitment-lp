# 採用LP - ASMR音声制作スタッフ募集

Studio Altea（みちがえる）のpixiv AD向け採用ランディングページ

## 概要

DLsite/FANZAでR18 ASMR音声作品を販売する事業の採用LP。
音声編集スタッフ（2名）とSNS運用スタッフ（1名）を募集。

**キャッチコピー**: 「エロで、日常を変える。」

**URL**: https://studio-altea.jp

## 技術構成

| 技術 | 詳細 |
|------|------|
| HTML5 | 静的HTML（単一ファイル） |
| TailwindCSS | ビルド版（minified） |
| アイコン | インラインSVG（Lucide Icons） |
| フォント | Google Fonts（Zen Kaku Gothic New, Noto Sans JP） |
| ホスティング | Cloudflare Pages |
| ドメイン | studio-altea.jp |

## ファイル構成

```
recruitment-lp/
├── index.html            # メインLP
├── dist/
│   └── output.css        # ビルド済みTailwind CSS
├── assets/
│   ├── images/           # 作品サムネイル（webp）
│   └── fonts/
├── src/
│   └── input.css         # Tailwindソース
├── package.json          # npmスクリプト
├── tailwind.config.js    # Tailwind設定
├── .gitignore
├── CLAUDE.md             # Claude Code用プロジェクトメモリ
└── README.md
```

## デザイン

### カラーパレット（ダークモード）

| 用途 | カラー |
|------|--------|
| 背景 | `#0a0a0f` |
| サブ背景 | `#12121a` |
| シアン（アクセント） | `#00f0ff` |
| ピンク（強調） | `#ff2d6a` |
| テキスト | `#f8f8f8` |

### 特徴

- **ダークモード基調** - 同人・クリエイター文化に寄せたデザイン
- **FV**: 2段カルーセル（上下で逆方向スクロール）
- **アイコン**: インラインSVG（Lucide Icons）
- **ボタン**: Primary（シアン）+ Secondary（アウトライン）
- **レスポンシブ**: モバイルファースト設計

## LP構成（14セクション）

1. ヒーロー（2列カルーセル + キャッチコピー）
2. マーキーバナー（条件一覧）
3. 合う人・合わない人
4. 事業紹介
5. CTA 1（中間）
6. ビジョン（48サークル計画）
7. 募集職種
8. 仕事のリアル（1日のスケジュール）
9. 教育プログラム
10. 働く環境
11. CTA 2
12. FAQ
13. 応募フォーム
14. フッター

## ローカル開発

```bash
# 依存関係インストール
npm install

# CSSビルド
npm run build:css

# ブラウザで確認
open index.html
```

### HTMLを変更した場合

Tailwindクラスを追加・変更した場合は再ビルドが必要：

```bash
npm run build:css
```

## デプロイ

Cloudflare Pagesでホスティング。

```bash
# ローカルでビルド
npm run build:css

# コミット & プッシュ
git add .
git commit -m "更新内容"
git push
```

Cloudflare Pages設定：
- ビルドコマンド: （なし）
- 出力ディレクトリ: `/`

## パフォーマンス最適化

実施済みの最適化：

| 項目 | 内容 |
|------|------|
| 画像 | WebP形式、800px幅にリサイズ、75%品質圧縮 |
| 画像読み込み | lazy loading, preload, fetchpriority |
| CSS | TailwindCSS ビルド版（minified） |
| アイコン | インラインSVG（外部リクエスト削減） |
| フォント | preconnect + display=swap |

## TODO

- [ ] フォーム送信先設定

## 参考LP

- [DMM.com 漫画編集者募集](https://special.dmm.com/recruit-comic-editor/)
- [Reno株式会社](https://reno-agency.com/)
- [LITALICO 新卒採用](https://litalico.co.jp/recruit_students/)

## ライセンス

Private - All rights reserved
