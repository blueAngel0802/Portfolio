# My Portfolio (React) — clone-style

This project recreates the *look and layout* from the screenshots you shared:
- Hero with photo + headline (accent green)
- Social icons row + Download button
- Vertical side email (left)
- Scroll rail indicator (right)
- "My Journey" centered timeline with alternating cards
- Skills section with category labels + devicon logos
- Projects cards + Contact section (mail-to submit)

## Run
```bash
npm install
npm run dev
```

## Customize
Edit `src/data.js` (name, text, links, timeline, skills, projects, contact).

### Add your photo
Put an image in `public/` and set `data.hero.photo.src` to `"/your-file.jpg"`.

### Add your resume for Download
Put `resume.pdf` in `public/` and set `data.hero.downloadHref` to `"/resume.pdf"`.
