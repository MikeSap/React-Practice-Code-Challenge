import React, { Fragment, useState } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

const [beltSushi, setBeltSushi] = useState({
  one: 0,
  two: 4
})

const handleSushi = () => {
  if(beltSushi.two === 100){
    setBeltSushi({
      one: 0,
    two: 4
    })
  }else{
    setBeltSushi({
      one: beltSushi.one + 4,
      two: beltSushi.two + 4
    })
  }
}


  return (
    <Fragment>
      <div className="belt">
        {props.currentSushi.slice(beltSushi.one,beltSushi.two).map(sushi => <Sushi
        eatenSushi={props.eatenSushi}
        sushiClick={props.sushiClick}
        sushi={sushi}/>
        )}
        <MoreButton handleSushi={handleSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer