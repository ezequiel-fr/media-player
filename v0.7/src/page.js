const path = require('path');

export default (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
};
