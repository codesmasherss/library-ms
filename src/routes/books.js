const express = require('express');
const router = new express.Router();

// Get Requets
router.get('/books', async (req, res) => {
   try {
      const allBooks = ['Book 1', 'Book 2'];

      res.send({
         posts: allBooks
      });
   } catch (e) {
      res.status(500).send({
         error: e
      });
   }
});

module.exports = router;
