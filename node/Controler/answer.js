const Answer = require("../Model/answers");

module.exports={
    getAll: (req, res) => {
        Answer.find().then(answer => {
            res.status(200).send(answer);
        }).catch(error => {
            res.status(404).send({ error: error.message });
        });
    }
}
