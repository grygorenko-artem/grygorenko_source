---
title: "The Fear of Losing Control While Using AI"
date: 2026-06-15
draft: true
tags: ["AI", "engineering", "reflection"]
description: "An honest reflection on the unexpected fear I felt when AI completed a migration task — and I realized I no longer understood how my own system worked."
---

## An unexpected feeling after migrating a project and doing some refactoring.

Last week I had a task: migrate my Telegram bots and an n8n server from AWS to a VPS on Contabo. Sounds simple and routine. But during the process, something happened for the first time — I felt genuine **fear**. Fear that I no longer controlled the solution that was running in production.

I know that for many engineers who use AI as leverage, it brings excitement and a sense of superpower. For me, it was the complete opposite.

The key thing is that the task seemed done. I asked Claude to verify everything was working after the migration, and it confirmed that it was. But then a question hit me: how do I actually check that myself? The bots ran on a schedule, so there was nothing obvious to trigger manually. And more broadly — can I even trust it?

It was this feeling of: *"OK… so what do I do now?"*

This is the classic **black box** phenomenon. I can feel that the system works. I know it performed its function. But I have absolutely no idea how or why. When I controlled every step myself — when I wrote the next 100 lines of code and designed the algorithms — I had zero doubts about whether it worked. Now it was completely different. I don't know how it was built, and if something breaks, it'll probably be AI again that debugs it, not me. And what happens if AI isn't available? Considering the recent incidents where half the internet went down — that's not a hypothetical.

Another insight: the task is complete, and that's fine. But completing it added zero understanding of how the system works. I didn't gain any real experience.

> **The result exists — the knowledge doesn't.**

Can this be compared to delegation? Honestly, I don't have a clear answer. With people, I probably wouldn't have felt this way, because a human colleague needs to properly verify and test their work to hand it off. A machine might skip that. Of course, I eventually calmed down. We walked through the system together to find a proper way to verify everything. And I confirmed something important: you need to control the key configuration data that AI uses to do its work. For example, Claude misunderstood which config was production and which was test. That needed manual correction.

After fixing it, we relaunched the bot in production. Then I asked Claude to create a runbook so nothing would be forgotten. I did the same in another repository — asked it to document everything we had integrated and commit that to the repo.

I don't rule out that this fear is my own problem, and maybe over time my mindset will shift.

But here's where I landed: AI as leverage gives you speed, and you pay for that speed with control and often with understanding of what's happening inside the system.

Maybe the new skill for engineers isn't writing code (that's obvious by now) — it's knowing *what to ask* in order to preserve your understanding of the system you're building. But then again, where do you develop the knowledge and intuition to ask the right questions in the first place?

One more thing I noticed while writing this: when we delegate to people, we usually assign tasks whose results we're capable of evaluating. But when we hire someone stronger and more experienced than us, our own expertise might not be enough to verify their work. So AI isn't that different — and maybe the picture is more nuanced than it first appears.

If you've felt something similar — I'd love to hear about it.
