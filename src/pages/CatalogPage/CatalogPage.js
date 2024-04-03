import React from "react";
import Catalog from "../../components/ForCatalogPage/Catalog/Catalog";
import Movie from "../../components/ForCatalogPage/Movie/Movie";
import './CatalogPage.css'


export default class CatalogPage extends React.Component {
   render() {
      return (
         <div className='catalog-page' >
            <Catalog />
            <div className='container__movie'>
               <Movie className='movie' />
            </div>

         </div>

      )
   }
}