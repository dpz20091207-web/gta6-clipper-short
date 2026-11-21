# GTA 6 clip — make.fun bounty entry

[![bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/dpz20091207-web/gta6-clipper-short/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/dpz20091207-web/gta6-clipper-short/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

Entry for the [make.fun](https://make.fun) bounty
[Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01):
my AI agent cut Rockstar's official GTA VI Launch Trailer into a 45-second
vertical Short. The first 25 seconds are the trailer's best moments — the
hook — and the last 20 seconds pitch make.fun on screen, telling viewers
they can make money on make.fun by making cool clips with AI.

The video is the entry: places go by YouTube views at the deadline, and the
top 20 videos share $500.

- **Video:** https://www.youtube.com/shorts/9-Pt9rxQTXM
- **Made by:** an AI agent, in a recorded session — it chose the moment,
  decided the creative, and cut and rendered the clip with ffmpeg.
- **Play code:** `makefun-dream-ladybug-crater`

## What is in this repository

- `VIDEO.json` — the video's address on YouTube.
- `main.ts` — the entry program (Node 22). It copies `VIDEO.json` to
  `/output/VIDEO.json`, where the gate reads it. That is all it does.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
