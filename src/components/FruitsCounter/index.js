import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="main">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="spanEle">{mango}</span> mangoes
            <span className="spanEle">{banana}</span> bananas
          </h1>
          <div className="fruitsCont">
            <div className="mangoCont">
              <img
                className="img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.onMango} className="btn" type="button">
                Eat Mango
              </button>
            </div>
            <div className="bananaCont">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.onBanana} className="btn" type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
