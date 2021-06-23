import React from 'react';
import { Card } from 'antd';
import '../../../scss/ProjectItem.scss';
import { useDispatch } from 'react-redux';
import {addCts as addCtsAction} from '../../../redux/action/addCtstAction'
import Slider from "react-slick";
import ProductItem from "../../home/productItem";



const TokenList = ({dataItem}) => {
  const dispatch = useDispatch()
  const addCts = () => {
    dispatch(addCtsAction(dataItem))
  }
  const data = []
  return (
      <div className = "listItem">
        <div className="listItem__title">Limited-Time Offers</div>
        <Slider {...settings}>
          {
            data && data.map((item, index) => {
              return (
                  <div key={index}>
                    <ProductItem dataItem={item} />
                  </div>
              )
            })
          }

        </Slider>
      </div>
  )
}

export default TokenList
