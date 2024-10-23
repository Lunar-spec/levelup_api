const mongoose = require('mongoose');

const validateMongoId = (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            error: 'Invalid MongoDB ObjectId format'
        });
    }
    next();
};

module.exports = validateMongoId;