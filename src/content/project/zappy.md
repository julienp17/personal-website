---
title: Zappy
description: AI survival network game
thumbnail: "../../assets/images/zappy.png"
slug: zappy
youtubeId: L-nQY3QGCXM
startDate: 2021-05-17T00:00:00Z
duration: 2 weeks
tags:
  - cpp
  - unreal-engine
featured: false
draft: false
---

Zappy is a second year-end Epitech project.
The goal of this project is to create a network game where different AI teams will fight to survive.

Several teams face off on a grid map containing resources.
A team can elevate to the next level by following a certain ritual,
meaning getting a specified number of ressources on a tile, and incanting together.
The winning team is the one with 6 players who reached maximum elevation.

Zappy is divided into 3 main parts : the server (made in C), the AIs, and the GUI.
The server is in charge of handling the logic of the game, and communicating with
both the AIs and the GUIs to give them the correct informations.
Each player is controlled by an AI. Their goal is to survive, and
gather ressources and their team to incantate as fast as possible.
The role of the GUI is simply to represent the game as smoothly as possible.

I worked on the graphical part of Zappy.
I made the GUI in 2 weeks with Unreal Engine 5 with no prior experience with game engines.
I had originnally planned to do it with Qt and OpenGL, but due to a lack of documentation on Qt 3D, I decided to switch to a more robust game engine.

The source code is unfortunately unavailable since the binary is too heavy to be pushed on Github.
