import React, {Component} from 'react';
import styled from 'styled-components'

const ButtonDiv = styled.div`
  background-color: black;
  color: white;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  line-height: 65px;
  box-shadow: 0 0 5px 2px ${props => {
    if(props.isSelected) return props.unsubmittedShadow
    else return props.submittedShadow
  }};
  grid-column-start: ${props => props.start};
  grid-column-end: ${props => props.end};
  user-select: none;
`

class ButtonCom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submittedShadow: this.props.shadow,
            isSelected: false,
        }
    }

    componentWillReceiveProps(newProps) {
        if(this.props.isGroupSaved !== newProps.isGroupSaved) {
            if(this.state.isSelected) {
                this.setState({
                    submittedShadow: this.props.shadow,
                    isSelected: false
                })
            }
        }
    }

    handleSelect = () => {
        this.setState({
            isSelected: !this.state.isSelected
            // shadow: this.props.shadow
        });
        // this.props.callback(this.props.buttonName, this.props.shadow)
    }

    render() {
        return (
            <ButtonDiv start={this.props.start}
                       end={this.props.end}
                       submittedShadow={this.state.submittedShadow}
                       unsubmittedShadow={this.props.shadow}
                       isSelected={this.state.isSelected}
                       onClick={this.handleSelect}
                       style={{boxShadow: "0 0 5px 2px ${this.state.shadow}"}}>
                {this.props.buttonName}
            </ButtonDiv>
        )
    }
}

export default ButtonCom 