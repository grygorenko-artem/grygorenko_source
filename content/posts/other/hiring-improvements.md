---
title: "How we improved our hiring process"
date: 2023-04-18
draft: false
aliases: ["/hiring-improvements"]
tags: ["Hiring", "Lessons Learned"]
author: "Artem Grygorenko"
hidemeta: false
description: "This is an article about our improvements of hiring in the fast-growing company."
ShowRssButtonInSectionTermList: true
comments: true
cover:
  image: posts/images/hiring-improvements.jpg
---

### Context
The company has 700 people. It has a period of active growth and a plan to double the number of employees during the year, which was done as a result.
Such growth is impossible with unoptimized hiring processes. Plus, any slowdowns in the hiring process affect the speed of bringing new products to market.
In addition, it is necessary to make the process so that when a new person joins the team and the company, he can already actively help and build the quality assurance process as early as possible.

I will not talk about the importance of optimizing the hiring process, but I will tell you how we got from point A to point B, and what those points were.

### Analysis of the problems of the old hiring process
Here I want to describe exactly the original point, point A, where the hire was.
Our funnel consisted of 5 stages:
- Sourcing of suitable candidates.
- Communication with the recruiter + a small qa quiz.
- Technical interview with live coding.
- Behavioral interview.
- Offer.

Not a very long list of stages, actually. However, there was something to think about. According to a preliminary estimate, it took up to three months to find one QA with us. At the same time, it was **believed** that we were looking for **only Senior+** candidates (masters who know how to use back, front, and mobile, and automate all this), which in principle added certain difficulties.

Even at this point we had chaos in terms of QA distribution between teams. The initial idea was to hire people **into the company** and then distribute them using the current priorities (generally this was justified, as the priorities changed in 3 months).

Due to such a long recruitment process, we have a queue of requests for where we need people and in which teams. Well, the fact that we had the following requests for testers was added to the queue:
- Tribe 1: Four QAs in Q1 1
- Tribe 2: two QAs in the second quarter, etc

We had several tribes, and it was normal to search like this for a quarter. As you can see, there was no mention of specific teams, skills, etc.
And this is only a superficial description of the hiring process that took place. There were also nuances with onboarding and the distribution itself. Therefore, everything had to be moved slowly.

### Study of best practices in recruitment
When defining optimization strategies, we did not try to immediately change the entire process and take something from top companies. On the contrary, such things would slow us down and we would not be able to hire the necessary number of suitable QAs.
We did all the optimization work gradually, without trying to fix everything at once. That is, we made changes in places critical to us, looked at the impact, and if everything was fine, then we moved on.
This allowed us to make improvements **without losing the quality of candidates**.

### Optimization of the candidate selection process
From a process optimization point of view, it was necessary to understand whether all our stages are really improved in terms of time spent, and what we can get rid of without losing the quality of candidates that enter our hiring funnel.
We started with processes that we have a direct impact on - this is the **technical interview**.
We had it for 1 hour 30 minutes, and with live coding. Then we wrote extended feedback to managers and candidates. After which a decision was already made whether to move on with the person or not.

For optimization, we chose the following strategy:
- We try to fit in 1 hour.
- We pick up with live coding.
- Before the technical interview, we give a test task.

Here we took a conscious risk that not everyone will take the test. But as for those who did and did successfully, we already knew that they were more suitable for us. Better that way than learning about it during a live coding session, for example.

As for the tests, we explored various solutions and settled on [**Test Gorilla**](https://www.testgorilla.com/). As a test, they gave a standard survey on the theory of testing in English (here even some super experienced guys couldn't cope, most likely due to insufficient level of English). The second was a small assignment on Python. The last part is to write test cases for the previous task in Python (later added in JS, due to a different tech stack of teams).
In general, the candidate had to spend no more than an hour on the entire test - 10 minutes for the test, 30 minutes for the task and 10 minutes for the test cases. The average speed of solving the problem per code was 10 minutes ;) I think it is fair enough.

Here we have already felt relief and it has become better in terms of our workload and the quality of candidates. The flow of candidates decreased slightly, but they were of better quality.

At the same stage, we touched on improving feedback.
We didn't particularly have any templates and each of us gave feedback in his own way.
Then we made a feedback document, it was a google form with a knowledge rating scale and open fields for writing. One of the interviewers filled out this document right during the interview. After filling out the form, a script was launched, which generated a regular document from the form and provided access to it to interview participants. And then, if necessary, corrections were made.

The feedback consisted of the following three parts:
- general conclusion;
- recommendations for the future if the candidate is not suitable;
- feedback on the structure of the conducted interview, for example, hard skills, soft skills, logical tasks, etc.

The process we came up with allowed us to provide full, good feedback to the candidate within one business day. I consider it a success.

After all, the improvement of the technical part of the hiring process **is almost complete here**. We improved the test later, and it turned from an abstract task into something close to real, which QA in our  company worked with.

