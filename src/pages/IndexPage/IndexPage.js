import React from "react";
import IndexDescription from "../../components/ForIndexPage/IndexDescription/IndexDescription";
import IndexForm from "../../components/ForIndexPage/IndexForm/IndexForm";
import IndexMap from "../../components/ForIndexPage/IndexMap/IndexMap";

export default class IndexPage extends React.Component {

   render() {
      return (
         <div className='index-page'>
            <IndexDescription />
            <IndexForm />
            <IndexMap />
         </div>

      )
   }
}
