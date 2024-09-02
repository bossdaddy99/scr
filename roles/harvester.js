const constants = require('config.constants');
const settings = require('config.settings');

module.exports = {
    run: function (creep) {
        if (creep.store.getFreeCapacity() > 0) {
            // Harvest energy from the nearest source
            const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (source && creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        } else {
            // Transfer energy to the nearest structure with available capacity
            const target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: structure => {
                    return (structure.structureType === constants.STRUCTURE_SPAWN ||
                        structure.structureType === constants.STRUCTURE_EXTENSION) &&
                        structure.store.getFreeCapacity(constants.RESOURCE_ENERGY) > 0;
                }
            });
            if (target && creep.transfer(target, constants.RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target, { visualizePathStyle: { stroke: '#ffffff' } });
            }
        }
    }
};
