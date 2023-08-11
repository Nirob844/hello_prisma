import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertIntoDB);
router.post("/profile", userController.insertOrUpdateProfile);
router.get("/", userController.getUsers);
router.get("/:id", userController.getSingleUser);

export const UserRoutes = router;
