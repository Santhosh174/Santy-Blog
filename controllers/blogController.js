const Blog = require('../models/blogs');

const index = (req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:'all blogs',blog:result});
    })
    .catch((err)=>{
        console.log(err);
    })
}

const create = (req,res)=>{
    res.render('create',{title:'create'});
}

const create_post = (req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
}

const details = (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('details',{blog:result,title:'Blog details'})
        })
        .catch((err)=>{
            res.status(404).render('404',{title:'error'});
        })
}

const _delete = (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'/blogs'});
        })
        .catch((err)=>{
            console.log(err);
        })
}

const about = (req,res)=>{
    res.render('about',{title:'about'});
}

module.exports = {
    index,
    create,
    create_post,
    details,
    _delete,
    about
}