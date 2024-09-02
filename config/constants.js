module.exports = {
    // Roles
    ROLE_HARVESTER: 'harvester',
    ROLE_UPGRADER: 'upgrader',
    ROLE_BUILDER: 'builder',
    ROLE_REPAIRER: 'repairer',
    ROLE_DEFENDER: 'defender',

    // Resource Types
    RESOURCE_ENERGY: 'energy',
    RESOURCE_MINERAL: 'mineral',
    RESOURCE_POWER: 'power',

    // Structure Types
    STRUCTURE_SPAWN: 'spawn',
    STRUCTURE_EXTENSION: 'extension',
    STRUCTURE_TOWER: 'tower',
    STRUCTURE_STORAGE: 'storage',
    STRUCTURE_LINK: 'link',
    STRUCTURE_TERMINAL: 'terminal',
    STRUCTURE_LAB: 'lab',
    STRUCTURE_FACTORY: 'factory',

    // Creep Parts
    PART_WORK: 'work',
    PART_CARRY: 'carry',
    PART_MOVE: 'move',
    PART_ATTACK: 'attack',
    PART_RANGED_ATTACK: 'ranged_attack',
    PART_HEAL: 'heal',
    PART_CLAIM: 'claim',

    // Creeps Limits
    MAX_HARVESTERS: 5,
    MAX_UPGRADERS: 3,
    MAX_BUILDERS: 2,
    MAX_REPAIRERS: 2,
    MAX_DEFENDERS: 1,

    // Room Sizes
    ROOM_SIZE: 50,  // Standard room size for calculations

    // Pathfinding Costs
    PATH_COST: 1,  // Cost for pathfinding calculations

    // Energy Constants
    ENERGY_CAPACITY: 300000,  // Maximum energy capacity for storage structures

    // Miscellaneous
    SPAWN_ENERGY_CAPACITY: 300,  // Default spawn energy capacity
    CONTROLLER_LEVEL_UPGRADE_COST: 10000  // Example cost for upgrading controller
};
