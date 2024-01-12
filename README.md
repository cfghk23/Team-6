# Team-6
Link :https://docs.google.com/presentation/d/1IZZ11h8WnREmSM0Ms-lLp0FCAfhR3wis/edit?usp=sharing&ouid=116592093760796468933&rtpof=true&sd=true 
PPT: https://docs.google.com/presentation/d/1EEfqnWva55caik7d4MN8PLxcSw14296stovk8QoaWtM/edit?usp=sharing

app.patch('/api/update/thread', async (req, res) => {
const { threadId, newTitle, userId } = req.body

// Find the thread in the threadList
let thread = threadList.find(t => t.id === threadId)

if (!thread) {
return res.status(404).json({
message: 'Thread not found!'
})
}

// Check if the user is authorized to update the thread
if (thread.userId !== userId) {
return res.status(403).json({
message: 'User not authorized to update this thread'
})
}

// Update the thread
thread.title = newTitle

// Persist the update in novu.topics
await novu.topics.update({
key: threadId,
name: newTitle,
})

res.json({
message: 'Thread updated successfully!',
threads: threadList,
})
})

1. [ ] Understand the requirements
2. [ ] Plan and Ideate
3. [ ] Design and Architecture - frontend - backend - Deployment Infrastructure (AWS/Azure, Docker, ...)
4. [ ] Split the tasks
5. [ ] Implement
6. [ ] Test and Bug Fix
7. [ ] Refine and Polish
8. [ ] Document/Present

- EC2 instance

## Team Roles

1. frontend (3 people~)
   - Figma/UI
2. backend (3 people~)
3. Presentation
4. Time-keeper

## Judging Criteria

1. Quality of pitch
2. Technical Development
3. Level of Innovation
4. Fit to NGO/Need

## About Project

- Financial Literacy in Asia lagging behind
- Peer (online peer-based learning), Play, Purpose, Project, Passion
  > Cohort-based project-based learning
  > Games and Fun fairs
  > 100 teaching hours
- Since they are 5 years old
- Learn about values
  - Delayed gratification
- 5 learning sections: kindergarten, pre-school, college and adult
- Projects:
  1. **Be my Own Little Boss**
  2. Elevator pitch
  3. Parent Academy

# Have->

Journey with animated character
Make decisions for character
Not good looking and rigid
Focuses more on completion than progress

# Need->

Efficient
Easy to navigate
Gaming element (fun)
Increase engagement
Give access to teachers, help them see progress of each student
Easy to maintain, doesn’t require tech staff

## Problem Statement

1. Users (Students)

- a solution that incorporates effective educational methods, gamification elements, and intuitive design.

- Animated character
- Color schemes

2. Teachers & Admins

- Data visualization for analyzing better user engagement patterns
- Better structured impact assessment report. [Sent every month]

- for every project -> IOT

## Questions

1. Who decides who has access to what course?

- teacher can choose what model can go form
- pick certain ones
- self-directed learning
- design thinking

- Issue: not enough class time, not enough experience
- Self-navigation, self-directed, students can learn by themselves
- Teacher lesson plan

2. Can we use IOT?
3. Can a course use different party resources?
   - Kahoot, is it ok to direct them?
4. What metrics do we need to take account for?

[StoryLine360: What answer correct/wrong]

- Time
- has to be divided by course name

5. Visualize the data (teachers)
6. Leaderboard
7. Should there be different design for different user groups?
8. In-person event: newsboard

- different design

9. Peer engagement -> do online

## Answers

1. Projects: Business Plan competition, budgeting

## Branching

1. Split frontend and backend to different branches
2. Commit to respective branches
3. Merge to main

## Useful git commands:

- Create new branch and switch:

```
- git checkout -b feature-branch
```

- Switch to branch:

```
- git checkout feature-branch
```

- canva ppt: https://www.canva.com/design/DAFwdvSbt5I/OztsxmuPoMRB8rDTtO_iIQ/edit?utm_content=DAFwdvSbt5I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton



The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC"). JPMC did not create or contribute to the development of the Code. This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code, including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.