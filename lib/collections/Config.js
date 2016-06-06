import {Mongo} from "meteor/mongo"
const Config = new Mongo.Collection("Config")
let Schema = new SimpleSchema({
    bsKey:{
        type: String,
        label: "BetaSeries ApiKey"
    },
    bsLogin:{
        type: String,
        label: "Login BetaSeries"
    },
    bsPassword: {
        type: String,
        label: "Password BetaSeries",
        autoform: {
            afFieldInput: {
                type: "password"
            }
        }
    },
    t411Login: {
        type: String,
        label: "Login Torrents411"
    },
    t411Password:{
        type: String,
        label: "Password Torrents411",
        autoform: {
            afFieldInput: {
                type: "password"
            }
        }
    },
    t411Key:{
        type: String,
        label:"ApiKey Torrents411"
    }
})
Config.attachSchema(Schema)

UI.registerHelper("Config",Config);

Router.configure({
    onBeforeAction: function(){
        let config = Config.find({})
        if(config.count() == 0){
            this.redirect("/settings")
        }
        this.next()
    }
})