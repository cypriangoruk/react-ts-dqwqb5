import * as React from 'react';

interface XoProps {  
  kto: string;
  n : number;
}
interface XoState {
}

export default class Xo extends React.Component<XoProps, XoState> {

  render = () =>{
    return(
      <td>{this.props.kto}</td>
    )
  }
}
