---
title: I finally rebuilt my personal site
description: Some notes on rebuilding my personal site, the choices I made, and the small details that took longer than expected.
slug: i-finally-rebuilt-my-portfolio
locale: en
date: 2026-10-06
published: true
---

There was an older version, but it was pretty minimal. It just had the bare bone information and links then sat like that for longer than I'd planned. I have been meaning to remake it better for a long time. Then I'd stop and think about fonts, layout, what I wanted it to say then leave it be.

Finally I grew tired of having a site that was real, but not revealing anything about me. I didn't want another developer CV with skills and four to six profile cards that could have been anyone's. I wanted it to be a little quieter and personal. It had to show what I do, and how I do it.

I spent a while browsing the developer portfolios that everyone was sharing on tech twitter and on github. A lot of them were really good, but I knew that I didn't want any gimmicky animations or an overly creative portfolio. I wanted to strike the right balance where the site felt intentional, but not showy.

I began with Astro. Since the bulk of the site is content and static pages, I wasn't required to implement a client-side app within the portfolio itself. Astro provides me with pages and components, content collections for my projects and posts, and I only need client-side JavaScript sparingly; I also use its view transitions, so the navigation doesn't look much like a series of discrete pages.

I appreciate that this project is straightforward to get into and grasp. The pages are all normal Astro parts, the content is contained in Markdown or information modules, and the URL makes sense. If I return to it later, I shouldn't have to keep in mind a fancy mechanism before I can alter a web page.

I intentionally skipped Tailwind. The design was small enough to require basic CSS. I have a handful of color variables, content widths, spacing, breakpoints, responsive rules, and component styles. It also made me think through what the spacing, colors, and breakpoints should be, instead of defaulting to utilities, which took longer than I anticipated.

I ended up changing the design more times than I did the code. Originally I had way more gold and beige from the start, but after staring at it for a couple of days I began to dislike that there was so much repetition in the website, so I brought it down a bit. The end result is a more subtle website, more in line with what I wanted.

Fonts took ages and were pretty embarrassing. I came across Cal Sans while scrolling on Twitter. I loved it and I used for the English pages. For Japanese I used Noto Sans JP. 

The point size is the same but it doesn't quite feel as dense in English and Japanese, and line breaks on both texts really help and break the balance quickly. 

I kept playing with title sizes, line heights and max width until the two version felt like the same layout with different texts pasted into it.

Right from the start I knew I wanted both English and Japanese, and I didn't want to construct the entire site in English and tack on Japanese content later. The routes are independent, the copy is independent, and each project entry contains both an English and Japanese edition. The Japanese text raised issues - such as title wrapping, appropriate spacing and quantity of text on a page - that I hadn't seen in the English.

Same with light and dark mode: more work than I thought. The dark and light colors are easy, changing the borders and muted text, accents, buttons, and theme toggle to work nicely as a complete whole takes a little longer. Safari and theme behavior gave me a handful of minor details to try and get right, and I kept thinking the mobile header was done, then opening my phone and seeing something cramped.

I love PWAs, and I’ve made this site a PWA as well. There is no strong product justification for this. I love the idea of being able to install websites I come back to regularly, and as this is my personal site, I figured I might as well make it work as a PWA as well.

Even in the project pages had there initial hiccups. They have a small reading width, less than the dimensions of the biggest screen we know – that of our heads. We needed an up-to-date mobile version of the architecture diagram, not a smaller picture of the empty desktop design. The installable behaviour, rsum links, switch to language, and toggle theme had to live in the same framework.

The site is still evolving Meguruto is not finished, and I still find myself wanting to tweak the spacing, change the wording here and there. I'll probably delete a few things. I'll probably add things that seem like a good idea now but are unnecessary a few months down the road. That's normal for a personal site.

That's also the reason I added this blog. I want this to be a place of notes about things I make, experiments I try and technicalities that are better explained in a few paragraphs than on a project card. I don't want to hold off until I have the perfect picture in my head.

I will probably just keep switching the site. I can write about things as I am making them, instead of waiting for me to have a complete feeling. I also want to write about the things I build, the technologies I try, and the non-technical topics that catches my interest.

So this is post number one.
