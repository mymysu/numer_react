import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import './index.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
    LaptopOutlined,
    FireOutlined,
    SmileOutlined,
    MehOutlined,
} from '@ant-design/icons'
//root
import Bisection from './pages/RootOf/Bisection'
import FalsePosition from './pages/RootOf/FalsePosition'
import NewtonRphson from './pages/RootOf/NewtonRphson'
import OnePoin from './pages/RootOf/OnePoin'
import Secant from './pages/RootOf/Secant'
//regression
import Linear from './pages/Regression/Linear'
import Multiple from './pages/Regression/Multiple'
import Polynomial from './pages/Regression/Polynomial'
//interpolation
import Lagrange from './pages/Interpolation/Lagrange'
import Newton from './pages/Interpolation/Newton'
import Spline from './pages/Interpolation/Spline'
//linear
import Conjugate from './pages/linear/Conjugate'
import Cramer from './pages/linear/Cramer'
import Elimination from './pages/linear/Elimination'
import Jacobi from './pages/linear/Jacobi'
import Jordan from './pages/linear/Jordan'
import Lu from './pages/linear/Lu'
import Seidel from './pages/linear/Seidel'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function App() {
    return (
        <Router>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <h2
                        style={{
                            color: 'white',
                            marginTop: '10px',
                            textAlign: 'center',
                        }}
                    >
                        Numerical Method
                    </h2>
                </Header>
                <Layout>
                    <Sider width={300} className="site-layout-background">
                        <Menu
                        theme='dark'
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="RootOf"
                                icon={<SmileOutlined />}
                                title="Root of Equation"
                            >
                                <Menu.Item key="1">
                                    <NavLink
                                        to="/Bisection"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Bisection Method
                                    </NavLink>
                                </Menu.Item>

                                <Menu.Item key="2">
                                    <NavLink
                                        to="/FalsePosition"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        False-Position Method
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <NavLink
                                        to="/OnePoin"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        One-Poin Iteration Method
                                    </NavLink>
                                </Menu.Item>

                                <Menu.Item key="5">
                                    <NavLink
                                        to="/NewtonRphson"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Newton-Rphson Method
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <NavLink
                                        to="/Secant"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Secant Method
                                    </NavLink>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="linear"
                                icon={<LaptopOutlined />}
                                title="System of linear equations"
                            >
                                <Menu.Item key="7">
                                    <NavLink
                                        to="/Cramer"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Cramer's Rule
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <NavLink
                                        to="/Elimination"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Gaussian Elimination Method
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <NavLink
                                        to="/Jordan"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Gauss-Jordan Method
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="10">
                                    <NavLink
                                        to="/Lu"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Lu Decomposition Method
                                    </NavLink>
                                </Menu.Item>

                                <Menu.Item key="12">
                                    <NavLink
                                        to="/Jacobi"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Jacobi Iteration Method
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="13">
                                    <NavLink
                                        to="/Seidel"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Gauss-Seidel Iteration Method
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="14">
                                    <NavLink
                                        to="/Conjugate"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Conjugate Gradient Method
                                    </NavLink>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="Interpolation"
                                icon={<FireOutlined />}
                                title="Interpolation And Extrapolation"
                            >
                                <Menu.Item key="16">
                                    <NavLink
                                        to="/Newton"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Newton's Divided-Difference
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="17">
                                    <NavLink
                                        to="/Lagrange"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Lagrange Polynomial
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="18">
                                    <NavLink
                                        to="/Spline"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Spline Interpolation
                                    </NavLink>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="Regression"
                                icon={<MehOutlined />}
                                title="Least Squares Regression"
                            >
                                <Menu.Item key="19">
                                    <NavLink
                                        to="/Linear"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Linear regression
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="20">
                                    <NavLink
                                        to="/Polynomial"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Polynomial Regression
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="21">
                                    <NavLink
                                        to="/Multiple"
                                        activeClassName="your-active-class"
                                        className="link"
                                    >
                                        Multiple Linear Regression
                                    </NavLink>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout >
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 500,
                                backgroundColor:'green',
                                // textAlign:'center',

                            }}
                        >
                            <Switch>
                                {/* Root of Equation */}

                                <Route path="/Bisection">
                                    <Bisection />
                                </Route>

                                <Route path="/FalsePosition">
                                    <FalsePosition />
                                </Route>
                                <Route path="/NewtonRphson">
                                    <NewtonRphson />
                                </Route>
                                <Route path="/Secant">
                                    <Secant />
                                </Route>
                                <Route path="/OnePoin">
                                    <OnePoin />
                                </Route>
                                <Route path="/Linear">
                                    <Linear />
                                </Route>
                                <Route path="/Multiple">
                                    <Multiple />
                                </Route>
                                <Route path="/Polynomial">
                                    <Polynomial />
                                </Route>
                                <Route path="/Lagrange">
                                    <Lagrange />
                                </Route>
                                <Route path="/Newton">
                                    <Newton />
                                </Route>
                                <Route path="/Spline">
                                    <Spline />
                                </Route>

                                <Route path="/Conjugate">
                                    <Conjugate />
                                </Route>
                                <Route path="/Cramer">
                                    <Cramer />
                                </Route>
                                <Route path="/Elimination">
                                    <Elimination />
                                </Route>
                                <Route path="/Jacobi">
                                    <Jacobi />
                                </Route>
                                <Route path="/Jordan">
                                    <Jordan />
                                </Route>
                                <Route path="/Lu">
                                    <Lu />
                                </Route>

                                <Route path="/Seidel">
                                    <Seidel />
                                </Route>

                                {/* <Route
                                    exact
                                    path="/Seidel"
                                    component={Seidel}
                                /> */}
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </Router>
    )
}
export default App
