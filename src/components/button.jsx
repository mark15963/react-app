/*
import '../main.css'

function Button(props) {
  function handleClick(e) {
    e.preventDefault();
    alert("click")
    //alert({pats.name})
  }

  return (
    <button className="btn" id="btn" onClick={handleClick}>{props.text}</button>
  )
}

export default Button;
*/

//import './button.css'

const Button = ({ lable, variant, onClick }) => {
  const commonStyles = {
    padding: '20px 32px',
    borderRadius: '4px'
  }

  let customStyles = {};
  if (variant === 'primary') {
    customStyles = {
      background: '#605DEC',
      border: '1px',
      color: '#FFFFFF'
    }
  } else if (variant === 'secondary') {
    customStyles = {
      background: 'transparent',
      border: "1px solid #605DEC",
      color: '#605DEC'
    }
  } else if (variant === 'thertiary') {
    customStyles = {
      background: 'transparent',
      border: "1px solid transparent",
      color: '#605DEC'
    }

    return (
      <button style={{ ...commonStyles }} onClick={onClick}>
        {lable}
      </button>
    )
  }

}
export default Button;
