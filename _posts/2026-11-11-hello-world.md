---
title: "Hello, world"
date: 2026-11-11 10:00:00 +0800
description: "Why I'm starting a site, and what I plan to put here."
tags: [meta]
---

This is the first post. It exists so you can see how the template renders, then
delete it and write your own.

## Why a personal site

A paper is written for reviewers. It has to be defensible, hedged, and shaped to
fit a page limit. The parts I actually learn from — the dead ends, the ablations
that went nowhere, the two weeks lost to a data-loading bug — never make it in.
Those are the things worth writing down, both because someone else will hit the
same wall and because writing them forces me to notice what I actually
understand.

## What to expect

Roughly three kinds of posts:

1. **Method notes** — a technique I had to reconstruct from a paper and its code,
   written out so the next person doesn't have to.
2. **Reading notes** — one paper, what it claims, whether I believe it, and what
   the experiment would need to show to be convincing.
3. **Process** — how I work, what tooling survives contact with a deadline, and
   the habits that turned out to be expensive.

## How this site is built

Plain [Jekyll](https://jekyllrb.com) on GitHub Pages. Publications live in a
YAML file, posts are Markdown, and there is no build step beyond pushing to
`main`. I wanted something I'd still be able to update in three years without
relearning a framework.

> The best system is the one you keep using. Everything else is decoration.

Inline math works if you set `math: true` in the front matter, like this:
$f(x) = \sigma(Wx + b)$.

Here's a code block:

```python
def attention(q, k, v):
    scores = q @ k.T / (q.shape[-1] ** 0.5)
    return scores.softmax(-1) @ v
```

And a table:

| Method | Acc. | Latency |
|--------|------|---------|
| Baseline | 71.2 | 41 ms |
| Ours | 78.9 | 43 ms |

That's the shape of it. Now delete this file and write the first real one.
