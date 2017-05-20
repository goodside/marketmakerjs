# MarketMakerJS

Proof-of-concept demonstration of automated trading on the Stellar network
with pure client-side JS.

Pre-alpha software — currently in planning/design stage.


## Motivation

Though Bitcoin gives the world a decentralized, censorship-proof means of
storing and transmitting wealth across borders, its economy is ironically
reliant on centralized, for-profit exchanges.

Cryptocurrency exchanges are notoriously risky: Early efforts often simply
absconded with customer deposits, and Mt. Gox, once the largest Bitcoin exchange
in the world, [ran fraudulently for
years](http://blog.wizsec.jp/2015/04/the-missing-mtgox-bitcoins.html) after an
undisclosed theft of its Bitcoin holdings. Even trustworthy exchanges are
magnets for hackers, as seen in the [$72M theft from
Bitfinex](https://en.wikipedia.org/wiki/Bitfinex_hack) in which customers lost
39% of their holdings. And when all goes well, traders still indirectly bear the
costs of servers, support staff, KYC/AML identity verification, and constant
DDoS attacks from market manipulators.

[Stellar](https://stellar.org/), started by Jed McCaleb in 2014, is a
decentralized payment network and cryptocurrency with a built-in asset exchange.
Any user may become an "anchor" and issue their own custom tokens to represent
deposits of arbitrary assets, such as Bitcoin or US dollars. Other users can
then trade these tokens with each other to speculate on the value of the
underlying asset. Because this transaction happens on the Stellar network
itself, not on a centralized exchange, users do not need to trust an exchange
operator with their funds. Just as importantly, because the network is
decentralized, a user can't be censored from participating anonymously &mdash; a
stark contrast to modern exchanges that require proof of identity.

For all their merits, decentralized exchanges (DEXs) have not yet had any
significant adoption. Traders need market liquidity, and the trivially low
volume on most DEXs creates a chicken-and-egg problem for attracting users. This
project aims to fix that.

## Design

[[TODO]]

## License

&copy; Riley Goodside 2017. MIT-licensed.
