var path = require('path');

module.exports = {
    clientRoute: () => {
        return (req, res) => {
            return res.sendFile(path.resolve('public/index.html'));
        }
    }
};