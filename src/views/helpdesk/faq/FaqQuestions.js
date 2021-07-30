import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Collapse } from "reactstrap"
import { ChevronDown } from "react-feather"
import classnames from "classnames"

const collapseItems = [
  {
    id: 1,
    title: "Làm sao để đăng ký dịch vụ?",
    content:
      "Royalty free means you just need to pay for rights to use the item once per end product. You don't need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses."
  },
  {
    id: 2,
    title: "Làm sao để đăng ký dịch vụ chứng thư số cho cán bộ nhân viên?",
    content:
      "The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template the end product is the finalized business card. The item is a button graphic the end product is an app using the button graphic in the app's interface."
  },
  {
    id: 3,
    title: "Làm sao để đăng ký dịch vụ chứng thư số cho cá nhân?",
    content:
      "Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client."
  },
  {
    id: 4,
    title: "Làm sao để đăng ký dịch vụ chứng thư số cho tổ chức?",
    content:
      "Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item."
  },
  {
    id: 5,
    title: "Tôi muốn đăng ký mới chữ ký số NewCA thì thủ tục thế nào ?",
    content:
      "Bạn chỉ cần cung cấp các thông tin: MST, họ tên, số điện thoại, email và địa chỉ giao. NewCA sẽ soạn hồ sơ gửi bạn và giao chữ ký số sau khi khởi tạo xong."
  },
  {
    id: 6,
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
    id: 7,
    title: "Thời gian đăng ký mới và gia hạn Chữ ký số NewCA là bao lâu ?",
    content:
    `
    Khoảng 30 – 60 phút sau khi bạn cung cấp đầy đủ thông tin. Nếu bạn đăng ký mới chữ ký số, sẽ mất một ít thời gian để chúng tôi giao Token cho bạn (miễn phí giao hàng toàn quốc), cụ thể:
    
    Đối với các quận nội thành Hải Phòng : Đăng ký buổi sáng, giao trong buổi chiều cùng này. Đăng ký buổi chiều, giao trong buổi sáng của ngày làm việc tiếp theo.
    
    Đối với các khu vực và tỉnh thành khác: từ 1 – 3 ngày.
    `
  },
  {
    id: 8,
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
    id: 9,
    title: "Cài đặt chữ ký số NewCA như thế nào ?",
    content:
    `
    Rất đơn giản, bạn chỉ cần cắm USB Token NewCA vào máy tính, sau đó mở My Computer, mở tiếp Ổ đĩa USB NewCA và chạy file Setup.exe trong USB. Khi có bất kỳ cửa sổ nào hiện ra, bạn cứ nhấn Đồng ý và Tiếp tục cho đến khi việc cài đặt hoàn tất.
    
    Sau khi cài đặt xong, bạn cần rút USB Token ra và cắm lại.
    `
  },
  {
    id: 10,
    title: "Can I store the item on an intranet so everyone has access?",
    content:
      "No, items must be stored in a location where only those who need them have access. If you purchased a single-use license, once the item has been used in a single end product, the only place you should store it is in the archive files for that end product."
  },
  {
    id: 11,
    title: "Does this apply to all items from Envato Market?",
    content:
      "No. This only applies to items with real-world products and trademarks in the actual item. This is most likely in product mock-ups (graphics items), product promos (motion graphics project files) and 3D items. This does not apply to PhotoDune items, which are available for commercial use. This also does not apply to images of products and trademarks used illustratively in item previews, as they're not included in the item you download."
  },
  {
    id: 12,
    title: "What does 'editorial use' mean?",
    content:
      "Editorial use means using an item only for news or journalistic purposes like in blogs, magazine and newspaper editorial applications."
  },
  {
    id: 13,
    title: "Is this item still 'royalty free'?",
    content:
      "Yes. Royalty free means you pay for the item once for each end product, and you don't need to pay any additional or ongoing fees for each person who sees or uses it. This is separate to whether you need a clearance from the owner of rights in the real world product or trademark within an item."
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
      }else{
        return null
      }
      
    })
    return <div> {accordionMarginItems}</div>
  }
}
export default FaqQuestions
