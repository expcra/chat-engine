const User = require('./User');

/**
* Same as User, but has permission to update state on network
*
* @class Me
* @extend User
*/

module.exports = class Me extends User {

    constructor(uuid) {

        // call the User constructor
        super(uuid);

    }

    // assign updates from network
    assign(state, chat) {
        // we call "update" because calling "super.assign"
        // will direct back to "this.update" which creates
        // a loop of network updates
        super.update(state, chat);
    }

    // update this user state over the network
    update(state, chat = OCF.globalChat) {

        // run the root update function
        super.update(state, chat);

        // publish the update over the global channel
        chat.setState(state);

    }

}
