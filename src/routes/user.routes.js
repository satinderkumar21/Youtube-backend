import express from "express";
import { upload } from "../middlewares/multer.middleware.js";

// import { registerUser } from "../controllers/user.controller.js";
import { registerUser } from "../controllers/user.controller.js";
import { ApiError } from "../utils/ApiError.js";
const router = express.Router();


router.route("/register").post(
    upload.fields([
        { name : "avatar",
          maxCount: 1
        },
        {
            name : "coverImage",
            maxCount:1
        }
    ]),
    
    registerUser);

export default router