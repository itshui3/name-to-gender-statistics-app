import React from 'react'
import { connect } from 'react-redux'

// Styles
import './Circles.scss'

function Circles(props) {

  return (
    <div className="circles__cont">
      <div className={`circles__circle circles__fetched ${
        props.genderInfo.name && !props.isFetching ?
          'circles__circle__dark'
          : 'circles__circle__light'
      }`}>
      </div>
      <div className={`circles__circle circles__fetching ${
        props.isFetching ?
          'circles__circle__dark'
          : 'circles__circle__light'
      }`}>
      </div>
      <div className={`circles__circle circles__error ${
        props.error ?
          'circles__circle__dark'
          : 'circles__circle__light'
      }`}>
      </div>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    isFetching: state.isFetching,
    error: state.error,
    genderInfo: state.genderInfo
  }

}

export default connect(mapStateToProps)(Circles)