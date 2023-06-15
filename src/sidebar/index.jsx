import React, { useState } from 'react';
import {
      FileOutlined,
      PieChartOutlined,
      UserOutlined,
      DesktopOutlined,
      TeamOutlined,
      UserAddOutlined
} from '@ant-design/icons';
import { Layout, Menu, Switch, theme } from 'antd';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
function getItem(label, key, icon, children) {
      return {
            key,
            icon,
            children,
            label,
      };
}
const items = [
      {
            label: <NavLink
                  to={"/home"}>
                  Home
            </NavLink>,
            Icon: <UserAddOutlined />,
      },
      {
            label: <NavLink
                  to={"/userget"}>
                  Users
            </NavLink>,
            Icon: <UserAddOutlined />,
      },
];
const Sidebar = () => {
      const [collapsed, setCollapsed] = useState(false);
      const [theme, setTheme] = useState('dark');
      const [current, setCurrent] = useState('1');
      const changeTheme = (value) => {
            setTheme(value ? 'dark' : 'light');
      };
      const onClick = (e) => {
            console.log('click ', e);
            setCurrent(e.key);
      };
      // const {
      //       token: { colorBgContainer },
      // } = theme.useToken();
      return (

            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                  <div
                        style={{
                              height: 32,
                              margin: 16,
                              background: 'rgba(255, 255, 255, 0.2)',
                        }}
                  />
                  <Switch
                        size="small"
                        checked={theme === 'dark'}
                        onChange={changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                  />
                  <Menu
                        theme={theme}
                        onClick={onClick}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={items}
                        selectedKeys={[current]}
                  />
            </Sider>
      );
};
export default Sidebar;