// importing packages 
import bcrypt from "bcrypt";

// function to create hashed password
export async function passwordGenerator(value) {
    try{
        console.log("Raw password is:", value);
        const noOfRounds=5;
        const salt = await bcrypt.genSalt(noOfRounds);
        const hashedpassword = await bcrypt.hash(value, salt);
        return hashedpassword;
    }catch(error){
        console.log(error);
    }
 
}