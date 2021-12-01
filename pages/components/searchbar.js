import React from 'react';
import { Tabs,Select,InputNumber  } from 'antd';
const { TabPane } = Tabs;
const axios = require('axios')
const { Option, OptGroup } = Select;



function onChange(value) {
    console.log(`selected ${value}`);
  }

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
function callback(key) {
  console.log(key);
}

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PropertyProfile:"",
            location:"",    
            type:{},
            min:0,
            max:0,
        };
        this.onlocChange = this.onlocChange.bind(this) 
        this.typeChange = this.typeChange.bind(this)
        this.minChange = this.minChange.bind(this)
        this.maxChange = this.maxChange.bind(this)
        this.ontabchange=this.ontabchange.bind(this)
        this.search = this.search.bind(this) 
    }
    onlocChange(value) {
        console.log(`selected ${value}`)
        this.setState({ location: value.toString() })  
    }

    typeChange(value) {
        this.setState({ type: value.toString() })
    }
    minChange(value) {
        this.setState({ min: parseInt(value) })
    }   
    maxChange(value) {
        this.setState({ max: parseInt(value) })
    }
    ontabchange(activekey){
        this.setState({ PropertyProfile: activekey.toString() })
        console.log(this.state.PropertyProfile)
    }
    
    search(){
// Make a request for a user with a given ID
console.log(this.state)
axios({method: 'get', 
url:'http://localhost:5000/data/specificProperties',
data:{
    apartmentType:this.state.type,
    address:this.state.location,
    min:this.state.min,
    max:this.state.max,
    propertyProfile:this.state.PropertyProfile
}})
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }
        render(){


              return (
                <div>
                <div className="resizable " style={{zIndex:'9999'}}>
                    <Tabs defaultActiveKey="1"
                        className="searchtab"
                         onChange={this.ontabchange}>
                        <TabPane   tab="Buy" key="sell">
                            
                                <Select
                                    showSearch
                                    className="searchinput"
                                    placeholder="Select a location"
                                    optionFilterProp="children"
                                    onChange={this.onlocChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="miraroad">miraroad</Option>
                                </Select>

                                <Select
                                    showSearch
                                    className="searchinput"
                                    // value={value}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="Type of property"
                                    allowClear
                                    onChange={this.typeChange}
                                    >
                                    <OptGroup  label="Residential">
                                        <Option value="bungalow">Bungalow</Option>
                                        <Option value="duplex">Duplex</Option>
                                        <Option value="farm House">Farm House</Option>
                                        <Option value="independent Villa">Independent Villa</Option>
                                        <Option value="residentialapartment">Residential Apartment</Option>
                                        <Option value="studio Apartment">Studio Apartment</Option>
                                    </OptGroup>
                                    <OptGroup label="Commercial">
                                        <Option value="shop">Shop</Option>
                                        <Option value="office">office</Option>
                                        <Option value="warehouse">warehouse</Option>
                                    </OptGroup>
                                </Select>


                                <Select label="Budget" id="budget" placeholder="Minimum" onChange={this.minChange}>
                                    <Option value="500000">5lac</Option>
                                    <Option value="1000000">10lac</Option>
                                    <Option value="2000000">20lac</Option>
                                    <Option value="3000000">30lac</Option>
                                    <Option value="4000000">40lac</Option>
                                    <Option value="5000000">50lac</Option>
                                    <Option value="6000000">60lac</Option>
                                    <Option value="7000000">70lac</Option>
                                    <Option value="8000000">80lac</Option>
                                    <Option value="10000000">1cr</Option>
                                    <Option value="20000000">2cr</Option>
                                    <Option value="30000000">3cr</Option>
                                    <Option value="40000000">4cr</Option>
                                    <Option value="50000000">5cr</Option>
                                </Select>
                                <Select placeholder="Maximum" onChange={this.maxChange}>
                                <Option value="500000">5lac</Option>
                                    <Option value="1000000">10lac</Option>
                                    <Option value="2000000">20lac</Option>
                                    <Option value="3000000">30lac</Option>
                                    <Option value="4000000">40lac</Option>
                                    <Option value="5000000">50lac</Option>
                                    <Option value="6000000">60lac</Option>
                                    <Option value="7000000">70lac</Option>
                                    <Option value="8000000">80lac</Option>
                                    <Option value="10000000">1cr</Option>
                                    <Option value="20000000">2cr</Option>
                                    <Option value="30000000">3cr</Option>
                                    <Option value="40000000">4cr</Option>
                                    <Option value="50000000">5cr</Option>
                                </Select>
                                    
                                 <button onClick={this.search} className="searchbutton">Search</button>
                            
                        </TabPane>
                        <TabPane tab="Rent" key="rent">
                        <Select
                                    showSearch
                                    className="searchinput"
                                    placeholder="Select a location"
                                    optionFilterProp="children"
                                    onChange={this.onlocChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                </Select>

                                <Select
                                    showSearch
                                    className="searchinput"
                                    // value={value}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="Type of property"
                                    allowClear
                                    onChange={onChange}
                                    >
                                    <OptGroup  label="Residential">
                                        <Option value="bungalow">Bungalow</Option>
                                        <Option value="duplex">Duplex</Option>
                                        <Option value="farm House">Farm House</Option>
                                        <Option value="independent Villa">Independent Villa</Option>
                                        <Option value="residential Apartment">Residential Apartment</Option>
                                        <Option value="studio Apartment">Studio Apartment</Option>
                                    </OptGroup>
                                    <OptGroup label="Commercial">
                                        <Option value="shop">Shop</Option>
                                        <Option value="office">office</Option>
                                        <Option value="warehouse">warehouse</Option>
                                    </OptGroup>
                                </Select>

                                <Select label="Budget" id="budget" placeholder="Minimum">
                                    <Option value="500000">5lac</Option>
                                    <Option value="1000000">10lac</Option>
                                    <Option value="2000000">20lac</Option>
                                    <Option value="3000000">30lac</Option>
                                    <Option value="4000000">40lac</Option>
                                    <Option value="5000000">50lac</Option>
                                    <Option value="6000000">60lac</Option>
                                    <Option value="7000000">70lac</Option>
                                    <Option value="8000000">80lac</Option>
                                    <Option value="10000000">1cr</Option>
                                    <Option value="20000000">2cr</Option>
                                    <Option value="30000000">3cr</Option>
                                    <Option value="40000000">4cr</Option>
                                    <Option value="50000000">5cr</Option>
                                </Select>
                                <Select placeholder="Maximum">
                                <Option value="500000">5lac</Option>
                                    <Option value="1000000">10lac</Option>
                                    <Option value="2000000">20lac</Option>
                                    <Option value="3000000">30lac</Option>
                                    <Option value="4000000">40lac</Option>
                                    <Option value="5000000">50lac</Option>
                                    <Option value="6000000">60lac</Option>
                                    <Option value="7000000">70lac</Option>
                                    <Option value="8000000">80lac</Option>
                                    <Option value="10000000">1cr</Option>
                                    <Option value="20000000">2cr</Option>
                                    <Option value="30000000">3cr</Option>
                                    <Option value="40000000">4cr</Option>
                                    <Option value="50000000">5cr</Option>
                                </Select>
                                    
                                 <button className="searchbutton">Search</button>
                        </TabPane>
                        <TabPane tab="PG" key="pg">
                        <Select
                                    showSearch
                                    className="searchinput"
                                    placeholder="Select a location"
                                    optionFilterProp="children"
                                    onChange={this.onlocChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                </Select>

                                <Select
                                    showSearch
                                    className="searchinput"
                                    // value={value}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="Type of property"
                                    allowClear
                                    onChange={onChange}
                                    >
                                    <OptGroup  label="Residential">
                                        <Option value="bungalow">Bungalow</Option>
                                        <Option value="duplex">Duplex</Option>
                                        <Option value="farm House">Farm House</Option>
                                        <Option value="independent Villa">Independent Villa</Option>
                                        <Option value="residential Apartment">Residential Apartment</Option>
                                        <Option value="studio Apartment">Studio Apartment</Option>
                                    </OptGroup>
                                    <OptGroup label="Commercial">
                                        <Option value="shop">Shop</Option>
                                        <Option value="office">office</Option>
                                        <Option value="warehouse">warehouse</Option>
                                    </OptGroup>
                                </Select>


                                <Select label="Budget" id="budget" placeholder="Minimum">
                                    <Option value="500000">5lac</Option>
                                    <Option value="1000000">10lac</Option>
                                    <Option value="2000000">20lac</Option>
                                    <Option value="3000000">30lac</Option>
                                    <Option value="4000000">40lac</Option>
                                    <Option value="5000000">50lac</Option>
                                    <Option value="6000000">60lac</Option>
                                    <Option value="7000000">70lac</Option>
                                    <Option value="8000000">80lac</Option>
                                    <Option value="10000000">1cr</Option>
                                    <Option value="20000000">2cr</Option>
                                    <Option value="30000000">3cr</Option>
                                    <Option value="40000000">4cr</Option>
                                    <Option value="50000000">5cr</Option>
                                </Select>
                                <Select placeholder="Maximum">
                                <Option value="500000">5lac</Option>
                                    <Option value="1000000">10lac</Option>
                                    <Option value="2000000">20lac</Option>
                                    <Option value="3000000">30lac</Option>
                                    <Option value="4000000">40lac</Option>
                                    <Option value="5000000">50lac</Option>
                                    <Option value="6000000">60lac</Option>
                                    <Option value="7000000">70lac</Option>
                                    <Option value="8000000">80lac</Option>
                                    <Option value="10000000">1cr</Option>
                                    <Option value="20000000">2cr</Option>
                                    <Option value="30000000">3cr</Option>
                                    <Option value="40000000">4cr</Option>
                                    <Option value="50000000">5cr</Option>
                                </Select>
                                    
                                 <button className="searchbutton">Search</button>
                        </TabPane>
                        <TabPane tab="Commercial" key="commercial">
                                                            <Select
                                    showSearch
                                    className="searchinput"
                                    placeholder="Select a location"
                                    optionFilterProp="children"
                                    onChange={this.onlocChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="jack">Jack</Option>
                                </Select>

                                <Select
                                    showSearch
                                    className="searchinput"
                                    // value={value}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="Type of property"
                                    allowClear
                                    onChange={onChange}
                                    >
                                    <OptGroup  label="Residential">
                                        <Option value="bungalow">Bungalow</Option>
                                        <Option value="duplex">Duplex</Option>
                                        <Option value="farm House">Farm House</Option>
                                        <Option value="independent Villa">Independent Villa</Option>
                                        <Option value="residential Apartment">Residential Apartment</Option>
                                        <Option value="studio Apartment">Studio Apartment</Option>
                                    </OptGroup>
                                    <OptGroup label="Commercial">
                                        <Option value="shop">Shop</Option>
                                        <Option value="office">office</Option>
                                        <Option value="warehouse">warehouse</Option>
                                    </OptGroup>
                                </Select>


                                <Select label="Budget" id="budget" placeholder="Minimum">
                                    <Option value="500000">5lac</Option>
                                    <Option value="1000000">10lac</Option>
                                    <Option value="2000000">20lac</Option>
                                    <Option value="3000000">30lac</Option>
                                    <Option value="4000000">40lac</Option>
                                    <Option value="5000000">50lac</Option>
                                    <Option value="6000000">60lac</Option>
                                    <Option value="7000000">70lac</Option>
                                    <Option value="8000000">80lac</Option>
                                    <Option value="10000000">1cr</Option>
                                    <Option value="20000000">2cr</Option>
                                    <Option value="30000000">3cr</Option>
                                    <Option value="40000000">4cr</Option>
                                    <Option value="50000000">5cr</Option>
                                </Select>
                                <Select placeholder="Maximum">
                                <Option value="500000">5lac</Option>
                                    <Option value="1000000">10lac</Option>
                                    <Option value="2000000">20lac</Option>
                                    <Option value="3000000">30lac</Option>
                                    <Option value="4000000">40lac</Option>
                                    <Option value="5000000">50lac</Option>
                                    <Option value="6000000">60lac</Option>
                                    <Option value="7000000">70lac</Option>
                                    <Option value="8000000">80lac</Option>
                                    <Option value="10000000">1cr</Option>
                                    <Option value="20000000">2cr</Option>
                                    <Option value="30000000">3cr</Option>
                                    <Option value="40000000">4cr</Option>
                                    <Option value="50000000">5cr</Option>
                                </Select>
                                    
                                 <button className="searchbutton">Search</button>
                        </TabPane>
                    </Tabs>
            </div>
                </div>
                )
            }        
        }
        export default Searchbar;