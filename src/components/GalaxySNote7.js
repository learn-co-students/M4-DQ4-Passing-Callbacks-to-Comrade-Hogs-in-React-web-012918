import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
    this.setState({
      panicked: true
    }, () => {
      console.log(this.state.panicked)
      this.props.wait()
      this.relax()
    })
  }

  relax = () => {
    this.setState({
      panicked: false
    })
  }

  exclaim = () => {
    console.log(this.state.panicked)
    this.props.alterEnvironment("inhospitable")

    if (this.state.panicked) return
      this.exclaimAudio.play()
      this.squeelAudio.play()
  }

  panic = () => {
    return <img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />
  }

  render() {
    console.log(this.props);
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.props.environment !== "docile") ? this.panic() : null}
      </div>
    )
  }
}
