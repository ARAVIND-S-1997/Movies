// other file imports
import { users } from "../model/signupSchema.js";
import { passwordGenerator } from "../passwordgenerator.js";

// signup function
export const signup= async (request, response) => {
    try {

        // finding whether the user is registered or not
        const check = await users.findOne({ emailid: request.body.emailid });

        // if user is already registered
        if (check) {
            response.status(422).send({ message: "email id already exist" });
            return;
        }

        // if not registered
        else {

            const { password } = request.body;
            console.log("password is:", password);

            // creating the new password by hassing
            const finalPassword = await passwordGenerator(password);
            
            const data = new users({
                name: request.body.name,
                dob: request.body.dob,
                emailid: request.body.emailid,
                password: finalPassword
            });
            await data.save();
            response.send({ message: "Successfully signed up" });
        }

    } catch (error) {
        console.log(error);
    }

}