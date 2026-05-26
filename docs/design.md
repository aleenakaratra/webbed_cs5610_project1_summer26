# Project 1 — Design Document

**Aleena Mary Karatra**
CS 5610, Fall 2025 / Prof. John Guerra

---

## Project Description

This site is a personal homepage built for CS 5610. It's a portfolio — projects, resume, contact, a little about me — but the framing is borrowed from the Hyderabad Metro. A thin red line runs down the left side of the page. Each section is a station. As you scroll, the station you're at lights up. That's the whole gimmick; nothing else changes about how a normal portfolio works.

I picked the metro angle because I spent last year at Alstom in Hyderabad working on rail signalling software (the FBANE module, plus deployment work on NCRTC and Kiwi). It felt honest to let the site look a little like the trains I helped build software for, instead of slapping on a theme I don't have any real relationship to. The Hyderabad Metro Red Line is the one I rode most, so the site uses a muted version of that red.

The audience is mainly two groups. Recruiters and hiring managers looking at me for software roles need to find the resume and the Alstom work fast, so those are above the fold and one click away. Classmates and other grad students who might want to know what I'm working on or collaborate on something form a second, smaller group. There's also a small "Off the Clock" section because I spent a lot of undergrad doing Model UN, and I'd rather show that than pretend I only ever coded.

The site is plain HTML, CSS, and vanilla ES6 modules — no frameworks, no jQuery. It will be deployed on GitHub Pages.

---

## User Personas

### Persona 1 — Priya Menon, Technical Recruiter

Priya is a recruiter at a mid-sized defense contractor in New England, sourcing for software engineering co-ops and new-grad positions. She has a background in HR, not engineering, but she's read enough Khoury resumes to spot the strong candidates quickly. On any given week she's looking at 40–60 portfolios — most of them React templates that all look the same.

She opens portfolios on her work laptop during quiet stretches of her day, usually between Zoom calls. She gives each one about 90 seconds. What she needs to confirm: is this person actually employable, do they have shipping experience (not just course projects), is there a current resume she can forward to the hiring manager, and is the candidate available on the timeline she's recruiting for. If she can't find a resume link within ten seconds she closes the tab.

She's mildly tired of personal websites that try too hard. A site that's a little different but still gets her to the information she wants is a small bright spot in her day.

### Persona 2 — Daniel Ortiz, Master's Student at Khoury

Daniel is a second-semester MSCS student also at Northeastern. He's in CS 5610 himself this term, and he's also looking ahead to summer and fall for a co-op or research role. He found Aleena's site via a class Slack channel where someone shared "here are some good Project 1 examples to learn from."

He's not hiring anyone. He's there for two reasons. First, to see what a good Project 1 looks like, because his own design doc is due in a week. Second, because he saw "Alstom" and "rail systems" in the preview and got curious — he's worked on embedded systems before and wonders if there's any overlap or collaboration potential.

Daniel reads more carefully than Priya does. He'll click into project pages, read the descriptions, look at the GitHub links. He's also slightly judgmental about code quality and design choices, in the way grad students are about each other's work.

---

## User Stories

### Story 1 — Priya, Friday afternoon

It's 3:40 on a Friday and Priya has one more candidate to screen before she clocks out. The hiring manager wants someone with industry experience for a software engineering co-op starting in August, and Aleena's name came up because she has a confirmed General Dynamics co-op already (which Priya read as a positive — security clearance work means the candidate is already vetted).

She clicks the portfolio link from the LinkedIn message. The page loads, and the first thing she sees is the name, a one-line description, and a resume button. She clicks it. The resume opens in a new tab. She scans for industry experience, sees the Alstom year, and forwards both the resume and the portfolio link to the hiring manager with a one-line note. The whole interaction takes 45 seconds. The metro line styling registers as "oh, that's nicely done" in the back of her mind, but she doesn't dwell on it. She closes the tab and moves on.

### Story 2 — Priya, second visit

The hiring manager replies on Monday: "Looks promising, what are her actual technical projects like?" Priya opens the portfolio again. This time she scrolls. She doesn't need depth — she needs to confirm there's substance. She sees the projects section: Alstom FBANE work at the top, then a retinopathy ML grading project, then a multilingual TTS project, then a hackathon win. The fact that they're not all coursework projects is what registers. She replies to the hiring manager: "Solid mix of industry and research. Worth a call."

