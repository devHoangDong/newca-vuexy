import React from 'react';
import '../../../assets/scss/titleBody.scss'


function Title({ title }) {

  return (
    <div className="titleBody">
      <span>{title}</span>
    </div>
  );
}

export default Title;
