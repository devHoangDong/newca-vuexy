import React, { useState, useEffect } from "react"
import { Card, CardBody, FormGroup, Input, Row, Col } from "reactstrap"
import { Search } from "react-feather"
import Autocomplete from '../../../@core/components/autocomplete/index';
import * as Icon from "react-feather";
import classnames from "classnames";
import axios from "axios";

const TopSearch = (props) => {
  const [suggestion, setSuggestion] = useState({});
  const [navbarSearch, setNavbarSearch] = useState(false);
  const [value, setValue] = useState("")
  const onChange = event => {
    let searchText = event.target.value.toLowerCase()
    setValue(searchText)
  }
  const fetchData = () => {
    axios.get('/api/main-search/data').then(({ data }) => {
      console.log(data.searchResult, 'data')
      setSuggestion(data.searchResult);
      // this.setState({ suggestions: data.searchResult });
    });
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <Row>
      <Col sm="12">
        <Card className="faq-bg">
          <CardBody className="p-sm-4 p-2">
            <h1 className="text-white">{props.title}</h1>
            <p className="mb-2 text-white">
              {props.subtitle}
            </p>
            <form>
              <FormGroup className="position-relative has-icon-left mb-0">
                <Input
                  type="text"
                  placeholder="Tìm kiếm"
                  bsSize="lg"
                  value={value}
                  onChange={onChange}
                />
                <div className="form-control-position">
                  <Search size={14} />
                </div>
                {/* <Autocomplete
                  className="form-control"
                  suggestions={suggestion}
                  filterKey="title"
                  filterHeaderKey="groupTitle"
                  grouped={true}
                  placeholder="Tìm kiếm..."
                  autoFocus={true}
                  clearInput={true}
                  // externalClick={(e) => {
                  //   setNavbarSearch(false);
                  // }}
                  onKeyDown={(e) => {
                    if (e.keyCode === 27 || e.keyCode === 13) {
                      // setNavbarSearch(false);
                      // props.handleAppOverlay("");
                    }
                  }}
                  customRender={(
                    item,
                    i,
                    filteredData,
                    activeSuggestion,
                    onSuggestionItemClick,
                    onSuggestionItemHover
                  ) => {
                    const IconTag = Icon[item.icon ? item.icon : "X"];
                    return (
                      <li
                        className={classnames("suggestion-item", {
                          active: filteredData.indexOf(item) === activeSuggestion,
                        })}
                        key={i}
                        onClick={(e) => onSuggestionItemClick(item.link, e)}
                        onMouseEnter={() =>
                          onSuggestionItemHover(filteredData.indexOf(item))
                        }
                      >
                        <div
                          className={classnames({
                            "d-flex justify-content-between align-items-center":
                              item.file || item.img,
                          })}
                        >
                          <div className="item-container d-flex">
                            {item.icon ? (
                              <IconTag size={17} />
                            ) : item.file ? (
                              <img
                                src={item.file}
                                height="36"
                                width="28"
                                alt={item.title}
                              />
                            ) : item.img ? (
                              <img
                                className="rounded-circle mt-25"
                                src={item.img}
                                height="28"
                                width="28"
                                alt={item.title}
                              />
                            ) : null}
                            <div className="item-info ml-1">
                              <p className="align-middle mb-0">{item.title}</p>
                              {item.by || item.email ? (
                                <small className="text-muted">
                                  {item.by
                                    ? item.by
                                    : item.email
                                      ? item.email
                                      : null}
                                </small>
                              ) : null}
                            </div>
                          </div>
                          {item.size || item.date ? (
                            <div className="meta-container">
                              <small className="text-muted">
                                {item.size
                                  ? item.size
                                  : item.date
                                    ? item.date
                                    : null}
                              </small>
                            </div>
                          ) : null}
                        </div>
                      </li>
                    );
                  }}
                  onSuggestionsShown={(userInput) => {
                    if (navbarSearch) {
                      // props.handleAppOverlay(userInput);
                    }
                  }}
                /> */}
              </FormGroup>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
export default TopSearch
