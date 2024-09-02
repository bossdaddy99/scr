const constants = require('config.constants');
const settings = require('config.settings');

module.exports = {
    run: function (creep) {
        if (creep.store.getFreeCapacity() > 0) {
            // Harvest energy if the creep's store is not full
            const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (source && creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        } else {
            // Upgrade the controller if the creep's store is full
            const controller = creep.room.controller;
            if (controller && creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
                creep.moveTo(controller, { visualizePathStyle: { stroke: '#ffffff' } });
            }
        }
    }
};
