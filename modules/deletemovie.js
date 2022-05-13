// other file imports
import { moviesdata } from "../model/movieSchema.js";

// delete movie function
export const deletemovie = async (request, response) => {
    try {
        // object id to find the movie document
        const { id } = request.params;

        // delete operation query
        const deleteReq = await moviesdata.deleteOne({ _id: id });

        // if movie got deleted
        if (deleteReq.deletedCount === 1) {
            response.send({ message: "Movie got deleted successfully" })
        }
        
        // if not deleted
        else {
            response.send({ message: "Invalid Object id. Can't able to delete the movie" })
        }
    } catch (error) {
        console.log("Error in update movies", error)
    }
}