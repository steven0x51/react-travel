import React from "react";
import styles from "./Header.module.css"
import logo from '../../assets/logo.svg';
import { Layout, Typography, Input, Menu, Button, Dropdown, MenuProps, message } from 'antd';
import { GlobalOutlined } from "@ant-design/icons";

const menuProps: MenuProps = {
    items: [
      {label: 'EN', key: '1'},
      {label: 'CH', key: '2'},
    ],
  };
  
  type MenuItem = Required<MenuProps>['items'][number];
  const mainMenuContent: MenuItem[] = [
    {key: 1, label: "Home Page"},
    {key: 2, label: "Weekend"},
    {key: 3, label: "Group"},
    {key: 4, label: "Cruises"},
    {key: 5, label: "Study Aboard"},
    {key: 6, label: "VISA"},
    {key: 7, label: "Team Buiding"},
    {key: 8, label: "Insurance"},
  ];

export const Header: React.FC = () => {
    return (
        <div className={styles['app-header']}>
        {/* top header */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text> Travel is happy</Typography.Text>
            <Dropdown.Button className={styles['language-dropdown']} menu={menuProps} icon={<GlobalOutlined />} trigger={['click']}>
              Language
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button>Sign Up</Button>
              <Button>Sign In</Button>
            </Button.Group>
          </div>
        </div>

        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="logo" className={styles['App-logo']}/>
          <Typography.Title className={styles['title']} level={3}> React Travel </Typography.Title>
          <Input.Search className={styles['search-input']} placeholder={'Enter your destination'} />
        </Layout.Header>

        <Menu className={styles['main-menu']} mode={"horizontal"} items={mainMenuContent} />
      </div>
    )
};