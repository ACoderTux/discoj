const Store = require('../Store')
const Guild = require('../guild')

module.exports = class GuildStore extends Store {
    constructor(apiguilds, client) {
        super()
        apiguilds.forEach(apiguild => {
            this.set(apiguild.id, new Guild(apiguild, client ,true))
        })
    }
}