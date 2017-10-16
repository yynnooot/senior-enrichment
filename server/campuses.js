const router = require('express').Router();
module.exports = router;
const { Campus } = require('../db/models');

router.get('/', function (req, res, next) {
    Campus.findAll({})
      .then(student => res.json(student))
      .catch(next);
  });
 router.get('/:id', (req,res,next) => {
     Campus.findById(req.params.id)
        .then(student =>res.json(student))
        .catch(next)
 });

 router.post('/', (req,res,next) => {
     return Campus.create(req.body)
     .then(campus => {
         res.json(campus)
     })
     .catch(next);
 })

 router.put('/:id', (req,res,body) => {
     Campus.findById(req.params.id)
     .then(campus => {
         return campus.update(req.body)
     })
     .then(campus => {
         res.json(campus);
     })
 });

 router.delete('/:id', (req,res,next) => {
     Campus.destroy({
         where: {
             id: req.params.id
         }
     })
     .then(() => {
         res.status(204).end()
     })
     .catch(next)
 })