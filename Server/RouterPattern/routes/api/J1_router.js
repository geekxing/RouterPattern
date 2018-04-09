const router = require('koa-router')();
const J1 = require('../../app/controllers/J1');

router.prefix('/J1');

router.get('/getJ1List', J1.getJ1List);

module.exports = router;