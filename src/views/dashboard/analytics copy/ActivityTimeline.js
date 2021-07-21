import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Plus, AlertCircle, Check } from "react-feather"

class ActivityTimeline extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dòng thời gian</CardTitle>
        </CardHeader>
        <CardBody>
          <ul className="activity-timeline timeline-left list-unstyled">
            <li>
              <div className="timeline-icon bg-primary">
                <Plus size={16} />
              </div>
              <div className="timeline-info">
                <p className="font-weight-bold mb-0">Họp đối tác</p>
                <span className="font-small-3">
                  Họp đối tác
                </span>
              </div>
              <small className="text-muted">25 mins ago</small>
            </li>
            <li>
              <div className="timeline-icon bg-warning">
                <AlertCircle size={16} />
              </div>
              <div className="timeline-info">
                <p className="font-weight-bold mb-0">Tin tức Email</p>
                <span className="font-small-3">
                  Tin tức 
                </span>
              </div>
              <small className="text-muted">15 days ago</small>
            </li>
            <li>
              <div className="timeline-icon bg-danger">
                <Check size={16} />
              </div>
              <div className="timeline-info">
                <p className="font-weight-bold mb-0">Kế hoạch</p>
                <span className="font-small-3">
                  Kế hoạch
                </span>
              </div>
              <small className="text-muted">20 days ago</small>
            </li>
            <li>
              <div className="timeline-icon bg-success">
                <Check size={16} />
              </div>
              <div className="timeline-info">
                <p className="font-weight-bold mb-0">Phát triển Website</p>
                <span className="font-small-3">Phát triển Website</span>
              </div>
              <small className="text-muted">25 days ago</small>
            </li>
            <li>
              <div className="timeline-icon bg-primary">
                <Check size={16} />
              </div>
              <div className="timeline-info">
                <p className="font-weight-bold mb-0">Marketing</p>
                <span className="font-small-3">
                  Marketing.
                </span>
              </div>
              <small className="text-muted">28 days ago</small>
            </li>
          </ul>
        </CardBody>
      </Card>
    )
  }
}
export default ActivityTimeline
