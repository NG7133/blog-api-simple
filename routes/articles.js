const express = require('express');
const router = express.Router();

let article = [];
let id = 1;

// CREATE ()
router.post('/', (req, res) => {
    const article= { id: id++, ...req.body};
    articles.push(article);
    res.status(201).json(article);
});

// READ ALL
router.get('/', (req, res) => {
        res.json(articles);
});
// READ ONE
router.get('/:id', (req, res) => {
    const article = articles.find(a => a.id == req.params.id);
    if (!article) return res.status(404).json({ message: "Non trouve"});
    res.json(article);
});
// UPDATE
router.get('/:id', (req, res) => {
    const article = articles.find(a => a.id == req.params.id);
    if (!article) return res.status(404).json({ message: "Non trouve"});

    Object.assign(article, req.body);
    res.json(article);
    
    
});
//DELETE
router.delete('/:id', (req, res) => {
    articles = articles.filter(a => a.id != req.params.id);
        res.json({ message: "Supprime" });
});
// SEARCH
router.get('/search', (req, res) => {
    const q = req.query.query?. toLowerCase() || "";
    const result = articles.filter(a =>
        a.titre?.toLowerCase().includes(q) ||
        a.contenu?.toLowerCase().includes(q)
    );
    res.json(result);
});

module.exports = router;