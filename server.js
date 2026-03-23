const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc= require('swagger-jsdoc');

app.use(express.json());
app.use(express.static('public'));

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Blog",
            version: "1.0.0",
            description: "Documentation API"
        }
    },
    apis: ['./server.js'],
};
const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(specs));

let articles = [];
articles.push({
    id:1,
    titre:"Mon premier article",
    contenu: "Ceci est le contenu de mon premier article blog.",
    auteur: "Ngaleu Glory",
    date: "2026-06-19"
});

let id = 1;

/**
 * @swagger
 * /api/articles:
 *     get:
 *       summary: Recuperer tous les articles
 *       responses:
 *          200:
 *            description: liste des articles
 */
 /**
 * @swagger
 * /api/articles:
 *     post:
 *       summary: Creer un article
 *       responses:
 *          200:
 *            description: Article cree
 */
/**
 * @swagger
 * /api/articles/{id}:
 *     get:
 *       summary: Recuperer un article par ID
 *       parameters:
 *          
 *           required: true
 *       responses:
 *          200:
 *            description: Article trouve 
 */
/**
 * @swagger
 * /api/articles/{id}:
 *     put:
 *       summary: Modifier un article
 *       parameters:
 *          
 *           required: true
 *       responses:
 *          200:
 *            description: Article modifie
 */
/**
 * @swagger
 * /api/articles/{id}:
 *     put:
 *       summary: Supprimer un article
 *       parameters:
 *          
 *           required: true
 *       responses:
 *          200:
 *            description: Article supprime
 */

/**
 * @swagger
 * /api/articles/search:
 *     get:
 *       summary: Rechercher des articles
 *       responses:
 *          200:
 *            description: Resultats recherche
 */

// Lire tous les articles
app.get('/api/articles', (req, res) => {
    res.json(articles);
});

// Ajouter un article
app.post('/api/article', (req, res) => {
    
    
    res.json(nouvelArticle);
});


app.listen(3000,() => {
    console.log("Serveur lance sur http://localhost:3000");
});