---
title: I finally rebuilt my personal site
description: Notes on rebuilding my personal site and the details that took longer than expected.
translationKey: i-finally-rebuilt-my-portfolio
locale: en
date: 2026-10-06
published: true
---

I had an older version of my site, but it was minimal: a few basic details and links. I left it that way longer than I meant to. I kept thinking about rebuilding it, then getting stuck on the fonts, layout, and what I wanted it to say.

Eventually, I got tired of having a site that existed but didn't reveal much about me. I didn't want another developer CV with a skills list and generic profile cards that could belong to anyone. I wanted something quieter and more personal, a site that showed what I do and how I do it.

I spent time looking through portfolios people shared on tech Twitter and GitHub. Many were great, but I didn't want gimmicky animations or an overly creative design. I wanted the site to feel intentional without being showy.

I chose Astro because most of the site is static content, so it didn't need a client-side app. Astro gives me pages, components, and content collections for projects and posts. I use JavaScript only where it's needed, and View Transitions make navigation feel less like moving between separate pages. I like that the structure is easy to understand: pages are regular Astro components, content lives in Markdown or small data files, and the URLs make sense. If I come back later, I can make changes without relearning a complicated system.

I skipped Tailwind because the design was small enough for basic CSS. I set the colors, content widths, spacing, breakpoints, responsive rules, and component styles myself. It took longer than I expected, but it made me think through those choices instead of reaching for utility classes.

I changed the design more often than the code. I started with a lot of gold and beige, but after a few days they felt like too much. I scaled them back, and the result came closer to the quieter look I wanted.

Fonts took ages, maybe embarrassingly long. I found Cal Sans while scrolling Twitter and used it for the English pages. The Japanese pages use Noto Sans JP.

I wanted both languages from the start, rather than adding Japanese later. The routes and copy are separate, and each project has an English and Japanese version. English and Japanese don't look equally dense at the same font size; line breaks, title sizes, line height, and content width all affect the balance. I kept adjusting those until both versions felt like the same site. Writing the Japanese copy also showed me issues I'd missed in English, especially title wrapping, spacing, and how much text fits on a page.

Light and dark mode took more time too. Changing colors was easy; getting borders, muted text, accents, buttons, and the theme toggle to work together took longer. I also fixed a few details in Safari. The mobile header looked cramped more than once when I checked it on my phone.

I added PWA support because I like being able to install websites I return to. There wasn't a strong product reason for it; I wanted that feature on my own site.

The project pages needed their own adjustments. I kept the reading width narrow and made a mobile version of the architecture diagram instead of shrinking the desktop one. Install behavior, résumé links, language switching, and theme controls all had to work within the same site.

The site is still changing, and Meguruto is still in development. I keep adjusting spacing and wording. I'll probably remove some things, and I may add things that seem useful now but feel unnecessary a few months later. That's part of having a personal site.

I added the blog for the same reason. I want to write about what I'm making, experiments I'm trying, and technical details that need more room than a project card. I don't want to wait until I have everything figured out. I'll write as I work, including about non-technical things that catch my interest.

So this is my first post.
