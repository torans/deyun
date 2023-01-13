import {Col, Row, Space} from "antd";
import Image from "next/image";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t} = useTranslation();
    return (
        <div style={{background:"#1c1c1c",padding:"50px 0",color:"#b3b3b3"}}>
            <div style={{margin:"0 auto",width:"1200px"}}>
                <Row gutter={[16, 24]}>
                    <Col className="gutter-row" span={6}>
                        <div>
                            <Image src="/logo-white.png" alt="德云科技" width={200} height={40} priority/>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div>
                            <h2>{t('footer.contact')}</h2>
                            <div style={{lineHeight:2}}>
                                <p>{t('footer.company')}</p>
                                <p>{t('footer.tel')}：(+86)155 1907 6193</p>
                                <p>{t('footer.email')}：Contact@privacydaos.xyz</p>
                                <p>{t('footer.address')}：{t('footer.place')}</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{textAlign:"right"}}>
                            <Image src="/erweima.png" alt="德云科技" width={150} height={150} priority/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
