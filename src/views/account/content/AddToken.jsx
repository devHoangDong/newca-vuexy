import React, { useEffect } from 'react';
const AddToken = () => {
  console.log('123')
  alert('ok')
  useEffect(() => {
    const location = window.location.pathname
    console.log(location)
    alert('ok')
    //if(loged)  return <Redirect to={currentLocationState?.from as string} />
  });
  // const location = window.location.pathname
  // const getParameterByName = ((name) => {
  //   let url = window.location.href
  //   name = name.replace(/[\[\]]/g, '\\$&');
  //   var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  //     results = regex.exec(url);
  //   if (!results) return null;
  //   if (!results[2]) return '';
  //   return decodeURIComponent(results[2].replace(/\+/g, ' '));
  // })
  // console.log(location)
  alert('ok')
  // const addCts = async () => {
  //   let params = {
  //     cn: '',
  //     serial: ''
  //   }
  //   //const response = await affiliateApi.getAffiliate(params)
  //   //message.success('Thêm CTS thành công');

  // }
  return (<div className="editPassword">Test</div>)
}
export default AddToken