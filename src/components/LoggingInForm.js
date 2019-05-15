import React, { Component } from "react"

class LoggingInForm extends Component {
    constructor() {
        super()
        this.state = {
            eMail: "",
            keyWord: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    

    render() {
        return (
            <form className="regForm">
                <input
                    className="rForm"
                    type="text"
                    value={this.state.eMail}
                    name="eMail"
                    placeholder="E-mail"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    className="rForm"
                    type="text"
                    value={this.state.keyWord}
                    name="keyWord"
                    placeholder="Keyword"
                    onChange={this.handleChange}
                />
                <br />
                <button className="but">Submit</button>
            </form>
        )
    }
}

export default LoggingInForm