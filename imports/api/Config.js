import {Mongo} from "meteor/mongo"
let schema = new SimpleSchema({
    bsKey:{
        type: String,
        label: "Api Key"
    }
})
let collection = new Mongo.Collection("Config")
collection.attachSchema(schema)
export const Config = {
    schema: schema,
    collection: collection
}