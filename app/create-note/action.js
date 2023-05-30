'use server'

const { default: Note } = require("@models/note")
const { connectToDB } = require("@utils/database")

export const submitData = async(data)=>{
   try {
    await connectToDB()
    await Note.create(data)
    return {status:"OK",message:'Created successfully'}
} catch (e) {
    console.log(e)
    return {status:"ERROR",message:'Created successfully'}
   }
}