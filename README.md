# 競馬情報検索アプリ

## 概要

このアプリは、競馬ファンが**直感的かつ柔軟に馬の情報を検索・比較できる**ことを目指して開発されたWebアプリケーションです。  
URL: [https://akio-horse-search.onrender.com/](https://akio-horse-search.onrender.com/)

<img width="937" alt="{06CB55D2-CB50-426E-AAFC-E5F814963268}" src="https://github.com/user-attachments/assets/4ea867bc-abf1-4f2e-ba91-37b1d24f37e7" />


---

## ペルソナ

- **名前**：花ちゃん  
- **年齢**：20歳  
- **趣味**：競馬、ゲーム、YouTube  
- **職業**：大学生

---

## 想定される利用シナリオ

花ちゃんは大学生で、最近競馬に興味を持ち始めました。  
多くの初心者がそうであるように、まずはNetkeibaなどの大手競馬情報サイトで馬を調べることが多いです。  
しかし、実際に使ってみると以下のような課題に直面します。

- 検索機能が直感的でなく、柔軟性に欠ける
- サイトやアプリのナビゲーションが分かりづらい
- 複数の馬を比較するのが面倒で、情報が一覧で見づらい

---

## このアプリでできること・解決できる悩み

- **直感的な検索体験**  
  馬名や条件を入力するだけで、目的の馬をすぐに見つけられます。  
  迷わず使えるシンプルなUI設計で、初心者でもすぐに使いこなせます。

- **スムーズな比較機能**  
  検索結果から馬をクリックすると、別タブで詳細情報を表示。  
  複数タブを開いて、気になる馬同士を並べて比較できます。  
  これにより「どの馬がどんな特徴か」「どちらが自分の予想に合うか」を簡単に見比べられます。

- **ナビゲーションの分かりやすさ**  
  必要な機能・情報にすぐアクセスできるシンプルな導線。  
  「迷わず、探したい情報にすぐたどり着ける」ことを重視しています。

---

## こんな人におすすめ

- 競馬を始めたばかりで、情報検索にストレスを感じている人
- 複数の馬を簡単に比較したい人
- 既存サービスの使いづらさに悩んでいる人

---

## Getting Started

Running the app, The main branch is develop/v1

```bash
npm install
npm run dev
```
Sure! Here’s a clear way to write that instruction in English for your README or Getting Started section:

You need to set your API information in a .env.local file.
```
NEXT_PUBLIC_API_BASE_URL="API_BASE_URL"
```
