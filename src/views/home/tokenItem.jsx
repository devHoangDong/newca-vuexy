import React from 'react';
import { Card } from 'antd';
import '../../assets/scss/ProjectItem.scss';
import { useDispatch } from 'react-redux';
const TokenItem = ({ dataItem }) => {
  console.log(dataItem);
  const dispatch = useDispatch()
  return (
    <div className="productItem">
      <Card>
        <div className="productItem__footer">
          <div className="productItem__footer--title">
            <label>{dataItem.cn}</label>
          </div>
          <div className="productItem__footer--price">
            <label>{dataItem.serial}</label>
          </div>
        </div>
      </Card>
    </div>
  )
}
export default TokenItem
