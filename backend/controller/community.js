const Community = require('../model/community');

module.exports.create = async (req, res) => {
    const community = new Community(req.body);
    await community.save();
    res.json(community);
}