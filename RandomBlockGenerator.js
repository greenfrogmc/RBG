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
const Logger = require("../../src/server/Logger");

module.exports = {
  onLoad() {
    Logger.info(`RWG > Loaded`);
  },

  onShutdown() {
    Logger.info("RWG > Unloaded!");
  },

  PlayerSpawnEvent(e) {
    Logger.info("RWG > Player " + e.player.username + " spawned! Waiting for him to move...")
  },

  PlayerMoveEvent(e) {
    for (let i = 0; i < 90; i++) {
      let id = Math.floor(Math.random() * 6000) + 1000

      e.player.world.placeBlock(Math.floor(e.position.x + (Math.random() * 10)), Math.floor(e.position.y + (Math.random() * 10)), Math.floor(e.position.z + (Math.random() * 10)), id)
    }
  },
};
