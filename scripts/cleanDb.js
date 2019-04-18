#!/usr/bin/env node

// Clean up development database - tables
const configFor = require('../server/db/config');
const { deleteUser, deleteDb, deleteTables } = require('../server/db/manage');

function clean(config) {
  deleteDb(config.name);
  deleteUser(config.user);
}

clean(configFor('development'));
clean(configFor('test'));

