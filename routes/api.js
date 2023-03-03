const express = require('express');
const CreateAdminController = require('../app/controllers/HTTP/CreateAdminController');
const SuperAdminController = require('../app/controllers/HTTP/SuperAdminController');
const CreateQuizController = require('../app/controllers/HTTP/CreateQuizController');

const router = express.Router();
/* Controllers */
const UserController = lulu.use('app/controllers/HTTP/UserController');
const PostController = lulu.use('app/controllers/HTTP/PostController');
/* Controllers */
/* Request Validator Middlewares */
const UserRegistrationRequest = lulu.use('app/requests/UserRegistrationRequest');
const PostCreateRequest = lulu.use('app/requests/PostCreateRequest');
const CommentCreateRequest = lulu.use('app/requests/CommentCreateRequest');
/* Request Validator Middlewares */

const Authenticate = lulu.use('app/middlewares/Authenticate');
// const SuperAuthenticate = lulu.use('app/middleware/SuperAdminMiddleware');
const CreateAdminMiddlware = require('../app/middlewares/CreateAdminMiddlware');
const CreateQuizMiddlware = require('../app/middlewares/CreateQuizMiddleware');
const AdminLoginController = require('../app/controllers/HTTP/AdminLoginController');
const ShowQuizController = require('../app/controllers/HTTP/ShowQuizController');
const ParticipateQuizController = require('../app/controllers/HTTP/ParticipateQuizController');

router.get('/', (req, res) => {
    res.send("Hi From API");
});

router.post('/user/register', [
    UserRegistrationRequest
],  UserController.register);


router.get('/post/list', [
    Authenticate
],  PostController.list);

router.post('/post/create', [Authenticate, PostCreateRequest], PostController.create);
router.post('/post/comment/create/:postId', [Authenticate, CommentCreateRequest], PostController.createComment);

router.post('/user/login', [], UserController.login);

router.post('/super-admin/login', [], SuperAdminController.login);
router.post('/create-admin', [CreateAdminMiddlware], CreateAdminController.create);
router.post('/admin/login', [], AdminLoginController.login);
router.post('/create-quiz', [CreateQuizMiddlware], CreateQuizController.create);
router.get('/quiz', [], ShowQuizController.show);
router.post('/participate/quiz/:id', [Authenticate], ParticipateQuizController.participate);



module.exports = router;