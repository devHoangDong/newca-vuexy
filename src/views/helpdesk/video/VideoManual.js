import React from "react"
import { Card, Col, Row } from "reactstrap"
import "../../../assets/scss/pages/faq.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import BottomContent from '../common/BottomContent'
import VideoSearch from "./VideoSearch"


const VideoManual = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Video hướng dẫn"
        breadCrumbParent="Hỗ trợ"
        breadCrumbActive="Video hướng dẫn"
      />
      <Row>
        <Col sm="12">
          <VideoSearch />
        </Col>
        <Col lg="4" sm="12">
          <Card className="overflow-hidden">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lZ6CHXcVXdk"
                frameBorder="0"
                allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
                allowFullScreen
                title="video"
              />
            </div>
          </Card>
        </Col>
        <Col lg="4" sm="12">
          <Card className="overflow-hidden">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3rWTEW4Gd1U"
                frameBorder="0"
                allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
                allowFullScreen
                title="video"
              />
            </div>
          </Card>
        </Col>
        <Col lg="4" sm="12">
          <Card className="overflow-hidden">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PohhB0rKZQs"
                frameBorder="0"
                allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture"
                allowFullScreen
                title="video"
              />
            </div>
          </Card>
        </Col>
      </Row>
      <BottomContent />
    </React.Fragment>
  )
}

export default VideoManual
