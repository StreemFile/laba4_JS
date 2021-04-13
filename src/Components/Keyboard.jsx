import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import ButtonCom from "./ButtonCom";
import Logo from "./Logo";

const Wrapper = styled.div`
  padding: 10px;
  width: 1200px;
  height: 400px;
  background-color: #504f4f;
  margin: 60px auto;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

let Keyboard = (props) => {
    let buttons = [
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "`"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "1"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "2"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "3"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "4"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "5"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "6"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "7"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "8"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "9"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "0"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "-"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "="
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "delete",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "tab",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "Q"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "W"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "E"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "R"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "T"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "Y"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "U"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "I"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "O"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "P"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "["
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "]"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "|"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "caps lock",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "A"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "S"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "D"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "F"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "G"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "H"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "J"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "K"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "L"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: ";"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "'"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "return",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "shift",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "Z"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "X"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "C"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "V"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "B"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "N"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "M"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: ","
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "."
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "UP"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "/"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "shіft",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "fn"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "option",
            start: 2,
            end: 4
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "command",
            start: 4,
            end: 6
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "",
            start: 6,
            end: 11
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "LEFT"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "DOWN"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "RIGHT"
        }
    ]


    let [bbb, setButtons] = useState([
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "`"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "1"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "2"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "3"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "4"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "5"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "6"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "7"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "8"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "9"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "0"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "-"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "="
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "delete",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "tab",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "Q"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "W"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "E"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "R"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "T"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "Y"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "U"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "I"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "O"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "P"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "["
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "]"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "|"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "caps lock",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "A"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "S"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "D"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "F"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "G"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "H"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "J"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "K"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "L"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: ";"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "'"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "return",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "shift",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "Z"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "X"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "C"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "V"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "B"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "N"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "M"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: ","
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "."
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "UP"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "/"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "shіft",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "fn"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "option",
            start: 2,
            end: 4
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "command",
            start: 4,
            end: 6
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "",
            start: 6,
            end: 11
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "LEFT"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "DOWN"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: "#ffffff",
            buttonName: "RIGHT"
        }
    ])


    // let changeColor = (buttonName, color) => {
    //     console.log("dafda")
    //     for (let i = 0; i<buttons.length; i++) {
    //         let b = buttons;
    //         if(buttons[i].buttonName === buttonName) {
    //             console.log(buttons[i])
    //             b[i].shadow = color;
    //             buttons = b;
    //             console.log(buttons[i])
    //         }
    //     }
    // }

    const changeColor = (buttonName, color) => {
        setButtons(buttons.map((item) => item.buttonName === buttonName ? {...item, shadow: color} : {...item}));
    }

    useEffect(() => {
        if(props.isPresetSaved){
            localStorage.setItem(props.presetName, JSON.stringify(bbb))
        }
    })

    return (
        <Wrapper>
            {
                buttons.map((item, index) =>
                    <ButtonCom
                        key={index}
                        isGroupSaved={item.isGroupSaved}
                        shadow={props.shadow}
                        buttonName={item.buttonName}
                        start={item.start}
                        end={item.end}
                        array={buttons}
                        callback={changeColor}
                    />
                )
            }
            <Logo logoColor={props.logoColor}/>
        </Wrapper>
    );
}

export default Keyboard;