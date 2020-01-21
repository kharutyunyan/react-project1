import styled from "styled-components";



const Blok = styled.div`
${ ({width})  => width ? `width: ${width};` : ''}
${ ({height})  => height ? `height: ${height};` : ''}
${ ({bgColor})  => bgColor ? `background-color: ${bgColor};` : ''}
${ ({borderRadius}) => borderRadius ? `border-radius: ${borderRadius};` : ''}
${ ({border}) => border ? `border: ${border};` : ''}
${ ({borderColor}) => borderColor ? `border-color: ${borderColor};` : ''}
${ ({position}) => position ? `position: ${position};` : ''}
${ ({align}) => align ?  `align-items: ${align};` : '' }
${ ({margin}) => margin ? `margin: ${margin};` : "" }
${ ({padding}) => padding ? `padding: ${padding};` : "" }
${ ({flex}) => flex ? `display: ${"flex"};` : "" }
${ ({top}) =>top ? `top: ${top};` : "" }
${ ({left}) =>left ? `left: ${left};` : "" }
${ ({overFlow}) =>overFlow ? `overflow: ${overFlow};` : "" }



`; 





export default Blok;