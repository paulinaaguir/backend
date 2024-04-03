import express from "express"
import { logUser, recoverPass, registerUser } from "../controllers/auth.controller.js"
const router = express.Router()

router.post("/login_user", logUser)
router.post("/register_user", registerUser)
router.put("/recoverPass", recoverPass)
export default router