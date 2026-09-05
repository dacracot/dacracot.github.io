# Baby Smash

**Baby Smash** is a simple, touch-friendly visual and auditory game designed for toddlers.

The premise is intentionally uncomplicated:

> **Touch or click the screen and something happens.**

Each interaction creates a randomly generated shape in a random location, gives it a random color, and plays a randomly selected sound effect.

There are no rules, scores, levels, menus, or objectives. The purpose is immediate visual and auditory feedback from a child's interaction with the device.

## Purpose

Baby Smash is designed around a very young child's natural interaction with a touchscreen:

- Touch the screen.
- See something appear.
- Hear a sound.
- Repeat.

The application does not require the child to understand buttons, text, scores, game rules, or navigation. The entire screen effectively becomes the game controller.

## Gameplay

Every click or touch invokes the game play.

A single interaction produces:

- One randomly selected image...
  - at a random position on the screen,
  - of a random size,
  - of a random color (except faces)
- Play a sound when...
  - shapes that is random and goofy,
  - digits or letters that names the item,
  - faces that names the person

The newly generated items remains on the screen. Subsequent interactions add additional items rather than replacing the previous ones.

Over time, the screen therefore becomes a collection of randomly generated items.

There is no explicit game-ending condition.

## Features

Baby Smash provides four interactive modes:

- **Shapes** — colorful geometric shapes
- **Digits** — numbers from 0 through 9
- **Letters** — letters of the alphabet
- **Faces** — familiar people and pets

Every interaction is randomized, so the child receives a different response each time.

## Faces

Driven by Faces storage:

- Faces - `directory`
  - faces.js - `configuration file of images and names`
  - faces.png - `menu icon`
  - *.png - `images corresponding to files in the configuration`