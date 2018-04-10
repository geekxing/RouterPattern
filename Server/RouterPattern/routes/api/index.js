const router = require('koa-router')();
const J1_router = require('./J1_router');

router.prefix('/routes/api');

router.use(J1_router.routes(), J1_router.allowedMethods());

module.exports = router;