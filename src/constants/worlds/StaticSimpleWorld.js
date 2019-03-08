const Land = require('../../models/land.js')

const StaticSimpleWorld = [4]

StaticSimpleWorld[0] = [new Land(), new Land(), new Land(), new Land()]
StaticSimpleWorld[1] = [new Land(), new Land(), new Land(), new Land()]
StaticSimpleWorld[2] = [new Land(), new Land(), new Land(), new Land()]
StaticSimpleWorld[3] = [new Land(), new Land(), new Land(), new Land()]

module.exports = StaticSimpleWorld