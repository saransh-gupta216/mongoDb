import { login, register } from "./auth.service.js";

export const registerController = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body

        const user = await register({
            firstName, lastName, email, password

        });
        res.status(200).json({
            message: "Registration Succesfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            message: "Registration failed",
            error: error.message
        });
    }
}


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await login(email, password);
        if(!user){
            return res.status(401).json({
                message: "Invaild Password or Email",
            })
        }

        res.status(200).json({
            message: "Login Successfully",
            user,
        })
}
catch(error){
    res.status(500).json({
        message:error.message
    })
}
};
