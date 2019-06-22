import React, {Component} from 'react'

class Accordion extends Component {
    constructor(props){
        super(props)
        this.state = {
            activeSection: null
        }
    }

    handleButtonClick = (index) => {
        this.setState(
            {
                activeSection: index
            }
        )
    }

    renderAccordionItem = () => {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleButtonClick(index)}>{section.title}</button>
                {this.state.activeSection === index && <p>{section.content}</p>}
            </li>
        )) 
    }

    render() {
        return (
            <ul>
                {this.renderAccordionItem()}
            </ul>
        )
    }
    
}

Accordion.defaultProps = {
    sections: [{}]
};

export default Accordion