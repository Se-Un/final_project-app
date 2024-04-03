import React from "react";


function Movie(props) {
   const cinema = '<iframe width="70%" height="500" margin="20%" src="https://www.youtube.com/embed/gA6pxmdMiOQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
   return (
      <section className='movie' dangerouslySetInnerHTML={{ __html: cinema ? cinema : "" }} />
   );
}
export default Movie;