import {Permission} from "node-appwrite";
import {db, commentCollection} from "../name";
import {databases} from "./config"

export default async function createCommentCollection(){
    // Create collection
    await databases.createCollection(db, commentCollection, commentCollection, [
        Permission.create("users"),
        Permission.read("any"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ])
    console.log("Comment Collection created");

    // create attribute
    await Promise.all([
        databases.createStringAttribute(db, commentCollection, "content", 10000, true),
        databases.createEnumAttribute(db, commentCollection, "type", ["answer", "question"], true),
        databases.createStringAttribute(db, commentCollection, "typeId", 50, true),
        databases.createStringAttribute(db, commentCollection, "authorId", 50, true)
    ]);
    console.log("Answer Attribute created");
    
}