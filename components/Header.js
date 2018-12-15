import React, { PureComponent } from "react"
import Link from "next/link"
import { GET_USER } from "../graphql/queries/user"
import { Query } from "react-apollo"

import { NavbarBrand, NavbarItem, NavbarLink, Icon, NavbarMenu } from "bloomer"
import Logo from "../components/SVG/Logo"
import BurgerIcon from "../components/SVG/BurgerIcon"

import {
    SmallHandset,
    Handset,
    LargeHandset,
    HandsetLandscape
} from "../styles/utils"

// const HeaderImage = styled(Image)`
//     height: 80px;
//     width: 150px;
//     transition: all 1s ease-in-out;
//     @media screen and (min-width: 769px) {
//         margin-left: 1rem;
//     }
//     @media screen and (max-width: 825px) {
//         height: 70px;
//         width: 130px;
//     }
//     @media screen and (max-width: 599px) {
//         height: 60px;
//         width: 112.5px;
//     }
//     @media screen and (max-width: 568px) {
//         height: 48px;
//         width: 90px;
//     }
//     @media screen and (max-width: 320px) {
//         height: 35px;
//         width: 65px;
//     }
// `

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            isMenuActive: false
        }
    }

    // async componentDidMount() {
    //     try {
    //         const info = await Auth.currentUserInfo()
    //         if (info && (info.attributes.sub !== process.env.DEFAULT_USERNAME)) {
    //             this
    //                 .props
    //                 .userHasAuthenticated(true)
    //         } else {
    //             this
    //                 .props
    //                 .userHasAuthenticated(false)
    //         }
    //     } catch (e) {
    //         this
    //             .props
    //             .userHasAuthenticated(false)
    //     }
    // }

    onClickBurger = () => {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        })
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
                                <HandsetLandscape>
                                    <Logo width="110" />
                                </HandsetLandscape>
                            </a>
                        </Link>
                    </NavbarItem>

                    <NavbarItem isHidden="desktop">
                        {isAuthenticated ? (
                            <User id={username} />
                        ) : (
                            <Link href="/authenticate" prefetch>
                                <NavbarLink className="is-arrowless userlogin has-text-primary is-size-7-mobile is-size-6-tablet">
                                    Вход пользователя
                                </NavbarLink>
                            </Link>
                        )}
                    </NavbarItem>

                    <NavbarItem className="burgericon" isHidden="desktop">
                        <BurgerIcon
                            height={60}
                            width={60}
                            isActive={this.state.isMenuActive}
                            onClickBurger={this.onClickBurger}
                        />
                    </NavbarItem>
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isMenuActive}>
                    <NavbarItem>
                        <Link href="/products" prefetch>
                            <NavbarLink className="is-arrowless">
                                Ассортимент
                            </NavbarLink>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/offers" prefetch>
                            <NavbarLink className="is-arrowless">
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
                            <NavbarLink className="is-arrowless">
                                Контакт
                            </NavbarLink>
                        </Link>
                    </NavbarItem>
                    <NavbarItem isHidden="touch">
                        {isAuthenticated ? (
                            <User id={username} />
                        ) : (
                            <Link href="/authenticate" prefetch>
                                <NavbarLink className="is-arrowless has-text-primary">
                                    Вход пользователя
                                </NavbarLink>
                            </Link>
                        )}
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

const User = ({ id }) => {
    return (
        <Query
            query={GET_USER}
            fetchPolicy="cache-and-network"
            errorPolicy="all"
            variables={{
                id
            }}>
            {({ loading, error, data }) => {
                if (loading)
                    return (
                        <Icon
                            className="fas fa-spinner fa-pulse"
                            isSize="large"
                        />
                    )
                if (error) {
                    return null
                }
                if (data) {
                    if (data.getUser.firstname) {
                        return (
                            <Link
                                href="/user"
                                prefetch
                                className="button is-outlined">
                                <span className="is-capitalized">
                                    Здравствуйте, {data.getUser.fisrtname}
                                </span>
                            </Link>
                        )
                    } else {
                        return (
                            <Link
                                href="/user"
                                prefetch
                                className="button is-outlined">
                                {data.getUser.email}
                            </Link>
                        )
                    }
                } else
                    return (
                        <Icon isSize="medium" className="fas fa-user fa-2x" />
                    )
            }}
        </Query>
    )
}

export default Header
