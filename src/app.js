import React from 'react'
import './style/common.less'
import background from './assets/images/picture.png'
import Icon from './component/Icon'
const a = '1'
console.log(a)
const b = {
  c: '6',
  d: 7,
  f: 3+5
}
function App() {
  return (
    <div className="App">
      <div className="banner">
        <img src={background} alt="" />
        <div className="title">
          <p style={{ display: 'flex', alignItems: 'center', fontSize: 30 }}>
            自制Webpack + React脚手架
            <Icon style={{ fontSize: 60, marginLeft: 20 }} type="maimaihoutaitubiao-2" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default App