### Story 3 — Daniel, late at night

Daniel opens the site at 11:20 PM. He's procrastinating his own design doc. He scrolls through the home page first, then notices the metro line on the left and watches a station light up as he scrolls past it. He thinks "huh, that's clever" and immediately opens DevTools to see how it's implemented. He spends about three minutes on this — looking at the JS module, checking whether it's done with IntersectionObserver or scroll events. He learns something useful for his own project.

Then he scrolls to the projects section. He reads the Alstom project description more carefully than he intended to. He doesn't reach out — he never reaches out to people from class — but the next day in class he mentions to his project partner that he saw a good Project 1 example with a metro theme.

### Story 4 — Daniel, second visit

Two weeks later, Daniel is looking for someone to pair with on a CS 5800 algorithms problem set. He remembers the metro portfolio and finds it again through Slack. This time he clicks the contact section and sees an email and a LinkedIn link. He sends a one-line LinkedIn message asking if she wants to study together. Whether or not Aleena responds, the site has done what a portfolio should do: turned a stranger into a weak connection.

### Story 5 — Priya, six months later

Priya is staffing a different role and remembers there was a candidate with "the metro website." She can't remember the name, but she searches her inbox for "metro" and finds the forwarded link. The site is still live (it's on GitHub Pages, no deploy maintenance needed). The resume is current — Aleena updated it after starting at General Dynamics. Priya reaches out about a fall full-time position.

This story matters because it covers a rubric requirement most students forget: the site has to stay online for six months after the class ends. Designing for a six-month-later visit changes the choices — no broken links, no time-stamped content that ages badly, resume kept current.

---

## Mockup Brief

Mockups will be hand-drawn on paper, photographed, and included in the repo as images. Drawing them by hand instead of using Figma is deliberate — it's faster, and the slight roughness reads as real design thinking rather than template borrowing.

Four mockups planned:

**Mockup 1 — Home page (desktop).** Top of page shows name in large serif-or-transit-style sans, a one-line description below ("Software engineer, formerly at Alstom Rail Systems"), and a primary "Resume" button plus secondary "Projects" link. Below the hero, a short About paragraph. The metro line runs down the far left margin from the very top, with a station marker next to each section. The current station ("Home") is filled red; other stations are outlined.

**Mockup 2 — Projects page.** Five project cards stacked vertically (not a tidy grid — varying card heights based on how much content each project has). Alstom card is largest, IoT card is smallest. Each card has a project name, a 2–3 sentence description, a tech stack line, and a link out to GitHub or a writeup. Metro line continues down the left, with each project also marked as a sub-station.

**Mockup 3 — About / Off the Clock.** Two-column layout. Left column: a short autobiographical paragraph (Kerala → Hyderabad → Boston, a sentence about the rail work, a sentence about what's next at GDEB). Right column: an "Off the Clock" list — Model UN, reading, drama background — kept brief and specific.

**Mockup 4 — Mobile view.** Same content as desktop home but stacked. The metro line moves from a left-margin element to a thin colored bar at the top of the viewport that scrolls horizontally as the user scrolls vertically. This is the trickiest part of the implementation, so getting the mockup right early matters.

Each mockup will have a one-sentence caption underneath explaining the key design choice (e.g. "varied card heights to avoid the generic three-column grid look").

---

## Notes on the Creative Component

The metro-line scrollspy is the creative differentiator (rubric: 5 pts for an "original component that differentiates"). The implementation is small: an IntersectionObserver watches each section, and as a section enters the viewport the corresponding station marker on the metro line gets a "current" class that fills it in red. A small "you are here" indicator (a slightly larger dot) animates along the line as the user scrolls. This is also where the rubric's "original JS functionality with more than 5 lines of code" is earned — the scrollspy module is the main JS file, written from scratch in ES6, not borrowed from a library.

---

## Stack & Deployment

- HTML5, CSS3 (custom, no Bootstrap for the layout but Bootstrap 5 grid utilities are used per the rubric requirement)
- Vanilla ES6 modules — `type="module"` in `package.json` and in all `<script>` tags
- Deployed to GitHub Pages
- ESLint with the class config, Prettier-formatted, W3C-compliant
- MIT licensed
- Repo includes README with author, class link, objective, screenshot, build instructions, and a GenAI usage section
