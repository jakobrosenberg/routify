/* eslint-disable no-console */

const { name: NAME } = require('../../package.json')
// TODO logs
const logPrefix = `[${NAME.split('/').pop()}]`
const log = console.log.bind(console, logPrefix)
log.debug = () => {}
// log.debug = console.debug.bind(console, logPrefix)
log.error = console.error.bind(console, logPrefix)
module.exports = log
