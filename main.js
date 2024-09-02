const globalManager = require('managers.globalManager');
const memoryInit = require('init.memoryInit');
const globalInit = require('init.globalInit');

const roles = {
    harvester: require('roles.harvester'),
    upgrader: require('roles.upgrader'),
    builder: require('roles.builder'),
    // Include other roles here
};

module.exports.loop = function () {
    memoryInit.run();
    globalInit.run();

    globalManager.run();
};

// Example of running roles for all creeps
for (const name in Game.creeps) {
    const creep = Game.creeps[name];
    const role = creep.memory.role;
    if (roles[role]) {
        roles[role].run(creep);
    }
}
};
