# QuickSwap Interface

## Hot to build

- パッケージのインストール `$ yarn install`
- ローカルテスト環境のスタート`$ yarn start`
- コードのビルド `$ yarn build2`
  - ./docs にファイルがビルドされます

## 編集するファイル等

- src/assets/images/tokenLogo/　 ← ここにコインのコントラクトアドレスを名前にしたトークンの画像ファイルを億。png, webp 等対応
- src/constants/tokens.json ← トークンリスト　トークンはこの json ファイルに記載する
- src/constants/index.ts ← このファイルの１８２行目にある SUGGESTED_BASES にデフォルトのトークンを記載する
- src/pages/LandingPage/LandingPage.tsx 　 ← 　ランディングページの本体はここ。

## 以下オリジナルの Readme

An open source interface for QuickSwap -- a protocol for decentralized exchange on Polygon.

Enabling users to:

- Add and remove their liquidity positions on QuickSwap protocol
- Swap tokens on QuickSwap protocol
- Participate in single and dual mining programmes running on QuickSwap protocol
- Participate in Dragon's lair running on QuickSwap protocol
- Participate in Dragon's syrup running on QuickSwap protocol

Useful links:

- Website: [quickswap.exchange](https://quickswap.exchange/)
- Info: [info.quickswap.exchange](https://info.quickswap.exchange)
- Twitter: [@QuickswapDEX](https://twitter.com/QuickswapDEX)
- Reddit: [/r/QuickSwap](https://www.reddit.com/r/QuickSwap)
- Discord: [QuickSwap](https://discord.gg/KTgdBTnU)

## Accessing the QuickSwap Interface

To access the QuickSwap Interface, use an IPFS gateway link from the
[latest release](https://github.com/QuickSwap/interface-v2/releases/latest),
or visit [quickswap.exchange](https://quickswap.exchange).

The QuickSwap interface is hosted on IPFS in a decentralized manner. `quickswap.exchange` just holds a CNAME record to the Cloudflare IPFS gateway. You can use [any](https://ipfs.github.io/public-gateway-checker/) public or private IPFS gateway supporting origin isolation to access QuickSwap interface if for some reason the Cloudflare gateway doesn't work for you

Just go to `<your favorite public ipfs gateway>/ipns/quickswap.exchange`

⚠️ Make sure the gateway supports origin isolation to avoid possible security issues: you should be redirected to URL that looks like `https://quickswap.exchange.<your gateway>`

## License

[GNU GPL V3.0](./LICENSE)

## Credits

To all the Ethereum and Polygon community
