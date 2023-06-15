import React, { useState } from "react"
import { Layout, ConfigProvider, Switch } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Cookies from "js-cookie"
import { Navigate, Outlet } from "react-router-dom"
import Sidebar from "sidebar"


export const PrivateRoutes = () => {
      const data = Cookies.get("tocken") === undefined ? false : true
      
      return data ? (
            <React.Fragment>
                  <ConfigProvider
                  >
                        <Layout
                              style={{
                                    minHeight: '100vh',
                              }}
                        >
                              <Sidebar  />
                              <Layout className="site-layout">
                                    <Header
                                          style={{
                                                padding: 0,
                                                background: 'pink',
                                          }}

                                    >
                                         
                                    </Header>
                                    <Content
                                          style={{
                                                margin: '0 16px',
                                          }}
                                    >
                                          <div
                                                style={{
                                                      padding: 24,
                                                      minHeight: 360,

                                                }}
                                          >

                                                <Outlet />
                                          </div>
                                    </Content>
                                    <Footer
                                          style={{
                                                textAlign: 'center',
                                          }}
                                    >
                                          Ant Design ©2023 Created by Ant UED
                                    </Footer>
                              </Layout>
                        </Layout>
                  </ConfigProvider>
            </React.Fragment>
      ) : (<Navigate to="/login" />)
}