# 兰武洋 · 个人学术主页

A single-page academic homepage with a blog, built with Jekyll and deployed on
GitHub Pages. No local build step is required — push to `main` and GitHub compiles
it for you.

**当前状态**：姓名、单位、导师、研究方向、8 篇论文均已填入。剩下 4 个 TODO
标在下面第 1 节，都在等你补真实信息。

---

## 1. 还需要你补的内容

### 必改（否则站长这样能用，但不对劲）

| 位置 | 现状 | 要做什么 |
|------|------|----------|
| `_config.yml` → `email` | `yourname@bupt.edu.cn` | 换成真实邮箱（也出现在 Contact 区块） |
| `_config.yml` → `github_username` | `lanwuyang` | 换成真实 GitHub 用户名 |
| `_config.yml` → `url` | `https://lanwuyang.github.io` | 与 GitHub 用户名保持一致 |

### 强烈建议补

- **论文的 `abstract`**：`_data/publications.yml` 里 4 篇 featured 论文的摘要是
  我按标题写的初稿，**没读过原文**。请改成你自己的表述——写你做了什么、
  关键数字是多少。嫌麻烦就删掉这一行，卡片会正常显示，只是没有摘要。
- **论文的 `links`**：`TODO 补 DOI` 那几处，补上 DOI / PDF / 代码地址。
  链接为空数组 `[]` 时该行不显示，不会报错。
- **`_data/news.yml`**：目前只有一条"站点上线"。已注释掉两条格式示例，
  照着写你自己的论文录用、报告、参会。
- **`_data/beyond.yml`**：占位的三项爱好，换成你真实在做的。
- **头像**：把照片放到 `assets/img/avatar.jpg`，然后在 `_config.yml` 把
  `avatar` 设成 `/assets/img/avatar.jpg`。留空则显示"W"首字母。
- **CV**：把 PDF 放进 `assets/files/`，在 `_config.yml` 设 `cv: /assets/files/cv.pdf`。
- **Google Scholar / ORCID**：填了才会显示对应链接，留空自动隐藏。

### `_config.yml` 完整说明

| Key | 说明 |
|-----|------|
| `title` / `author_name` | `Wuyang Lan`。**必须**与 `_data/publications.yml` 里的写法一致，否则名字不会加粗 |
| `name_cn` | `兰武洋`，显示在大标题旁边 |
| `tagline` | 现在写死为 `PhD Student · Medical AI`（在 `index.html` 的 `.hero-role` 里） |
| `baseurl` | 仓库名为 `lanwuyang.github.io` 时留 `""`；仓库叫别的名字必须填 `"/仓库名"` |

### `index.html` — 个人简介

两段 bio 已经写好，第一段是单位与导师（事实性内容），第二段描述研究方向。
**第二段请你自己过一遍**，确认措辞符合你实际在做的事。

### `_data/publications.yml`

```yaml
- title: "Paper Title"
  authors: ["Your Name*", "Coauthor A", "Advisor†"]   # * = equal, † = corresponding
  venue: "NeurIPS"
  venue_type: conference     # journal | conference | preprint | workshop | under_review
  year: 2026
  featured: true             # true = big card with abstract; false = compact list
  abstract: "One sentence on what it does and the headline number."
  links:
    - { name: Paper, url: "https://..." }
    - { name: Code,  url: "https://..." }
```

`venue_type` only controls the badge color: conference = amber, journal = green,
preprint/workshop = grey, under_review = dashed outline.

### `_data/news.yml`

Newest entry at the top. Inline Markdown works: `**bold**`, `[text](url)`.

---

## 2. Write a post

Create `_posts/YYYY-MM-DD-slug.md`:

```markdown
---
title: "Your Title"
date: 2026-11-12 09:00:00 +0800
description: "One sentence that shows up in the list and in search results."
tags: [methods, reading]
---

Body text in Markdown.
```

The file name controls the URL: `2026-11-12-scaling-laws.md` →
`/writing/scaling-laws/`.

Add `math: true` to the front matter if the post uses `$...$` math.

Delete `_posts/2026-11-11-hello-world.md` once you've looked at it.

---

## 3. Deploy

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:<username>/<username>.github.io.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**

The site appears at `https://<username>.github.io` within a minute or two. First
builds sometimes take longer; check the **Actions** tab if it seems stuck.

### Custom domain (optional, ~¥80/year)

Buy a domain, then in **Settings → Pages → Custom domain** enter it. At your DNS
provider add:

- `A` records for `@` → `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- `CNAME` for `www` → `<username>.github.io`

Tick **Enforce HTTPS** once the certificate is issued. GitHub creates a `CNAME`
file in your repo — don't delete it.

---

## 4. Local preview (optional)

You only need this if you want to see changes before pushing.

```bash
# Requires Ruby. Check with: ruby -v  (needs >= 2.7 for Jekyll 4.3)
bundle install
bundle exec jekyll serve --livereload
# → http://localhost:4000
```

If your system Ruby is too old, the least painful route on macOS is Docker:

```bash
docker run --rm -v "$PWD:/srv/jekyll" -p 4000:4000 -it jekyll/jekyll \
  jekyll serve --livereload
```

---

## File map

```
_config.yml              site settings — start here
index.html               homepage; bio prose lives inline
writing.html             the /writing/ index
_data/news.yml           news timeline
_data/publications.yml   publications
_data/beyond.yml         hobbies
_posts/                  blog posts
_layouts/default.html    page shell: nav + footer
_layouts/post.html       single post
_includes/head.html      meta, fonts, theme bootstrap
_includes/nav.html       navigation
_includes/footer.html    footer
assets/css/style.css     all styling, light + dark tokens
assets/js/main.js        mobile menu + theme toggle
assets/files/            put cv.pdf here
assets/img/              put avatar.jpg here
```

## Things that are easy to get wrong

- **`baseurl`** — if your repo is not `<username>.github.io`, every link breaks
  unless `baseurl` is set. This is the single most common mistake.
- **`author_name`** — must match the publications file character-for-character,
  or your name won't be bolded.
- **Filenames in `_posts`** — a bad date in the filename means the post silently
  doesn't build.
- **Jekyll caches** — if a change doesn't show up locally, `rm -rf _site .jekyll-cache`
  and rebuild.
- **Only whitelisted plugins work** on the default Pages build. `jekyll-feed`,
  `jekyll-sitemap`, `jekyll-seo-tag` are all fine. Anything else needs a GitHub
  Actions workflow.
