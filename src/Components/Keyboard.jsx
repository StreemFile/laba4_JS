import React, {useEffect} from 'react';
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

const Keyboard = (props) => {
    const buttons = [
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "`"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "1"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "2"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "3"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "4"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "5"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "6"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "7"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "8"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "9"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "0"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "-"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "="
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "delete",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "tab",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "Q"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "W"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "E"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "R"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "T"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "Y"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "U"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "I"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "O"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "P"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "["
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "]"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "|"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "caps lock",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "A"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "S"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "D"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "F"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "G"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "H"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "J"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "K"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "L"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: ";"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "'"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "return",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "shift",
            start: 1,
            end: 3
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "Z"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "X"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "C"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "V"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "B"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "N"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "M"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: ","
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "."
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "UP"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "/"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "shіft",
            start: 14,
            end: 16
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "fn"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "option",
            start: 2,
            end: 4
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "command",
            start: 4,
            end: 6
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "",
            start: 6,
            end: 11
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "LEFT"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "DOWN"
        },
        {
            isGroupSaved: props.isGroupSaved,
            shadow: props.shadow,
            buttonName: "RIGHT"
        }
    ]

    // useEffect(() => {
    //     if(props.isPresetSaved){
    //         console.log(props.presetName)
    //         // localStorage.setItem(props.presetName, JSON.stringify(buttons))
    //     }
    // })


    // let changeColor = (buttonName, color) => {
    //     // let a = buttons.find(item => item.buttonName === buttonName)
    //     // console.log(a)
    //     // a.shadow = props.shadow;
    //     // console.log(a)
    //     let a = buttons.find(item => item.buttonName === buttonName);
    //     a.shadow = props.shadow;
    //     let index = buttons.findIndex(item => item.buttonName === buttonName);
    //     console.log(buttons[index])
    //     buttons[index] = a;
    //     console.log(buttons[index])
    // }

    return (
        <Wrapper>
            {
                buttons.map((item, index) =>
                    <ButtonCom
                        key={index}
                        isGroupSaved={item.isGroupSaved}
                        shadow={item.shadow}
                        buttonName={item.buttonName}
                        start={item.start}
                        end={item.end}
                        // callback={changeColor}
                    />
                )
            }
            <Logo logoColor={props.logoColor}/>
        </Wrapper>
    );
}

export default Keyboard;