import { Schema, model, connection } from "mongoose";

type Usertype = {
    email: string,
    age: number,
    interests: string[],
    fullname: {
        name: string,
        surname: string
    }
}

const User = model('user', new Schema<Usertype>({
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    interests: [String],
    fullname: {
        name: {
            type: String,
            required: true
        },
        surname: String
    }
}))


export default User