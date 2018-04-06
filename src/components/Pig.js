import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)


  render() {
    return(
      <div id={this.props.name} className="sheeple">
        {/* added ternary to respond to change in state to pigpen */}
        {(this.props.environment === 'inhospitable') ? this.panic() : null}
      </div>
    )
  }
}
