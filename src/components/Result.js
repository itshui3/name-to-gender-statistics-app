import React from 'react'
import { connect } from 'react-redux'

function Result(props) {

  return (
    <div className="result__cont">
      {
        props.genderInfo.name && !props.isHui &&
<p>The name <span className="result__name">{props.genderInfo.name}</span> has a <span className="result__probability">{props.genderInfo.probability}%</span> chance of being a <span className="result__gender">{props.genderInfo.gender}</span> name.</p>
      }
      {
        props.isHui &&
          <h2 className="isHui">The name XuHui Zhu is a great name. 100%.</h2>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    genderInfo: state.genderInfo,
    isHui: state.isHui
  }

}

export default connect(mapStateToProps)(Result);