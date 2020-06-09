module.exports = {
    getPosts: (req, res) => {
        const db = req.app.get('db')
        db.get_posts()
        .then((res) => {
            res.status(200).send(res)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    getPost: (req, res) => {
        const db = req.app.get('db')
        const {post_id} = req.params
        db.get_post(post_id)
        .then((res) => {
            res.status(200).send(res)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    addPost: (req, res) => {
        const db = req.app.get('db')
        const {title, img, content, author_id} = req.body
        db.add_post([title, img, content, author_id])
        .then((res) => {
            res.status(200).send(res)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    editPost: (req, res) => {
        const db = req.app.get('db')
        const {post_id} =req.params
        const {title, img, content, author_id} = req.body
        db.edit_post([post_id, title, img, content, author_id])
        .then((res) => {
            res.status(200).send(res)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },
    deletePost: (req, res) => {
         const db = req.app.get('db')
         const {post_id} = req.params
         db.delete_post(post_id)
         .then((res) => {
             res.status(200).send(res)
         })
         .catch((err) => {
             res.stauts(500).send(err)
         })
    }
}