import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.currentSushi.slice(0,4).map(sushi => <Sushi
        eatenSushi={props.eatenSushi}
        sushiClick={props.sushiClick}
        sushi={sushi}/>
        )}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer