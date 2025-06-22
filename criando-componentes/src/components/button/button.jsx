const Button = ({ label = 'Clique em mim!!', alertLabel}) => { 
    return(
        <button onClick={() => alertLabel(label)}>{label}</button>
    )
}

export default Button;