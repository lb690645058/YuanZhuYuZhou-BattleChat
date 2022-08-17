import React from "react";
import { Badge, NavBar, Tabs } from 'antd-mobile';
import HomePage from './HomePage'
import FiPage from '../fi/FiPage'

class TabPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabBarList: [
        {
          key: 'new',
          title: '房间',
          badge: '66+',
          page: <HomePage/>
        },
        {
          key: 'fi',
          title: '好友',
          badge: '',
          page: <FiPage/>
        },
        {
          key: 'my',
          title: '我的',
          badge: '',
          page: <div>
            <div><span>AR人物模型设计中，敬请期待...</span></div>
            <div><span>决斗任务模型配置中心</span></div>
            <div><span>礼物中心</span></div>
            <div><span>订单中心</span></div>
          </div>
        },
      ],
      tabBarKey: 'new'
    }
    this.setRouteActive = this.setRouteActive.bind(this);
  }
  componentDidMount(){
  }
  setRouteActive(val){
    this.setState({
      tabBarKey: val
    })
  }
  render() {
    const { tabBarList, tabBarKey } = this.state;
    return (
      <div>
        <Tabs activeKey={tabBarKey} onChange={value => this.setRouteActive(value)}>
          {
            tabBarList.map((item, index) => {
              return <Tabs.Tab key={item.key} title={<Badge content={item.badge}>{item.title}</Badge>} forceRender>
                {
                  item['page']
                }
              </Tabs.Tab>
            })
          }
        </Tabs>
      </div>
    );
  }
}

export default TabPage;