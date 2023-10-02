import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import { createUser, getUser } from "./queries";
import { generateToken } from "./utils/token";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, dob, preferred_coding_language } = req.body;
  if (!name || !email || !password || !dob || !preferred_coding_language) {
    res.status(400);
    throw new Error("Please add all the fields");
  }

  const user = await getUser(name);
  if (user) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const dateOfBirth = new Date(dob);
  const result = await createUser(
    name,
    email,
    hashedPassword,
    dateOfBirth,
    preferred_coding_language
  );

  if (result) {
    res.status(201).json({
      _id: result.id,
      name: result.username,
      email: result.email,
      token: generateToken(result.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.json({ message: "Register user" });
});

const loginUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;

  // Check for username
  const user = await getUser(name);

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  res.json({ message: "Login user" });
});

export { registerUser, loginUser };
