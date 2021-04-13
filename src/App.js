import './App.css';
import ColorPicker, {useColor} from "react-color-palette";
import styled from "styled-components";
import "react-color-palette/lib/css/styles.css";
import Keyboard from "./Components/Keyboard";
import React, {useState} from "react";

const Div = styled.div`
  margin-top: -50px;
  margin-left: 100px;
`
const Div2 = styled.div`
  margin-top: -213px;
  margin-left: 450px;
`
const Button = styled.button`
  width: 100px;
  height: 20px;
`

function App() {

    const [color, setColor] = useColor("hex", "#ffffff");
    const [colorLogo, setColorLogo] = useColor("hex", "#1D87AD");
    const [isGroupSaved, setIsGroupSaved] = useState(false);
    const [presetName, setPresetName] = useState("");
    const [isPresetSaved, setIsPresetSaved] = useState(false);

    const saveGroup = (e) => {
        e.preventDefault();
        setIsGroupSaved(!isGroupSaved);
    }

    // let textInput = "";
    //
    // const savePreset = (e, name) => {
    //     e.preventDefault();
    //     console.log(textInput.value);
    //     setPresetName(textInput.value);
    //     setIsPresetSaved(!isPresetSaved);
    // }


    return (
        <div>
            <form>
                <Keyboard isPresetSaved={isPresetSaved}
                          presetName={presetName}
                          isGroupSaved={isGroupSaved}
                          shadow={color.hex}
                          logoColor={colorLogo.hex}/>
                <Div>
                    <h2 style={{color: "white"}}>Button color picker</h2>
                    <ColorPicker style={"margin-left: 100px;"}
                                 width={300} height={100}
                                 color={color} onChange={setColor}
                                 hideHSB hideHEX hideRGB dark/>
                </Div>
                <Div2>
                    <h2 style={{color: "white"}}>Logo color picker</h2>
                    <ColorPicker disabled style={"margin-left: 100px;"}
                                 width={300} height={100}
                                 color={colorLogo} onChange={setColorLogo}
                                 hideHSB hideHEX hideRGB dark/>
                </Div2>
                <Button onClick={(e) => saveGroup(e)}>
                    Save group
                </Button>
                {/*<input type="text" ref={(input) => { textInput = input; }}/>*/}
                {/*<Button onClick={(e) => savePreset(e, presetName)}>*/}
                {/*    save preset*/}
                {/*</Button>*/}
            </form>
        </div>
    );
}

export default App;
