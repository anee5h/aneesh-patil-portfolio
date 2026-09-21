---
title: メグルト
projectSlug: meguruto
locale: ja
summary: 日本で暮らす人が、目的地の一覧だけでなく、移動時間や状況を踏まえて次の行き先を決めるための旅行発見プロダクトです。
status: building
published: true
featured: true
stack:
  - React 19
  - TypeScript
  - React Router 7
  - Tailwind CSS 4
  - Vite 8
  - Supabase
  - Open-Meteo
  - Leaflet
  - react-leaflet
  - "@react-map/japan"
  - i18next
  - Vitest
  - Playwright
  - Cloudflare Pages
year: 2026
role: 開発
logo: ../../../assets/meguruto/logo.svg
cover: ../../../assets/meguruto/meguruto-ja.png
coverAlt: 旅行の条件とおすすめの行き先を表示するメグルトの画面。
screenshots:
  - image: ../../../assets/meguruto/meguruto-ja-mobile.png
    alt: 旅行の条件とおすすめの行き先を表示するメグルトのモバイル画面。
    caption: モバイルでも旅行の条件、天候、移動時間を一つの画面で確認できます。
architecture:
  image: ../../../assets/meguruto/architecture.svg
  alt: メグルトのブラウザ、Reactアプリケーション、Supabase、外部サービス、Cloudflare Pagesの構成図。
  caption: メグルトのアプリケーションとデータサービスの構成です。
links:
  github: https://github.com/anee5h/trip-planner
  website: https://meguruto.app
---

## メグルトについて

メグルトは、日本で暮らす人に向けたバイリンガルの旅行発見プロダクトです。日帰りや週末の旅行を考えているものの、使える時間や移動手段、過ごし方に合う目的地が決まっていない場面を想定しています。

現在は、設計上の判断と残っている課題を中心に紹介しています。利用者数や成長率については、まだ検証できていません。

## 担当と技術選定

インターフェース、ルーティング、データフロー、デプロイまで、プロダクト全体を開発しています。フロントエンドにはReactとTypeScriptを使い、アプリケーションデータはSupabase、地理情報はマップ関連ツール、天気情報はOpen-Meteoで扱っています。変化に合わせて、VitestとPlaywrightで動作を確認しています。

## エンジニアリング上の課題

### 移動時間を、過度に正確に見せずに推定する

「この週末に行けるか」は距離だけでは決まりません。交通手段、地域ごとの違い、不完全な経路データも結果に影響します。メグルトでは、移動時間を前提付きの推定として示し、正確に見える一つの数字にまとめないようにしています。

### 不完全なデータから提案する

目的地のデータは、品質と限界がわかって初めて使えます。カタログ、地図、天気、ユーザーの意図を組み合わせながら、不確実性を画面の裏に隠さないことを課題にしています。

## 現在の状態と制約

メグルトは開発中です。提案内容、移動時間の推定、目的地データの網羅性について、さらに検証が必要です。
