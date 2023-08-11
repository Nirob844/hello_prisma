import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "Profile created/updated successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getUsers();
    res.send({
      success: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const userController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};
