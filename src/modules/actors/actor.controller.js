import {createActorService, getActor } from "./actor.service.js"

export const addActorController = async(req,res)=>{
    const data = req.body
    const movie = await createActorService (data)
    res.json({
        status:"OK",
        message:"Actor created successfully",
        movie:movie
    })

}

export const getActorController = async(req,res)=>{
    const actor = await getActor()
    res.json({
        status:"OK",
        message: "Actor Fetched Successfully"
})
}