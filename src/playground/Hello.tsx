import * as React from 'react';
// import './Hello.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const style = {
    margin: 12
};

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({
    name,
    enthusiasmLevel = 1
}: Props) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You cold be a little more enthusiastic. :D');
    }

    return (
        <MuiThemeProvider>
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <RaisedButton label="Default" style={style}/>
                <RaisedButton label="Primary" primary={true} style={style}/>
                <RaisedButton label="Secondary" secondary={true} style={style}/>
                <RaisedButton label="Disabled" disabled={true} style={style}/>
            </div>
        </MuiThemeProvider>
    );
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
