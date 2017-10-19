const router = require('express').Router();
module.exports = router;
const { Student, Campus } = require('../db/models');

router.get('/', function (req, res, next) {
    Student.findAll({})
      .then(student => res.json(student))
      .catch(next);
  });
 router.get('/:id', (req,res,next) => {
    Student.findById(req.params.id,
        {include: Campus})
        .then(student =>res.json(student))
        .catch(next)
 });

 router.post('/', (req,res,next)=>{
     return Student.create(
         req.body
     )
     .then(student => {
         res.json(student)
     })
     .catch(next)
 })

 router.put('/:id', (req,res,next) => {
     Student.findById(req.params.id)
     .then(student => {
        return student.update(req.body)
     })
    .then(student => {
        res.json(student)
    })
    .catch(next)
 })

 router.delete('/:id', (req,res,next)=>{
     Student.destroy({
         where: {
             id: req.params.id
         }
     })
     .then(()=>{
         res.status(204).end();
     })
     .catch(next)
 })
 
