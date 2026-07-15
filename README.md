# Financial Instruments — Complete Reference Guide

A comprehensive 24-page practical reference on financial instruments, markets, and trading mechanics — compiled from investopedia, schwab, vanguard, CFI, and interactivebrokers. Designed as a print-ready study guide for finance professionals and interview preparation.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Pages](https://img.shields.io/badge/24%20pages-compact-green)]()
[![Level](https://img.shields.io/badge/level-beginner--intermediate-orange)]()
[![Topics](https://img.shields.io/badge/topics-finance-blue)]()

## 📖 What's Inside

Sixteen chapters covering the full spectrum of tradable financial instruments and market mechanics:

1. **What Are Financial Instruments?** — Primary vs. derivative, classification framework
2. **How Stock Markets Work** — Exchanges, order books, market structure, trading hours
3. **Cash Instruments: Stocks & Equities** — Common/preferred stock, valuation, IPO process
4. **Debt Instruments: Bonds & Fixed Income** — Treasuries, munis, corporates, TIPS, MBS, ratings
5. **Derivative Instruments Overview** — Exchange-traded vs. OTC, core derivative types
6. **Futures Contracts** — Margin mechanics, hedgers vs. speculators, settlement at expiration
7. **Options Contracts** — Calls/puts, Greeks basics, American/European style, ESOs, employee stock options
8. **Forwards & Swaps** — Interest rate swaps, currency swaps, credit default swaps
9. **ETFs, Mutual Funds & REITs** — Expense ratios, creation/redemption, tax efficiency
10. **Credit Default Swaps & Synthetic Products** — CDS pricing in basis points, auctions, recovery rates
11. **Settlement, Delivery & Payment Mechanics** — T+1/T+2 cycles, DTC, settlement risk
12. **Trading Orders, Markets & Exchanges** — Market/limit/stop orders, market makers, dark pools, bid-ask spread
13. **Margin, Short Selling & Leverage** — Reg T margin, maintenance calls, PDT rule, unlimited downside risk
14. **Dividends, Stock Splits & Corporate Actions** — Declaration/ex-dividend/record/payment dates, DRIPs, buybacks
15. **Foreign Exchange (Forex)** — Currency pairs, major pairs, spot vs. forwards, market participants
16. **Risk Management & Hedging Strategies** — Basis risk, VaR, systemic risk, financial crisis lessons

## 📥 Quick Start

```bash
# Generate PDF from markdown
npx md-to-pdf guide.md --config-file scripts/guide-pdf-config.js
```

The PDF is pre-generated as `guide.pdf` (Letter size, 24 pages, ~850 KB) — ready to print.

## 🏗️ Project Structure

```
financial-instruments-guide/
├── guide.md                          # Source markdown (~830 lines)
├── guide.pdf                         # Generated PDF (print-ready)
└── scripts/
    ├── guide-pdf-config.js           # md-to-pdf Puppeteer config (header/footer)
    └── guide-pdf.css                 # Print stylesheet (Inter font, justified text)
```

## 📚 How to Use This Guide

| Audience | Suggested Path |
|----------|---------------|
| **Interview prep** | Read chapters in order — every concept is self-contained |
| **Quick reference** | Jump to Chapters 6–8 for derivatives deep-dive, Chapter 11 for settlement mechanics |
| **Trading fundamentals** | Focus on Chapters 2, 3, 12–14 for market mechanics and execution |
| **Fixed income / bonds** | Chapters 4 + 10 for comprehensive fixed-income coverage |

## 🔧 Under the Hood

- **Markdown → PDF pipeline**: [`md-to-pdf`](https://github.com/benjue/md-to-pdf) (wraps Puppeteer/Chromium)
- **Config**: `scripts/guide-pdf-config.js` — header/footer templates, Letter page size
- **Styling**: `scripts/guide-pdf.css` — Inter font family, justified paragraphs, responsive tables, print color-adjust

## 🎓 Sources

Content compiled and synthesized from:
- Investopedia (financial instruments, derivatives, settlement, options)
- Charles Schwab (bond types, trading orders, margin)
- Vanguard (ETFs, mutual funds)
- Corporate Finance Institute (asset classification)
- Interactive Brokers Campus (short selling, margin, dividends, forex)
- FINRA / SEC / OCC regulatory publications

## 📝 License

[MIT](LICENSE) — free to use, modify, and distribute.
