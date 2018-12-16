import React, { Component } from "react"
import Link from "next/link"
import withData from "../withData"
import { Query } from "react-apollo"

import { NavbarBrand, NavbarItem, NavbarLink, NavbarMenu, Icon } from "bloomer"
import Logo from "../components/SVG/Logo"
import BurgerIcon from "../components/SVG/BurgerIcon"
import GET_USER from "../graphql/queries/user"

import {
    SmallHandset,
    Handset,
    LargeHandset,
    HandsetLandscape,
    Tablet,
    Laptop
} from "../styles/utils"

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isMenuActive: false
        }
    }

    onToggleMenu = () => {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        })
    }

    onCloseMenu = () => {
        if (this.state.isMenuActive) this.setState({ isMenuActive: false })
    }

    render() {
        const { isAuthenticated, username } = this.props
        return (
            <nav className="navbar is-fixed-top">
                <NavbarBrand>
                    <NavbarItem className="logo" isHidden="desktop">
                        <Link prefetch href="/">
                            <a>
                                <SmallHandset>
                                    <Logo width="70" />
                                </SmallHandset>
                                <Handset>
                                    <Logo width="90" />
                                </Handset>
                                <LargeHandset>
                                    <Logo width="110" />
                                </LargeHandset>
                                <HandsetLandscape>
                                    <Logo width="110" />
                                </HandsetLandscape>
                                <Tablet>
                                    <Logo width="150" />
                                </Tablet>
                                <Laptop>
                                    <Logo width="160" />
                                </Laptop>
                            </a>
                        </Link>
                    </NavbarItem>

                    <NavbarItem isHidden="desktop">
                        {isAuthenticated ? (
                            <User id={username} />
                        ) : (
                            <Login />
                        )}
                    </NavbarItem>

                    <NavbarItem className="burgericon" isHidden="desktop">
                        <BurgerIcon
                            height={60}
                            width={60}
                            isActive={this.state.isMenuActive}
                            onToggleMenu={this.onToggleMenu}
                        />
                    </NavbarItem>
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isMenuActive}>
                    <NavbarItem>
                        <Link href="/products" prefetch>
                            <NavbarLink
                                onClick={this.onCloseMenu}
                                className="is-arrowless">
                                Ассортимент
                            </NavbarLink>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/offers" prefetch>
                            <NavbarLink
                                onClick={this.onCloseMenu}
                                className="is-arrowless">
                                Спецпредложения
                            </NavbarLink>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isHidden="touch">
                        <Link href="/" prefetch>
                            <NavbarLink className="is-arrowless">
                                <Logo width="150" />
                            </NavbarLink>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/contact" prefetch>
                            <NavbarLink
                                onClick={this.onCloseMenu}
                                className="is-arrowless">
                                Контакт
                            </NavbarLink>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isHidden="touch">
                        {isAuthenticated ? <User id={username} /> : <Login />}
                    </NavbarItem>
                </NavbarMenu>
                <style jsx global>
                    {`
                        .navbar {
                            transition: all 1s ease-in-out;
                            max-width: 1600px;
                            margin: 0 auto;
                            background-color: rgba(255, 255, 255, 0.5);
                        }
                        .navbar-menu {
                            justify-content: space-evenly;
                        }
                        .navbar-brand {
                            justify-content: space-between !important;
                        }
                        .burgericon {
                            transition: all 1s ease-in-out;
                            cursor: pointer;
                        }
                        .logo {
                            transition: all 1s ease-in-out;
                            justify-conent: center;
                        }
                        .userlogin {
                            transition: all 1s ease-in-out;
                            word-break: break-word;
                            text-align: center;
                        }
                        @media all and (max-width: 360px) {
                            .userlogin {
                                max-width: 110px;
                            }
                        }
                    `}
                </style>
            </nav>
        )
    }
}

const User = id => {
    return (
        <Query
            query={GET_USER}
            variables={id}
            fetchPolicy="cache-and-network"
            errorPolicy="all">
            {({ loading, error, data }) => {
                if (loading)
                    return (
                        <Icon
                            className="fas fa-spinner fa-pulse"
                            isSize="large"
                        />
                    )
                if (error) {
                    console.error(error)
                    return <Login />
                }
                if (data.getUser) {
                    return (
                        <Link href="/user" prefetch>
                            {data.getUser.firstname ? (
                                <a className="is-capitalized">
                                    Здравствуйте, {data.getUser.fisrtname}
                                </a>
                            ) : (
                                <a>{data.getUser.email}</a>
                            )}
                        </Link>
                    )
                } else {
                    return <Login />
                }
            }}
        </Query>
    )
}

const Login = () => (
    <Link href="/authenticate" prefetch>
        <NavbarLink className="is-arrowless userlogin has-text-primary is-size-7-mobile is-size-6-tablet">
            Вход пользователя
        </NavbarLink>
    </Link>
)

export default withData(Header)
