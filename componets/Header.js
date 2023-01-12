import React, {useState} from 'react';
import {Col, Row, Menu, Select} from 'antd';
import Image from "next/image";
import i18n from "i18next";
import {useTranslation} from "react-i18next";


export default function Header() {
    const {t} = useTranslation();

    const items = [
        {
            label: (
                <a href="/" rel="noopener noreferrer">
                    {t("header.index")}
                </a>
            ),
            key: 'index',
        }, {
            label: (
                <a href="#product" rel="noopener noreferrer">
                    {t("header.product")}
                </a>
            ),
            key: 'product',
        }, {
            label: (
                <a href="#technology" rel="noopener noreferrer">
                    {t("header.technology")}
                </a>
            ),
            key: 'technology',
        }, {
            label: (
                <a href="#company" rel="noopener noreferrer">
                    {t("header.company")}
                </a>
            ),
            key: 'company',
        }, {
            label: (
                <a href="#contact" rel="noopener noreferrer">
                    {t("header.contact")}
                </a>
            ),
            key: 'contact',
        }
    ];

    const [current, setCurrent] = useState('index');
    const [language, setLanguage] = useState('zh-CN')

    function changeTheLanguage(e) {
        setLanguage(e)
        i18n.changeLanguage(e)
    }

    const onClick = (e) => {
        setCurrent(e.key);
    }
    return <div style={{background: 'white', width: "0 100px"}}>
        <div style={{width: "1200px", margin: "0 auto"}}>
            <Row>
                <Col span={4}>
                    <div
                        style={{
                            width: '200px',
                            paddingTop: "7px"
                        }}
                    >
                        <Image src="/logo.png" alt="德云科技" width={200} height={34} priority/>
                    </div>
                </Col>
                <Col span={12}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
                </Col>
                <Col span={8}>
                    <div style={{textAlign: "end", color: "black", marginTop: "10px"}}>
                        {t("changeLng")}
                        <Select
                            defaultValue={language}
                            bordered={false}
                            style={{width: 100,color:"white"}}
                            onChange={changeTheLanguage}
                        >
                            <Select.Option value="zh-CN">中文简体</Select.Option>
                            <Select.Option value="en-US">English</Select.Option>
                        </Select>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
}
