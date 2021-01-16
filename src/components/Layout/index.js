import React, { useState, useEffect } from "react";
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DashboardOutlined,
    LineChartOutlined,
} from '@ant-design/icons';
import Logo from '../../assests/VivSoftLogo.png';
import SmallLogo from '../../assests/SmallVivSoftLogo.png';

import './Layout.scss';

const { Header, Sider, Content } = Layout;
const { Item } = Menu;

const menuItems = [
    {
      key: '1',
      name: 'DASHBOARD',
      url: '/',
      selectedPaths: ['/'],
      icon: <DashboardOutlined />,
    },
    {
        key: '2',
        name: 'CHART',
        url: '/chart',
        selectedPaths: ['/chart'],
        icon: <LineChartOutlined />,
    }
];


const LayoutComponent = ({ children, match }) => {

    const [ collapsed, setCollapsed ] = useState(false);
    const [selectedItem, changeSelectedItem] = useState(['1']);

    useEffect(() => {
        const item = menuItems.find(i => i.selectedPaths.includes(match.path));
        if (item) changeSelectedItem([item.key]);
    }, [match.path]);

    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout>
            <Sider breakpoint="lg" collapsedWidth="80" trigger={null} collapsible collapsed={collapsed}>
                <div className={collapsed ? 'small-logo' : 'logo'}>
                    {collapsed ? <img src={SmallLogo} alt="logo" /> : <img src={Logo} alt="logo" />}
                </div>
                <Menu theme="dark" mode="inline" selectedKeys={selectedItem}>
                    {menuItems.map(item => (
                        <Item key={item.key} icon={item.icon}>
                            <Link to={item.url}>{item.name}</Link>
                        </Item>
                    ))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <div className="title-wrap">
                        <div className="title">VIVASOFT</div>
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;