# 採用LP - ASMR音声制作スタッフ募集

pixiv AD掲載用の採用ランディングページ

## 概要

DLsite/FANZAでR18 ASMR音声作品を販売する事業の採用LP。
音声編集スタッフ（2名）とSNS運用スタッフ（1名）を募集。

**キャッチコピー**: 「エロで、誰かの日常を変える仕事。」

## デモ

ローカルで `index.html` をブラウザで開くか、Live Serverで起動

## 技術構成

- **HTML5** - 静的HTML（単一ファイル）
- **TailwindCSS** - CDN版（ビルド不要）
- **Lucide Icons** - CDN版
- **Google Fonts** - Zen Kaku Gothic New

## ファイル構成

```
recruitment-lp/
├── index.html          # メインLP
├── assets/
│   └── images/         # 作品サムネイル等
│       ├── work-sample.png
│       ├── KS020-サムネ.png
│       └── KS025CGサムネ-1.jpg
└── README.md
```

## デザイン

### カラーパレット

| 用途 | カラー |
|------|--------|
| 背景 | `#ffffff` / `gray-50` |
| プライマリ | `#ec4899`（ビビッドピンク） |
| マゼンタ | `#d946ef` |
| アクセント | `#a855f7`（パープル） |
| テキスト | `#1f2937` |

### 特徴

- **FV**: 2段カルーセル（上下で逆方向スクロール）
- **アイコン**: Lucide Icons（絵文字不使用）
- **ボタン**: Primary（グラデーション）+ Secondary（アウトライン）
- **レスポンシブ**: モバイルファースト設計

## LP構成（8セクション）

1. ファーストビュー（FV）
2. 合う人、合わない人
3. 事業紹介
4. ビジョン
5. 募集職種
6. 仕事のリアル
7. 未経験からプロへ
8. 働く環境 + FAQ + CTA

## ローカル開発

```bash
# 方法1: ブラウザで直接開く
open index.html

# 方法2: Live Server（VS Code拡張）
# index.htmlを右クリック → "Open with Live Server"

# 方法3: Python
python -m http.server 8000
```

## デプロイ

静的HTMLのため、任意のホスティングサービスで公開可能:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## TODO

- [ ] フォーム送信先設定
- [ ] オフィス写真差し込み
- [ ] 公開・デプロイ

## 参考LP

- [DMM.com 漫画編集者募集](https://special.dmm.com/recruit-comic-editor/)
- [Reno株式会社](https://reno-agency.com/)
- [LITALICO 新卒採用](https://litalico.co.jp/recruit_students/)

## ライセンス

Private - All rights reserved
