# 📚 Local Markdown Viewer

Got your brain messed up with thousands of loose notes, half-cooked ideas, and scattered docs everywhere?  
Perfect. This project is for you.

A simple `.md` file viewer — neat, folder-organized, and **without any bloated dependencies**.  
Open it in your browser. Read. That’s it. Why complicate?

---

## 🚀 How to Use It

### 1. Clone the freaking repo

```bash
git clone https://github.com/ibaifernandez/visor-md.git
cd visor-md
```

### 2. Drop your docs into `/docs`

Organize your Markdown files however you want:

```plaintext
docs/
├── project-1/
│   └── intro.md
├── ideas/
│   └── manifesto.md
└── stuff-that-doesnt-fit-anywhere/
    └── random.md
```

### 3. Generate the file list

Every time you add new files, run:

```bash
node generateFileList.js
```

Yeah, manually. Like the keyboard gods intended.  
(No automation. No black magic. It's JavaScript, not Hogwarts.)

### 4. Run a local server

If you don’t have `http-server` installed:

```bash
npm install -g http-server
```

Then run:

```bash
http-server .
```

Open your browser where the terminal tells you.  
Boom.

---

### ✨ What It Does

- Displays your Markdown docs — no fuss.
- Auto-organizes them into folders with accordions.
- Uses `marked.js` to render beautifully.
- Includes a disclaimer you can dismiss (because nagging is optional).
- Ugly if you want, pretty if you tweak it. Your call.

---

## 📎 Loose Notes

This project doesn’t store changes.  
There’s no backend.  
And it’s *definitely* not trying to be Notion.

It’s like an old notebook… just sharper on a retina screen.

If you break it, well — that’s on you.

---

## 🧠 Philosophy

Because not everything needs to be SaaS, freemium, or cost your digital soul.  
Because `.md` files deserve love too.  
Because you’re worth it. Or at least your notes are.

---

## 🆓 License

MIT. Do whatever you want with it.  
No need to credit me.  
Just don’t pretend you built it from scratch. That would be lame.
