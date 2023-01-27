import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, formIsVisible}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text={formIsVisible ? 'Close' : "Add"} color={formIsVisible ? 'red' : 'green'} onClick={onAdd}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

// const headerStyle = {
//     color: 'blue',
//     backgroundColor: 'yellow'
// }

export default Header