import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap"
import Chart from "react-apexcharts"
import { Circle, ChevronDown } from "react-feather"

class Productorders extends React.Component {
  state = {
    options: {
      colors: [this.props.primary, this.props.warning, this.props.danger],
      fill: {
        type: "gradient",
        gradient: {
          // enabled: true,
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: [
            this.props.primaryLight,
            this.props.warningLight,
            this.props.dangerLight
          ],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      plotOptions: {
        radialBar: {
          size: 150,
          hollow: {
            size: "20%"
          },
          track: {
            strokeWidth: "100%",
            margin: 15
          },
          dataLabels: {
            name: {
              fontSize: "18px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "Total",

              formatter: () => {
                return 42459
              }
            }
          }
        }
      },
      labels: ["Hoàn thành", "Đang xử lý", "Bị từ chối"]
    },
    series: [70, 52, 26]
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Đặt hàng sản phẩm</CardTitle>
          <UncontrolledDropdown>
            <DropdownToggle tag="small" className="text-bold-500 cursor-pointer">
              7 ngày gần nhất <ChevronDown size={10} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>28 ngày gần nhất</DropdownItem>
              <DropdownItem>Tháng trước</DropdownItem>
              <DropdownItem>Năm trước</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350}
            className="mb-3"
          />
          <div className="chart-info d-flex justify-content-between mb-1">
            <div className="series-info d-flex align-items-center">
              <Circle strokeWidth={5} size="12" className="primary" />
              <span className="text-bold-600 ml-50">Hoàn thành</span>
            </div>
            <div className="series-result">
              <span className="align-middle">23043</span>
            </div>
          </div>
          <div className="chart-info d-flex justify-content-between mb-1">
            <div className="series-info d-flex align-items-center">
              <Circle strokeWidth={5} size="12" className="warning" />
              <span className="text-bold-600 ml-50">Đang xử lý</span>
            </div>
            <div className="series-result">
              <span className="align-middle">14658</span>
            </div>
          </div>
          <div className="chart-info d-flex justify-content-between">
            <div className="series-info d-flex align-items-center">
              <Circle strokeWidth={5} size="12" className="danger" />
              <span className="text-bold-600 ml-50">Bị từ chối</span>
            </div>
            <div className="series-result">
              <span className="align-middle">4758</span>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default Productorders
