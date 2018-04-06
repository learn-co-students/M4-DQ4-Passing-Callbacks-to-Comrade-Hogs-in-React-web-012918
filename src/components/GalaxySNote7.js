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

    //called to refresh?
    // this.relax()
    setTimeout(this.relax(), 2000)
  }

  //attempt to do the 2 second refresh
  relax = () => {
    console.log('checking relax is called')
    setTimeout(this.props.environment(), 2000)
    this.setState({
      panicked: false
    })
    // setTimeout(this.props.alterEnvironment('docile'), 2000)
  }

  exclaim = () => {
    //added cb to change pigpen environment
    this.props.alterEnvironment('inhospitable')
    //added set state to change panicked to true
    this.setState({
      panicked: true
    })

    if (this.state.panicked) return
    this.exclaimAudio.play()
    this.squeelAudio.play()


  }

  panic = () => (<img id="galaxy-exclamation" className="exclamation" src={exclamation} alt="" />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
