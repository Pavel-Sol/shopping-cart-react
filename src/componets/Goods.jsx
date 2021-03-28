import React from 'react'

class Goods extends React.Component {
   componentDidMount() {
      fetch('./db.json')
      .then((response) => response.json())
      .then((json) => console.log(json));
   }




   render() {
      return(
         <h1>GOODS</h1>
      )
   }
}


export default Goods