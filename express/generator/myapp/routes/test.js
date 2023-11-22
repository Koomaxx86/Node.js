var express = require('express');
var router = express.Router();

/* GET test page. */
// '/' 지정시 라우터에 지정된 /test를 확인한다.
router.get('/', function(req, res, next) {
  res.render('test', { title: 'test' });
});

module.exports = router;
