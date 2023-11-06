---
title: Plazza
description: Pizzeria simulation
thumbnail: "../../assets/images/plazza.png"
slug: plazza
githubLink: https://github.com/julienp17/Plazza
youtubeId: sxGAtX1ibRA
startDate: 2021-03-12T00:00:00Z
duration: 2 weeks
tags:
  - cpp
  - sfml
featured: false
draft: false
---

Plazza is an Epitech project introducing Concurrent Programming.
It is a simulation of a pizzeria.

The pizzeria is composed of a reception (main process) that dispatches orders to different kitchens (child processes),
which are themselves composed of different cooks (threads).
The processes use a "Message queue" to communicate, and the kitchens use the standard "std::thread" library.

In order to grasp the multithreading paradigm, I read the book 'C++ Concurrency in action' by Anthony Williams.
After that, I finished the main program in 1 week, and decided to make a graphical version as a bonus in another week.
