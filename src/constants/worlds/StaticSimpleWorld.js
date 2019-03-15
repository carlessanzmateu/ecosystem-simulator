const Land = require('../../models/actors/land.js')

const StaticSimpleWorld = [4]

StaticSimpleWorld[0] = [new Land(), new Land()]

module.exports = StaticSimpleWorld