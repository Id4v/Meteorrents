/**
 * Created by david on 04/06/16.
 */
import "./layoutLoader"
Router.configure({
    layoutTemplate: "baseLayout"
})
Router.route('/', {
    template: "home",
    name: "home"
})
Router.route('/settings',{
    name: "settings"
})