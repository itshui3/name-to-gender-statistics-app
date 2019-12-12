import React from 'react'
import { connect } from 'react-redux'

function Result(props) {

  return (
    <div className="result__cont">
      {
        props.genderInfo.name &&
<p>The name <span className="result__name">{props.genderInfo.name}</span> has a <span className="result__probability">{props.genderInfo.probability}%</span> chance of being a <span className="result__gender">{props.genderInfo.gender}</span> name.</p>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    genderInfo: state.genderInfo
  }

}

export default connect(mapStateToProps)(Result);