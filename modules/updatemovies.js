// other file imports
import { moviesdata } from "../model/movieSchema.js";

// update movie function
export const updatemovie = async (request, response) => {
    try {
        // object id to find the movie document
        const { id } = request.params;

        // update movie query
        const updateReq = await moviesdata.updateOne({ _id: id },
            {
                $set: {
                    movieName: request.body.movieName,
                    rating: request.body.rating,
                    cast: request.body.cast,
                    genre: request.body.genre,
                    releaseDate: request.body.releaseDate
                }
            })

        // if movie got updated
        if (updateReq.modifiedCount === 1) {
            response.send({ message: "Fields got updated successfully" })
        }

        // if movie is not updated
        else {
            response.send({ message: "Invalid Object id. Can't able to update the field" })
        }
        
    } catch (error) {
        console.log("Error in update movies", error)
    }
}