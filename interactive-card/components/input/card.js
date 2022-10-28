import InputMask from 'react-input-mask'

export default function inputCardNumber(props){

    return(

        <InputMask id={ props.id } onBlur={ props.onBlur } onChange={ props.onChange } className={ props.className } maskChar="" mask="9999 9999 9999 9999" placeholder={ props.placeholder } />

    )

}