const express = require('express');
const routes = express.Router();
const Blog = require('../models/blogs');
const blogController = require('../controllers/blogController')


routes.get('/blogs',blogController.index);
routes.post('/blogs',blogController.create_post);
routes.get('/create',blogController.create);
routes.get('/blogs/:id',blogController.details);
routes.delete('/blogs/:id',blogController._delete);
routes.get('/about',blogController.about);


module.exports = routes;