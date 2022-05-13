// other file imports
import { moviesdata } from "../model/movieSchema.js";

// add movies function
export const addmovies = async (request, response) => {
    try {

        // add movie query
        const addmovie = new moviesdata({
            movieName: request.body.movieName,
            rating: request.body.rating,
            cast: request.body.cast,
            genre: request.body.genre,
            releaseDate: request.body.releaseDate
        });
        addmovie.save();
        response.status(200).send({ message: "Movies is added successfully" })
    } catch (error) {
        console.log("Error in add movies:", error);
    }
}