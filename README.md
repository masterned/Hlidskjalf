# Hlidskjalf
[![Discord](https://img.shields.io/discord/320044769428504576)](#Authors)
[![GitHub](https://img.shields.io/github/license/masterned/Hlidskjalf)](https://github.com/masterned/Hlidskjalf/blob/functional-ECS/LICENSE.md)

## Engine
The name of our engine is [Hlidskjalf](https://en.wikipedia.org/wiki/Hlidskjalf)
&ndash; the royal seat of Odin in Norse mythology. <em title="Though, that would not be very surprising.">No, we didn't just smash our keyboards in anger.</em>

It will be written in JavaScript, using a Functional ECS (Entity Component System) Architecture.
Taking advatage of functional programming's declaritive syntax, pure functions, and immutibility,
we hope to reduce the cognitive load on our designers.
Combining this paradigm with ECS and DOD (Data Oriented Design),
we hope to reduce computer memory load as well as cache misses.

We chose JavaScript due to its ability to be run on nearly any operating system,
the flexibility of its multiparadigm nature,
and its access to millions of useful resources and libraries via npm.

## Game
Laptop Knights (name pending) will be a action turn-based RPG centered around replayability.
Player parties will be limited to three characters to prevent overloading the user with too much information,
and the narrative will be minimal in order to allow playthroughs to be relatively quick.
In a later iteration, we hope to create unique playstyles for each of the different characters in the game
&ndash; requiring a perspective shift when approaching obstacles as a new character.

The game will run on node using [Electron](https://electronjs.org/) as a container,
and it will use PIXI.js as a rendering engine.

## Motivation
We are putting this game together as a hobby, so it may be years before the project is completed.
As a group, we enjoy playing pen-and-paper games together,
and we hope to be able to share the fun we've had exploring wacky worlds created by our GMs
as weird characters that fit our personalities.

Our goal with this game is not to produce an award-winning, AAA-competing indie title.
We hope to create something that we will enjoy creating, and hopefully one day, we will be able to play it.

# Building
## Download
1. Ensure you have [npm](https://nodejs.org/en/) installed.
2. Open a terminal.
3. Clone the repository:
    ```bash
    git clone https://github.com/masterned/Hlidskjalf.git
    ```

## Install
In the root directory of the project, run `npm i`.

## Run
In the root directory of the project, run `npm start`.

## Test
In the root directory of the project, run `npm test`.

# Authors
* __Spencer Dent__ &ndash; *engine design and game programming* &ndash; [masterned](https://github.com/masterned)
* __Jack Dent__ &ndash; *game direction and art lead* &ndash; [jackthehatguy](https://github.com/jackthehatguy)
* __Jacob Funk__ &ndash; *writing*
* __Charles Taylor__ &ndash; *software development* &ndash; [CharlesTaylor7](https://github.com/CharlesTaylor7)

# License
This project is licensed under the Mozilla Public License version 2.0. Details can be found in [LICENSE](https://github.com/masterned/Hlidskjalf/blob/functional-ECS/LICENSE).

# Acknowledgments
## Inspiration
* Nintendo's [Mario & Luigi](https://www.mariowiki.com/Mario_%26_Luigi_(series)) series
* SEGA's game [The Cave](https://en.wikipedia.org/wiki/The_Cave_(video_game))
* Alex Kehayias &ndash; his YouTube [video](https://youtu.be/TW1ie0pIO_E) on [chocolatier](https://github.com/alexkehayias/chocolatier); inspired me to write a functional ECS game engine.

<small>[MIT](https://github.com/masterned/Hlidskjalf/blob/functional-ECS/LICENSE) &copy; 2020 &ndash; Spencer M. Dent</small>