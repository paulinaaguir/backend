import { createUser, loginUser } from "../models/user.js"
import { encrypt, compare } from "../helpers/handleBcrypt.js"
import { encryptCrypto, decryptCrypto } from "../helpers/handleCrypto.js"

export const registerUser = async (req, res) => {
    let { id, name, password, role , email, phone, cellphone} = req.body
    id = await encryptCrypto(id)
    name = await encryptCrypto(name)
    email = await encryptCrypto(email)
    phone = await encryptCrypto(phone)
    cellphone = await encryptCrypto(cellphone)

    const encriptedPassword = await encrypt(password)
    const registeredUser = await createUser({
        id, name, encriptedPassword, role, email, phone, cellphone
    })
    if (!registeredUser) return res.status(400).json({ "message": "error al registrar usuario" })
    return res.status(200).json({ "message": "OK" })
}

export const logUser = async (req, res) => {
    const { id, password } = req.body
    const loggedUser = await loginUser({
        id
    })
    if (!loggedUser) return res.status(400).json({ "message": "error al loggear usuario" })
    const validPassword = compare(password, loggedUser.password)
    const name = await decryptCrypto(loggedUser.name)
    if (!validPassword) return res.status(400).json({ "message": "error al logear usuario pass" })
    return res.status(200).json({
        "response": {
            "name": name,
            "role": loggedUser.role
        }
    })
}