---
title: Navy
description: The battleship game in the terminal
thumbnail: "../../assets/images/navy.png"
slug: navy
githubLink: https://github.com/julienp17/navy
youtubeId: ZsJzzgAzRiY
startDate: 2020-02-17T00:00:00Z
duration: 3 weeks
tags:
  - c
featured: false
draft: false
---

Battleship (also Battleships or Sea Battle) is a strategy type guessing game for two players.

The game is played on ruled grids on which each player's fleet of ships are marked.
The locations of the fleets are hidden from the other player.
Players alternate turns guessing the other player's ships coordinates, destroying a part of them if they get it right.
The objective is to destroy the opposing player's fleet.

This is a terminal version of this game between 2 linux processes.
They communicate through UNIX signals, a limited form of inter-process communication.
I made my own communication protocol by encoding each attack coordinate (ex: 'B3') into a single integer, using the user-defined
signals SIGUSR1 and SIGUSR2. This protocol is explained in greater details in the video besides this text.
