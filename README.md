# 💍 Samjas & Abiha — Wedding Invitation

A digital wedding invitation microsite for **Samjas & Abiha**, 26 July 2026, Tirur, Kerala.

---

## 📁 Project Structure

```
wedding-site/
├── index.html      ← Main page
├── style.css       ← All styles
├── script.js       ← Animations & interactions
├── vercel.json     ← Vercel deployment config
├── assets          ← image assets
└── README.md
```

---

## 🖼️ Assets — action needed

- `assets/hero.webp` — currently set to the illustration you shared. Swap in the real photo of Samjas & Abiha when ready.
- `assets/header-top.webp` — currently a plain gold placeholder shape. Replace with a custom monogram graphic if you'd like one.
- `assets/loader.webp` — currently a plain gold placeholder. Replace with a custom graphic if you'd like one.
- `assets/metaimage.jpg` — auto-generated from the hero image for social-media link previews. Regenerate once you swap the hero photo.

---

## 🚀 Deploy to Vercel via GitHub

### Step 1 — Push to GitHub

1. Create a new repository on [github.com](https://github.com/new)
   - Name it something like `samjas-abiha-wedding`
   - Set it to **Private** (recommended)

2. Upload these files — either via the GitHub web UI
   *(drag & drop into the repo)* or via terminal:

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/samjas-abiha-wedding.git
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (free account works)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"** and select your GitHub repo
4. Leave all settings as default — Vercel will auto-detect it as a static site
5. Click **Deploy**

✅ Your site will be live at `https://your-project-name.vercel.app`

---

## ✏️ Customisation

All editable values are in their respective files:

| What to change | Where |
|---|---|
| Names, dates, venue text | `index.html` |
| Colours, fonts, spacing | `style.css` (`:root` tokens at top) |
| Animation timings | `script.js` |
| Image URLs | `style.css` (`:root` block) and `index.html` `src` attributes |

---

## 🎨 Design Tokens (warm gold / amber theme)

| Token | Value | Used for |
|---|---|---|
| `--navy` | `#7A4A21` | Headings, buttons |
| `--blue-soft` | `#C9A15A` | Accents, borders, dividers |
| `--gold` | `#D4AF6A` | Subtle highlights |
| `--text-mid` | `#5C4630` | Body text |
| `--white` | `#FBF3E7` | Page background (warm ivory) |

---

## 📱 Browser Support

Works on all modern browsers. Tested on Chrome, Safari, Firefox, and mobile.

---

*Made with love for Samjas & Abiha ✨*
