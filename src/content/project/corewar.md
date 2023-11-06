---
title: Corewar
description: Programs in assembler fighting for memory in virtual machine
thumbnail: "../../assets/images/corewar.png"
slug: corewar
githubLink: https://github.com/julienp17/Corewar
youtubeId: 9P04Eqeqxd4
startDate: 2020-03-20T00:00:00Z
duration: a month
tags:
  - c
featured: false
draft: false
---

Corewar is one of the most notorious project of the Epitech cursus.
It is known for its difficulty, so much so that the best perfoming team gets awarded a special sweater (spoiler: I got it 😊).

Corewar is a programming battle royale game, in which different programs fight in a virtual machine to be the last one in memory.
It divided into 3 main parts : the champions, the Assembler, and the virtual machine.

The programs who fight are called champions.
Their goal is to survive by executing an operation called 'live', and write on the memory of the other programs
to corrupt them, rendering them unable to execute the 'live' operation.
They can perform other operations, such as 'fork', which allows them to duplicate themselves in memory.
They are written in a pseudo-assembly language.

The assembler is the compiler of these champions.
Its goal is to parse and encode the champions source files into a binary format that the virtual machine will be able to decode.

The virtual machine is the final piece of the puzzle.
It starts by loading each champion's compiled source into its circular memory.
It then executes each champion's next instruction cycle-by-cycle, taking into account the required time each one takes.
It keeps track of the time each champion last called the 'live' instruction, and eliminates them if they didn't do it within a
specified 'cycle-to-die', until only one of them remains.

I made the pseudo-assembler compiler, and worked on making the virtual machine with two other team members.

The video shown here is not mine : I made the same project, but didn't have enough time to work on a graphical version.
It was made some 10 years ago by 'Gael Du Plessix', a former Epitech student. You can see in his video the champions battling it out, with each one represented by a different color.
