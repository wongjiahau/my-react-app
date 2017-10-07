import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
const style = {
    margin: 12
};

function Login() {

    return (
        <div className="hello">
            <Card>
                <TextField floatingLabelText="Student ID (1500181)"/>
                <br/>
                <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"/>
                <br/>
                <img src="https://unitreg.utar.edu.my/portal/Kaptcha.jpg"/>
                <br/>
                <RaisedButton label="Login" primary={true} style={style}/>
                <br/>
                <RaisedButton label="Reset" style={style}/>
                <br/>
            </Card>
        </div>
    );
}

export default Login;
