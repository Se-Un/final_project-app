import React from "react";


function IndexMap(props) {
   const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2358765.5802798746!2d-113.4717926296034!3d35.26582023561016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1639384654621!5m2!1sru!2sru" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
   return (
      <section className='iframe' dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }} />
   );
}
export default IndexMap;