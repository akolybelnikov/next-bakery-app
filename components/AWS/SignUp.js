import { SignUp } from "aws-amplify-react";

export class CustomizedSignUp extends SignUp {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
}
