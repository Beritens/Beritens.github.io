---
title: Spline Grind
date: 2025-08-20 12:00:00 +100
categories: [devlog]
tags: [game, web]
---


<style>

    canvas{
        width: 100% !important;
        aspect-ratio: 2 !important;
        height: auto !important;
    }

    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        position: absolute;
        z-index: -999;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
    }

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>

The game!
<div class="loader"></div>
<canvas id="bevy" alt="App" width="100%"></canvas>

Note: This is still pretty wonky. The physics updates are not synced with the fps, so sometimes it seems stuttery. Also the ball can easily glitch through the lines, be careful.

I have an idea how to completely fix that problem with some math tho.

<script src="/assets/SplineGrind/load.js" type="module"></script>
