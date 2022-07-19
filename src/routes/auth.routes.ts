import { Router } from "express";
import { signIn, signUp } from "../controllers/auth/auth.controller";
import passport from "passport";

const router = Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get(
  "/validate",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res
    .status(200)
    .send("This token is valid. Authorized user.");
  }
);

export default router;
