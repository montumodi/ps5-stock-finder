# Playstation 5 Stock Finder

This little repo has code which hits websites which sells ps5 and alert you whenever there is a stock available. It is easy to add your own provider. Just follow the structure in one of the providers. At the moment it supports

- Amazon
- AO
- Argos
- Asda
- eBuyer
- Game
- Johnlewos
- Very

It can alert you in two ways

- Play sound. Add the mp3 of your choice and change `playSound.js` OR
- Send text -> audio command to your google home. Use `sendToGoogleHome.js` and call `run(googleHomeIP, "The text you want to broadcast")` in `index.js`. Make sure the code and google home is running on the same network.

## How to install

```
npm install ps5-stock-finder
```

## Runing

```
node index.js
```
