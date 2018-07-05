module.exports = {
    authValidator: () => {
        return (req, res, next) => {
            if(req && req.query && req.query.auth === 'true') {
                return next();
            }
            return res.send({Unauth:"Fail"});
        }
    }
}