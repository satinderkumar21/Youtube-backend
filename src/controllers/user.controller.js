import {asyncHandler} from "../utils/asycHandler.js";

export const registerUser = asyncHandler(async (req, res) =>{
     res.status(200).json({
        message:"ok"
    })
})

