const { Router } = require("express");
const postController = require("../controller/PostController");

const router = Router();

router.post("/", postController.create);
router.get("/", postController.getAll);
router.delete('/:id', postController.delete);
router.get('/:id', postController.getOne);

module.exports =  router;
