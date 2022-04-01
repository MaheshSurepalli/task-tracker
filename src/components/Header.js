import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd, showAdd}) => {

  return (
    <div className="header">
        <h1>{title}</h1>
        <Button onClick={onAdd} color={showAdd ? 'green' : "red"} text={showAdd?'Add':'Close'}></Button>
    </div>
  )
}

Header.defaultProps = {
    title: 'Task Traker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header