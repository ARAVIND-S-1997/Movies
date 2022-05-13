// importing packages 
import bcrypt from "bcrypt"

// Other file imports
import { users } from "../model/signupSchema.js";

// Login function
export const login = async (request, response) => {
    try {

        // destructuring the data from the body
        const { emailid, password } = request.body;
        console.log("Email id is:", emailid);
        console.log("Password is:", password);

        // checking whether the user is already in db are not
        const checkUser = await users.findOne({ emailid: emailid });
        
        // if user is registered
        if (checkUser) {
            const storedPassword = checkUser.password;
            console.log("Stored Password is:", password);
            const checkPassword = await bcrypt.compare(password, storedPassword);

            // if password is correct
            if (checkPassword) {
                request.session.auth=true
                response.send({ message: "Successfully logged in"});
                return;
            }

            // if password is incorrect
            else{
                response.status(401).send({message:"Incorrect password"});
                return;
            }
        }

        // if not registred
        else {
           
            response.status(401).send({ message: "User is not registerd" });
            return;
        }

    } catch (error) {
        console.log("Error is:", error);
    }
}