import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Collapse } from "reactstrap"
import { ChevronDown } from "react-feather"
import classnames from "classnames"

const collapseItems = [
  {
    id: 1,
    title: "Tôi muốn đăng ký mới chữ ký số NewCA thì thủ tục thế nào ?",
    content:
      "Bạn chỉ cần cung cấp các thông tin: MST, họ tên, số điện thoại, email và địa chỉ giao. NewCA sẽ soạn hồ sơ gửi bạn và giao chữ ký số sau khi khởi tạo xong."
  },
  {
    id: 2,
    title:
      "Tôi muốn gia hạn chữ ký số NewCA thì thủ tục như thế nào ?",
    content:
      `

      Bước 1: Bạn chỉ cần cung cấp các thông tin: MST, họ tên, số điện thoại và email để chúng tôi soạn hồ sơ gửi bạn. Chuẩn bị xong, bạn chụp hình đủ bộ hồ sơ gửi chúng tôi tiến hành gia hạn.
      
      Bước 2: Sau khi chữ ký số của bạn đã được gia hạn trên hệ thống, Nhân viên kỹ thuật sẽ liên hệ bạn để cập nhật hạn dùng mới lên USB Token thông qua Ultraviewer.
      
      Bước 3: NewCA hỗ trợ cập nhật chữ ký số mới vừa gia hạn xong lên các hệ thống kê khai như: Thuế, BHXH điện tử, Hải quan điện tử, …
      
      Lưu ý: Việc cập nhật chữ ký số mới vừa gia hạn xong lên hệ thống Hải quan điện tử phải sau 24 giờ thì doanh nghiệp mới kê khai được. Vì vậy, doanh nghiệp lưu ý gia hạn chữ ký số cho kịp kê khai Hải quan.
      `
  },
  {
    id: 3,
    title: "Thời gian đăng ký mới và gia hạn Chữ ký số NewCA là bao lâu ?",
    content:
      `
    Khoảng 30 – 60 phút sau khi bạn cung cấp đầy đủ thông tin. Nếu bạn đăng ký mới chữ ký số, sẽ mất một ít thời gian để chúng tôi giao Token cho bạn (miễn phí giao hàng toàn quốc), cụ thể:
    
    Đối với các quận nội thành Hải Phòng : Đăng ký buổi sáng, giao trong buổi chiều cùng này. Đăng ký buổi chiều, giao trong buổi sáng của ngày làm việc tiếp theo.
    
    Đối với các khu vực và tỉnh thành khác: từ 1 – 3 ngày.
    `
  },
  {
    id: 4,
    title: "Đăng ký sử dụng chữ ký số NewCA, tôi được hỗ trợ những gì ?",
    content:
      `
    Cài đặt phần mềm và các công cụ hỗ trợ kê khai. Hỗ trợ cài đặt và cấu hình lại phần mềm khi máy tính của bạn cài đặt lại hệ điều hành hoặc chuyển máy tính mới.
    
    Đăng ký tài khoản kê khai và nộp Thuế cho các doanh nghiệp mới thành lập, tài khoản VNACCS kê khai Hải quan điện tử, tài khoản kê khai Bảo hiểm xã hội điện tử, …
    
    Hỗ trợ nộp tờ khai lệ phí môn bài cho doanh nghiệp mới thành lập, nộp tờ khai Thuế (tháng, quý) cho các doanh nghiệp mới chưa phát sinh kinh doanh, …
    
    Cập nhật chữ ký số mới đăng ký / mới gia hạn vào các hệ thống kê khai Thuế, Hải quan, Bảo hiểm xã hội điện tử… hoặc thay đổi thông tin doanh nghiệp trên chữ ký số.
    
    Bạn đăng ký sử dụng chữ ký số NewCA của chúng tôi sẽ được hỗ trợ hoàn toàn miễn phí trong suốt quá trình sử dụng.
    `
  },
  {
    id: 5,
    title: "Cài đặt chữ ký số NewCA như thế nào ?",
    content:
      `
    Rất đơn giản, bạn chỉ cần cắm USB Token NewCA vào máy tính, sau đó mở My Computer, mở tiếp Ổ đĩa USB NewCA và chạy file Setup.exe trong USB. Khi có bất kỳ cửa sổ nào hiện ra, bạn cứ nhấn Đồng ý và Tiếp tục cho đến khi việc cài đặt hoàn tất.
    
    Sau khi cài đặt xong, bạn cần rút USB Token ra và cắm lại.
    `
  }
]

class FaqQuestions extends React.Component {
  state = {
    collapseID: "",
    status: "Closed"
  }

  toggleCollapse = collapseID => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }))
  }

  onEntered = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opened" })
  }
  onEntering = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opening..." })
  }

  onExited = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closed" })
  }

  onExiting = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closing..." })
  }

  render() {
    const accordionMarginItems = collapseItems.map(collapseItem => {
      if (this.props.value > 0) {
        return (
          <div
            className="collapse-margin accordion vx-collapse"
            key={collapseItem.id}
          >
            <Card
              onClick={() => this.toggleCollapse(collapseItem.id)}
              className={classnames("shadow-none", {
                "collapse-collapsed":
                  this.state.status === "Closed" &&
                  this.state.collapseID === collapseItem.id,
                "collapse-shown":
                  this.state.status === "Opened" &&
                  this.state.collapseID === collapseItem.id,
                closing:
                  this.state.status === "Closing..." &&
                  this.state.collapseID === collapseItem.id,
                opening:
                  this.state.status === "Opening..." &&
                  this.state.collapseID === collapseItem.id
              })}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed text-truncate w-75">
                  {collapseItem.title}
                </CardTitle>
                <ChevronDown className="collapse-icon" size={15} />
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={() => this.onEntering(collapseItem.id)}
                onEntered={() => this.onEntered(collapseItem.id)}
                onExiting={() => this.onExiting(collapseItem.id)}
                onExited={() => this.onExited(collapseItem.id)}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          </div>
        )
      } else if (collapseItem.title.toLowerCase().includes(this.props.value)) {
        return (
          <div
            className="collapse-margin accordion vx-collapse"
            key={collapseItem.id}
          >
            <Card
              onClick={() => this.toggleCollapse(collapseItem.id)}
              className={classnames("shadow-none", {
                "collapse-collapsed":
                  this.state.status === "Closed" &&
                  this.state.collapseID === collapseItem.id,
                "collapse-shown":
                  this.state.status === "Opened" &&
                  this.state.collapseID === collapseItem.id,
                closing:
                  this.state.status === "Closing..." &&
                  this.state.collapseID === collapseItem.id,
                opening:
                  this.state.status === "Opening..." &&
                  this.state.collapseID === collapseItem.id
              })}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed text-truncate w-75">
                  {collapseItem.title}
                </CardTitle>
                <ChevronDown className="collapse-icon" size={15} />
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={() => this.onEntering(collapseItem.id)}
                onEntered={() => this.onEntered(collapseItem.id)}
                onExiting={() => this.onExiting(collapseItem.id)}
                onExited={() => this.onExited(collapseItem.id)}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          </div>
        )
      } else {
        return null
      }

    })
    return <div> {accordionMarginItems}</div>
  }
}
export default FaqQuestions
