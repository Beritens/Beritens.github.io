---
title: Spline Grind (with demo)
date: 2025-08-20 12:00:00 +100
categories: [showcase]
tags: [game, web]
portfolio_title: Spline Grind
kind: experiment
thumbnail: /assets/img/projects/spline-grind.png
thumbnail_alt: Spline Grind gameplay with a ball above a curved line.
thumbnail_class: spline-thumb
demo: true
---


The game!
<div class="demo-frame" id="spline-demo">
  <div class="demo-loader" role="status">Loading Spline Grind…</div>
  <canvas id="bevy" width="1200" height="600" tabindex="0" aria-label="Spline Grind interactive game. Move the mouse near the line to move the ball.">Your browser does not support the game canvas.</canvas>
</div>

In the Computer Graphics 2 course at TUB, we discussed B-splines. To become more familiar with the concept (and because I had a fun game idea), I decided to experiment with a game mechanic using B-splines.

Instead of directly controlling the player, the mouse influences the world around them. Over time, you develop a sense of how to use this mechanic to make the player move and jump. I think this could make for a really fun platformer.

# How it works

I used [Bevy Game Engine](https://bevy.org/) to create this—mostly because I wanted to learn Rust, but also because it offers a lot of freedom.

The line is composed of many control points that move when the mouse gets near. The line is then constructed using the B-spline algorithm (de Boor's algorithm). Collisions between the ball and the line are calculated and handled in a custom physics engine.\

There are still some issues—for example, the ball can sometimes glitch through the ground. There are neat tricks that could solve this problem, but honestly, I lost interest after the course ended.

I’m still leaving the demo here for your enjoyment. Maybe I’ll continue working on it someday.



<script src="/assets/SplineGrind/load.js" type="module"></script>
