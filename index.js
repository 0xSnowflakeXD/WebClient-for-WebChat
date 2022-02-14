class Perms {
	constructor() {
		this.intentList = [
			'GUILDS',
			'GUILD_MSG',
			'GUILD_BAN_MEMBER',
			'GUILD_KICK_MEMBER',
			'GUILD_VOICE'
		] 
		const perms = (permission) => {
			this.intentList.forEach((permChecker) => {
				if(!intent[0]) return "noPerm"
				else return true;
			})
			if(permission == intentList[0]) {
				function _permission(x) {
					const listPermAvail = [
					'GUILD_MSG',
					'GUILD_BAN_MEMBER',
					'GUILD_KICK_MEMBER',
					'GUILD_VOICE'
					]
					}
				}
			}
		}
	}
}
class WebClient {
	constructor(intent) {
		this.perm = new Perms()
		this.credit = "WhiteHat (or just Minh)"
		this.getCurrentChannel = () => {
			function channelID(id) {
				let chanID = id
			}
			this.idList
			let i = 0
			i++
			channelID(idList[i]) // do you know: [i] is [index]	
		}
    this.login = (password, username, botToken, botAuthKey) => {
      globalThis.ready;
			if(password) {
				if(!username) {
					console.log("You need to provide Username to login")
				}
				else {
          ready = true
					// ...
				}
			}
      if(username && !password) {
        console.log('Password Invalid')
      }
			if(botToken) {
        ready = true
				//...
			}
			if(botAuthKey) {
        ready = true
				//...
			}
		}
		this.on = (eventName, listener) => {
			listener(arguments)
			globalThis.eventName.forEach(listener)
      if(eventName == 'message') {
        require('./system/msg.js')
      } else if (eventName == 'ready') {
        if(ready == true) {
          eval(listener)
        }
      }
    }
		this.once = function(eventName, listener) {
			let returned = listener(arguments)
			if(returned != null || returned == undefined || returned == true || returned == false) {
				globalThis.eventname.forEach(listener)
			} else {
				return false;
			}
		}

		process.stdin.on('keepalive', function(data) {
			eval(data)
		})
		process.stdin.resume() // keepalive active and execute all code
	}
}
