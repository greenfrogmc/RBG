/**
 * ░██████╗░██████╗░███████╗███████╗███╗░░██╗███████╗██████╗░░█████╗░░██████╗░
 * ██╔════╝░██╔══██╗██╔════╝██╔════╝████╗░██║██╔════╝██╔══██╗██╔══██╗██╔════╝░
 * ██║░░██╗░██████╔╝█████╗░░█████╗░░██╔██╗██║█████╗░░██████╔╝██║░░██║██║░░██╗░
 * ██║░░╚██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║██╔══╝░░██╔══██╗██║░░██║██║░░╚██╗
 * ╚██████╔╝██║░░██║███████╗███████╗██║░╚███║██║░░░░░██║░░██║╚█████╔╝╚██████╔╝
 * ░╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░
 *
 *
 * Copyright 2023 andriycraft
 * Github: https://github.com/andriycraft/GreenFrogMCBE
 */
const Frog = require("../../src/Frog");
const Logger = require("../../src/server/Logger");

module.exports = {
  onLoad() {
    Logger.info("RWG > Loaded");

    Frog.eventEmitter.on('playerMove', (event) => {
      for (let i = 0; i < 90; i++) {
        let id = Math.floor(Math.random() * 6000) + 1000 // Generate random block in range from 1000-5000

        event.player.world.placeBlock(
          Math.floor(event.x + (Math.random() * 10)), // X
          Math.floor(event.y + (Math.random() * 10)), // Y
          Math.floor(event.z + (Math.random() * 10)), // Z
          id // Runtime block id. See src/blocks/ in Greenfrog's repo for list of Runtime block ids
        )
      }
    })
  },

  onShutdown() {
    Logger.info("RWG > Unloaded!");
  },
};
