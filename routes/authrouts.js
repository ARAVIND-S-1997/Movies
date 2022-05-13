// packages imports
import express from "express";

// other file imports
import { addmovies } from "../modules/addmovies.js";
import { updatemovie } from "../modules/updatemovies.js";
import { deletemovie } from "../modules/deletemovie.js";

// private router configuration
const router = express.Router();
export const privateRoutes = router;


// route for add movies function
router.post("/addmovies", addmovies)

// route for update movies function
router.post("/updatemovie/:id",updatemovie);

// route for delete movies function
router.delete("/deletemovie/:id",deletemovie);