# Weredle

## Wordle meets Werewolf

- Go play the real Wordle [here](https://www.powerlanguage.co.uk/wordle/)
- Read all about Werewolf, the social deduction game, [here](https://en.wikipedia.org/wiki/Ultimate_Werewolf)
- Read the story behind it [here](https://www.nytimes.com/2022/01/03/technology/wordle-word-game-creator.html)
- Weredle is a fork of https://github.com/hannahcode/wordle by @hannahcode

_Inspiration:_
This game is an open source clone of the immensely popular online word guessing game Wordle, with a twist. One of the tiles is a Werewolf and can't be trusted. For each guess you make, you'll also guess which tile is the Werewolf. If you guess right, the Werewolf tile will tell the truth for the rest of the game. If you guess the correct word before finding the Werewolf, the Werewolf is revealed immediately and you win!

_Design Decisions:_
Check out the Readme at https://github.com/hannahcode/wordle by @hannahcode for all the design details. I just built on top of an already great project. 😄

_To Run Locally:_
Clone the repository and perform the following command line actions:

```bash
$ cd weredle
$ npm install
$ npm run start
```

_To build/run docker container:_
```bash
$ docker build -t weredle .
$ docker run -d -p 3000:3000 weredle
```
open http://localhost:3000 in browser.
