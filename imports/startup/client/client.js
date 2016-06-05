/**
 * Created by david on 04/06/16.
 */
import "./layoutLoader"
import {Config} from "../../api/Config"

Router.configure({
    layoutTemplate: "baseLayout"
})
Router.route('/', {
    template: "home"
})
Router.route('/settings',{
    name: "settings"
})