const express=require('express');
const router=express.Router();
const Placedrefer=require('../drefer/placedrefer');

router.post('/', function(req, res){
    Placedrefer.addPlace(req.body).then((result) => {
        res.status(200).end(result);
    }).catch((err) => {
        res.status(500).end(err);
    });
});

router.get('/', function(req, res){
    Placedrefer.getPlaces(req.body).then((result) => {
        res.status(200).end(result);
    }).catch((err) => {
        res.status(500).end(err);
    });
});

router.get('/nearest', function(req, res){
    Placedrefer.findNearestLoc(-91.9612747, 41.0132949).then((result) => {
        res.status(200).end(result);
    }).catch((err) => {
        res.status(500).end(err);
    });
});

router.get('/:id', function(req, res){
    Placedrefer.getPlace(req.params.id).then((result) => {
        res.status(200).end(result);
    }).catch((err) => {
        res.status(500).end(err);
    });
});

module.exports=router;