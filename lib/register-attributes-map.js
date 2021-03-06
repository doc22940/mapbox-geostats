'use strict';

const registerAttribute = require('./register-attribute');

/**
 * Mutates a layer stats object to register stats
 * about an object of attributes (and returns the mutated object).
 *
 * @param {Object} layerStats
 * @param {Object} options
 * @param {Set} [options.attributes] - Specific attributes that should be registered.
 * @param {Object} attributes - The attributes to register, as an object
 *   of `name: value`
 * @return {Object} The mutated layerStats.
 */
module.exports = function(layerStats, options, attributes) {
  const specifiedAttributes = options.attributes;

  Object.keys(attributes).forEach((name) => {
    const value = attributes[name];
    if (specifiedAttributes && !specifiedAttributes.has(name)) return;
    registerAttribute(layerStats, options, name, value);
  });

  return layerStats;
};
