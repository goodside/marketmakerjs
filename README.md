# MarketMakerJS

Proof-of-concept demo of automated trading on the Stellar network
with pure client-side JS.

Pre-*pre*-alpha software — just planning/design at this point


## Motivation

Bitcoin gives us a decentralized, censorship-proof means of
storing and transmitting wealth, but its economy is ironically
reliant on centralized, for-profit exchanges.

Exchanges are notoriously risky. Early ones absconded with customer deposits,
and Mt. Gox [ran fraudulently for
years](http://blog.wizsec.jp/2015/04/the-missing-mtgox-bitcoins.html) after an
undisclosed theft in 2011. Honestly run exchanges are still magnets for hackers,
as seen in the [$72M theft from
Bitfinex](https://en.wikipedia.org/wiki/Bitfinex_hack) in which customers lost
39% of their holdings. And when all goes well, traders still indirectly bear the
costs of servers, support staff, KYC/AML identity verification, and constant
DDoS attacks from market manipulators.

[Stellar](https://stellar.org/), started by Jed McCaleb in 2014, is a
decentralized payment network and cryptocurrency with a built-in asset exchange.
Any user may become an "anchor" and issue their own custom tokens to represent
deposits of arbitrary assets, such as Bitcoin or US dollars. Other users can
then trade these tokens to speculate both on the value of the underlying asset
and the reputation of the anchor. Because this transaction happens on the
Stellar network itself, not on a centralized exchange, users do not need to
trust an exchange operator with their funds. Users also can't be censored from
participating anonymously, easing friction for new traders entering the market.

For all their merits, decentralized exchanges like Stellar's have not caught on.
Traders need liquidity, and trivially low volume creates a chicken-and-egg
problem: Users stay away because know their trades won't be executed at a fair
price, and would-be market makers and arbitrageurs stay away because there are
no profit to developing, testing, and hosting trading algorithms for an empty
market.

This project aims to fix the deadlock by making it radically simple for
*absolutely anyone* to become a market maker. A Stellar user should be able to
point her browser to this Github project, type her secret key, and passively
earn a return on her money every hour the tab is open. [There's no step
three.](https://www.youtube.com/watch?v=6uXJlX50Lj8)

## License

&copy; Riley Goodside 2017. MIT-licensed.
