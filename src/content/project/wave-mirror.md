---
title: Wave Mirror
description: Making art with reflections
thumbnail: "../../assets/images/wave_mirror.jpg"
slug: wave-mirror
githubLink: https://github.com/julienp17/WaveMirror
youtubeId: ushJnQfjbF0
startDate: 2018-08-01T00:00:00Z
duration: a year
tags:
  - raspberry-pi
  - arduino
  - python
featured: false
draft: false
---

Wave Mirror is an art project made for my last year of high-school in the engineering branch.
It is a recreation of the work from Daniel Rozin, as shown in the video besides this text.

It consists of a vertical plane made up of a camera in the middle and many rotating cylinders along the plane.
Anyone entering the scene is captured by the camera and then reflected by the contrast displayed on the cylinders.
Each cylinder rotates accordingly to display the correct contrast, giving the illusion of a mirror.

To make it all work, we used a Raspberry Pi and its associated PiCamera to take and process each captured image.
The information is then transmitted to Arduinos using I2C communication, with each one processing a row.
Each Arduino then controls a row of servo-motors, rotating each one to display the correct contrast.
