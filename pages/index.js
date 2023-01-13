import Head from 'next/head'
import Image from 'next/image'
// import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'
import {Card, Col, Row} from "antd";
import React from "react";
import {useTranslation} from "react-i18next";

// const inter = Inter({subsets: ['latin']})

export default function Home() {
    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>{t("title")}</title>
                <meta name="description" content="德云科技"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                {/*banner*/}
                <div className={styles.block1}>
                    <div className={styles.container}>
                        <Row>
                            <Col span={24} xl={24}>
                                <p style={{fontSize: "50px", fontWeight: "bolder"}}>PrivacyDAOs</p>
                                <br/>
                                <p style={{fontSize: "80px", fontWeight: "bolder"}}>{t('content.banner.title')}</p>
                                <br/>
                                <p style={{fontSize: "30px"}}>{t('content.banner.subTitle')}</p>
                            </Col>
                            {/*<Col span={12} xl={10}>*/}
                            {/*    <div style={{textAlign: "center",marginTop:"50px"}}>*/}
                            {/*        <Image src="/privahub.png?1" alt="德云科技" width={600} height={150} priority/>*/}
                            {/*    </div>*/}
                            {/*</Col>*/}
                        </Row>
                    </div>
                </div>
                {/*产品介绍*/}
                <div style={{background:"white"}} id="product">
                    <div className={styles.container}>
                        <div className={styles.about} style={{padding:"100px 0"}}>
                            <h1 style={{textAlign:"center",marginBottom:"50px"}}>{t("content.product.title")}</h1>
                            <p  className={styles.description} style={{lineHeight:"40px"}}>{t('content.product.content')}</p>
                        </div>
                    </div>
                </div>
                {/*核心技术*/}
                <div className={styles.container} id="technology">
                    <div className={styles.techlonogy} style={{padding:"100px 0"}}>
                        <h1 style={{textAlign:"center",marginBottom:"50px"}}>{t("content.technology.title")}</h1>
                        <Row>
                            <Col flex={1}>
                                <Card bordered={true} style={{width:"220px",height:"300px"}}  title={t("content.technology.content.a.title")} >
                                    {t("content.technology.content.a.content")}
                                </Card>
                            </Col>
                            <Col flex={1}>
                                <Card bordered={true} style={{width:"220px",height:"300px"}}  title={t("content.technology.content.b.title")} >
                                    {t("content.technology.content.b.content")}
                                </Card>
                            </Col>
                            <Col flex={1}>
                                <Card bordered={true} style={{width:"220px",height:"300px"}}  title={t("content.technology.content.c.title")} >
                                    {t("content.technology.content.c.content")}
                                </Card>
                            </Col>
                            <Col flex={1}>
                                <Card bordered={true} style={{width:"220px",height:"300px"}}  title={t("content.technology.content.d.title")} >
                                    {t("content.technology.content.d.content")}
                                </Card>
                            </Col>
                            <Col flex={1}>
                                <Card bordered={true} style={{width:"220px",height:"300px"}}  title={t("content.technology.content.e.title")} >
                                    {t("content.technology.content.e.content")}
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/*公司介绍*/}
                <div style={{background:"white"}} id="company">
                    <div className={styles.container}>
                        <div className={styles.about} style={{padding:"100px 0"}}>
                            <h1 style={{textAlign:"center",marginBottom:"50px"}}>{t("content.company.title")}</h1>
                            <div className={styles.description} >
                                <ul>
                                    <li style={{paddingBottom:"20px"}}>{t("content.company.content.0")}</li>
                                    <li style={{paddingBottom:"20px"}}>{t("content.company.content.1")}</li>
                                    <li style={{paddingBottom:"20px"}}>{t("content.company.content.2")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*合作伙伴*/}
                <div style={{background:"#000000"}} id="contact">
                    <div className={styles.container}>
                        <div className={styles.partners} style={{padding:"30px 0"}}>
                            <h1 style={{textAlign:"center",marginBottom:"50px",color:"white"}}>{t("content.partners.title")}</h1>
                            <div className={styles.description} >
                                <Row gutter={40}>
                                    <Col className="gutter-row" span={4}>
                                        <div >
                                            <Image src="/partners/gzgd.png" alt="德云科技" width={200} height={80} priority/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div >
                                            <Image src="/partners/ifree.png" alt="德云科技" width={200} height={80} priority/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div  style={{marginTop:"20px"}}>
                                            <Image src="/partners/gjjt.png" alt="德云科技" width={150} height={40} priority/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div style={{marginTop:"20px"}}>
                                            <Image src="/partners/lmxx.png" alt="德云科技" width={150} height={40} priority/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div style={{marginTop:"20px"}}>
                                            <Image src="/partners/wyyx.png" alt="德云科技" width={150} height={40} priority/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={4}>
                                        <div style={{marginTop:"20px"}}>
                                            <Image src="/partners/dcgz.png" alt="德云科技" width={150} height={40} priority/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
