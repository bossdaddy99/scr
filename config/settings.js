module.exports = {
    // Global Settings
    SPAWN_DELAY: 10,  // Delay in ticks between spawning creeps
    SPAWN_ENERGY_THRESHOLD: 300,  // Minimum energy required to spawn creeps

    // Room Settings
    ROOM_UPGRADE_PRIORITY: 1,  // Priority for upgrading rooms
    ROOM_BUILD_PRIORITY: 2,    // Priority for building structures in rooms
    ROOM_REPAIR_PRIORITY: 3,    // Priority for repairing structures

    // Creep Settings
    CREEP_PARTS: {
        HARVESTER: [WORK, WORK, CARRY, MOVE, MOVE],
        UPGRADER: [WORK, CARRY, MOVE, MOVE],
        BUILDER: [WORK, CARRY, MOVE, MOVE],
        REPAIRER: [WORK, CARRY, MOVE, MOVE],
        DEFENDER: [ATTACK, MOVE, MOVE]
    },

    // Construction Settings
    CONSTRUCTION_SITES: {
        MINERALS: {
            PRIORITY: 2,
            STRUCTURES: [STRUCTURE_EXTENSION, STRUCTURE_STORAGE]
        },
        CONTROLLERS: {
            PRIORITY: 1,
            STRUCTURES: [STRUCTURE_TOWER, STRUCTURE_FACTORY]
        }
    },

    // Energy Management
    ENERGY_MANAGEMENT: {
        MAX_ENERGY_TRANSFER: 1000,  // Maximum energy to transfer at a time
        ENERGY_RESERVE: 10000  // Energy reserve for emergencies
    },

    // Defense Settings
    DEFENSE: {
        TOWER_HEAL_THRESHOLD: 0.8,  // Heal when structure's hits are below this threshold (percentage)
        TOWER_ATTACK_THRESHOLD: 0.5,  // Attack when enemies are present and the tower's hits are below this threshold (percentage)
        BASE_DEFENSE: true  // Enable or disable base defense mechanisms
    }
};
