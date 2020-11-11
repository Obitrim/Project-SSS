const Schema = mongoose.Schema;

let FinalAsistance= new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    programStudy: {
        type: String
    },
    level: {
        type: Number
    },
    address: {
        type: String
    },
   email: {
        type: String
    },
    Phone: {
        type: Number
    },
    description: {
        type: String
    },
});
module.exports = mongoose.model("FinalAsistance", FinalAsistance);