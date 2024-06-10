import React from "react"
import styles from './Footer.module.css';
import { Layout, Typography} from 'antd';

export const Footer: React.FC = () => {
    return (
        <Layout.Footer>
          <Typography.Title className={styles["main-footer"]}level={3}>Copyright @ React Travel.com</Typography.Title>
        </Layout.Footer>
    )
}