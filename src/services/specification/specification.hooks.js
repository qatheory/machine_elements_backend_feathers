

const computeGear = require('../../hooks/compute-gear');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [computeGear()],
    update: [computeGear()],
    patch: [computeGear()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
