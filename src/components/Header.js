import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

  const onClick = () => {
    console.log("Click");
  }
  return (
    <div className="header">
        <h1>{title}</h1>
        <Button onClick={onClick} color="green" text='Add'></Button>
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