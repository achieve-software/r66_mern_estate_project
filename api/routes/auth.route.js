import express from 'express';

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);


router.get('/signout', signOut)

export default router;