### Improved sampling
Along with improving the technical part of hiring, we have been thinking in parallel about how to improve the selection of candidates who get to interview with recruiters (made a kind of shift-left approach in hiring!). It immediately occurred to us that we are looking for candidates from sourcers, who in most cases do not give us those who are suitable, and therefore the percentage of passing in the conclusion is lower. Therefore, we continued to think in this direction.

If you recall the initially described process, you can understand that there **were no specific requirements** for candidates. There were desires something like, we need a senior, a mega-star, etc. We started going to team leaders and heads and finding out what kind of seniors are needed, what they will do, what tasks they will solve. In some cases, it turned out that a senior is not needed, but a strong independent middle is suitable. Yep, the ice moved and we continued. Next, we created a **QA Hiring Plan** document that is separate from the general company's document. And we began to transfer requests specifically for QA from the full list of open positions there.
It was done, for example, like this: instead of one request about four QAs in the tribe, we formed 4 lines for each QA, where we added details, in which team they are looking for, the required level of specialist, the technical stack. Plus, we entered there information about what we are not ready to consider the candidate without, or what is a blocker. It turned out that some teams still had clear requirements.

This approach gave us transparency in how much, who and when we needed. After all, sometimes **only one** of these four specialists was urgently needed. We can leave to hire the rest for the remaining 3-6 months. However, this did not solve all our problems. In general, the situation was deplorable: the demand of QA was about 20 people, but we did not despair 🙂.

We started working closely with recruiters and sourcers. They were told about each position: who we need, why some candidates are suitable for the company, and others are not, etc. Gradually, the quality of candidates increased and we felt it, instead of 10% of successful technical interviews, we received approximately 30%.

<span class="personal"> **Note* I can lie here, it was a long time ago, so the given numbers are approximate* </span>

At this point, I want to say that the goal of hiring was still not for a specific team, but for the company as a whole, since there were many general requirements and priorities were constantly changing. The heads still personally distributed whom and where to send. But it's not for long :D.

By constantly learning from the recruitment side and optimizing our process, we managed to significantly increase the quality of candidates in the first five months, in addition, my team, which was fully engaged in the recruitment process, grew to 6 people and we came into the new year with new forces!

### New Year and hiring plans
The year began with plans to increase the number of employees. Usually, the growth of the company is always accompanied by an approximate increase in the number of positions for the corresponding roles. When planning for the year I estimated that we should hire about x2 people in the new year, at that point we had about 40 QAs, so an extra 40 QAs per year is not a bad plan. We were ready for it, but according to the heads, we still had a big demand of QA (they constantly ask us to find more QAs). At that point, we started looking at hiring differently. Despite the fact that we had a large number of open positions, we decided to use the following 2 approaches in parallel: based on company priorities and hired specifically for the team. We have already learned how to find the necessary candidates for the company, so we decided to try to search immediately in a specific team with the highest priority. All the necessary priorities were already written down in our tablet, so we moved according to them. The second point we made was that we started adding to our interviews QA and those leaders from the teams where the hiring took place, or the same tribe. All these steps allowed us to successfully distribute our time and workload, and in the new year we were able to conduct an average of one technical interview per day.

Without further ado, with the gradual improvement in the quality of the candidates, we were able to close the main gap for people in the first quarter. In the end, there were no more than 10 specific open positions, some of which were to be closed in Q2 and Q3, and some of which were just quite specific.

However, there were also failures. For example, we had a good candidate, but they couldn't take him further to the behavioral interview, because the team he was a good fit for hadn't been created yet. Surely no one here could tell us anything about the demand of QAs. Of course, there were also problems with hiring for specific positions, for example, AQA on C#. But here it was already necessary to do the hiring more deeply and find the necessary candidates using other methods.

The evaluation of the new hiring process took place when we were looking for another test leader to join our team. The selection consisted of seven candidates, two technical interviews, one offer. 3 weeks passed from the opening of the vacancy (hire request) to the offer. I think that here too it would be possible to speed up, but there are not always free calendar dates :D.

### TL; DR.
Here are some takeaways that will help you significantly improve your hiring process:
- Conduct the hiring process as transparently as possible with the involvement of all stakeholders.
- Ask who exactly is needed by the team, why exactly it, what tasks should be performed by the newcomer. <span class="personal">  (**do a job analysis first!**) </span>
- Hiring into a team is easier and better than hiring into a company.
- Live coding is overrated.
- Do not use processes from top companies because they may not be suitable for your specific situation. Solve your problems and close requests gradually.
- Train the entire hiring team (managers, recruiters, sourcers, QAs, etc.).
- The ideal hiring process is when you can hire a person to the company without conducting interviews and many additional stages.

### PS
Kudos to my team and responsible persons from QA side (Ksenia and Andriy), that helped with such a long run of improvements. And huge thanks to our recruitment team, that listened to all our struggles. 
It couldn't be impossible without your effort.