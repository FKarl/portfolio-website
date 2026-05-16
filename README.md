# Fabian Karl — Portfolio Website

Source code for [fkarl.de](https://www.fkarl.de), built with Next.js 15 (static export), Tailwind CSS, and next-themes.

## Sections

About · Now · Timeline · Publications · Projects · Skills · Contact

---

## Maintenance guide

Things that need manual updates when your situation changes.

### Publications

**Live count in the header stat bar** — `components/header.tsx`, line ~6:
```ts
const PUB_COUNT_FALLBACK = 11
```
Bump this number whenever you publish something new. It is only shown when DBLP is unreachable; normally the live count is fetched automatically.

**Fallback publication list** — `components/publications.tsx`, `FALLBACK` array (~line 17):
Shown in the publications section when DBLP cannot be reached. Add a new entry at the top of the array whenever you publish something new so the list stays current. Fields:
```ts
{
  key: "unique-key",
  title: "Full paper title",
  authors: ["Fabian Karl", "Co-author Name"],
  venue: "Conference / Journal name",
  year: 2025,
  type: "conference" | "journal" | "workshop" | "preprint" | "thesis",
  url: "https://link-to-paper",
  tags: ["NLP", "Topic"],
}
```

---

### "Now" section

`lib/i18n.ts` → `now.items` (both `en` and `de` blocks).  
Update these three cards whenever your current focus shifts. Each card has:
- `statusLabel` — short verb ("Building", "Researching", "Drafting")
- `title` — what you're working on
- `body` — one sentence of detail
- `tag` — hashtag-style topic labels

---

### Timeline

`lib/i18n.ts` → `timeline.items` (both `en` and `de` blocks).  
Add a new entry at the top when you start a new position or finish a degree.

---

### Header stats

`lib/i18n.ts` → `stats` (both `en` and `de` blocks), and the hardcoded values in `components/header.tsx` `StatBar`:

| Stat | Where to update |
|------|----------------|
| Years coding (`"9"`) | `header.tsx` StatBar — hardcoded string `"9"` |
| M.Sc. grade (`1.2`) | `header.tsx` StatBar — hardcoded string `"1.2"` |
| B.Sc. grade (`1.3`) | `header.tsx` StatBar — hardcoded string `"1.3"` |
| Delta labels ("since 2017", "Ulm '24") | `lib/i18n.ts` → `stats.deltaYears`, `deltaGrade`, `deltaBsc` |

---

### CV file

Replace `public/resources/CV_Fabian_Karl.pdf` with the updated version. The filename is referenced directly in `components/header.tsx`.

---

### Projects

`lib/i18n.ts` → `projects.items` (both `en` and `de` blocks).  
Each project entry:
```ts
{
  title: "Project Name",
  tag: "Topic · Subtopic",
  body: "One or two sentence description.",
  image: "/assets/projects/<folder>/p1.png",  // optional; uses monogram fallback if omitted
  links: [
    { label: "Paper", href: "https://..." },
    { label: "Code",  href: "https://github.com/..." },
  ],
}
```
Place project images in `public/assets/projects/<project-name>/p1.png`. The card renders them at 16:9, so crop/pad images to that ratio before saving.

---

### Contact channels

`lib/i18n.ts` → `contact.channels` (both `en` and `de` blocks).  
Update if your email, institution links, or profiles change.

---

### Copyright year

`components/footer.tsx` — hardcoded `© 2026 Fabian Karl`. Update at the start of each year.

---

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```
