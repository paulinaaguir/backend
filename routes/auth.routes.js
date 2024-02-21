import express from "express"
import { logUser, registerUser } from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/login_user", logUser)
router.post("/register_user", registerUser)

export default router