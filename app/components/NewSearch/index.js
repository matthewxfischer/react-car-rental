/**
*
* NewSearch
*
*/

import React from 'react';
import FormSearch from '../FormSearch/'


// import styled from 'styled-components';
function showSearch(){
  var block = document.getElementById('inputSearchDisplay')

  if (block.className=='fadeSearchOpen') {
    block.className = "fadeSearchClose"
  }else{
    block.className = "fadeSearchOpen"
  }
}

function NewSearch() {

  return (
    <div className='newSearch'>
      <div onClick={()=> showSearch()}>Busqueda Nueva<i className='fa fa-search' ></i></div>
        <FormSearch/>
    </div>
  );
}

NewSearch.propTypes = {

};

export default NewSearch;
