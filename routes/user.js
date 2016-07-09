var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{title:'注册'});
});
router.get('/login', function(req, res, next) {
  res.render('user/login',{title:'登录'});
});
router.get('/logout', function(req, res) {
  res.render('user/logout',{title:'退出'});
});

module.exports = router;


















