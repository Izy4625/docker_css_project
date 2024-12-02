import { Router } from "express";
import { handleForm } from "../controller/formController";
const router = Router();

router.post("/",handleForm)
export default router