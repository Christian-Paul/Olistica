module.exports = function (req, res, next) {
  console.log('requiring authentication');
  if (!req.session.userId) {
    res.redirect('/');
  } else {
    next();
  }
}
