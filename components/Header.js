import React, { PureComponent } from 'react'
import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { GET_USER } from '../graphql/queries/user'
import { Query } from 'react-apollo'

import { NavbarBrand, NavbarItem, NavbarEnd, Image, Icon } from 'bloomer'
import styled from 'styled-components'
import Logo from '../static/logos/logo.svg'
import BurgerIcon from '../components/SVG/BurgerIcon'

const StyledNavbar = styled.nav`
    max-width: 1600px;
    margin: 0 auto;
    background-color: rgba(255,255,255,.5);
`
const StyledNavbarBrand = styled(NavbarBrand)`
    justify-content: space-between;
    .navbar-item {
        justify-conent: center;
    }
`
const UserLogin = styled(NavbarItem)`
    span.icon {
        width: 60px !important;
    }
    word-break: break-word;
`
const HeaderImage = styled(Image)`
    height: 80px;
    width: 150px;
    transition: all 1s ease-in-out;
    @media screen and (min-width: 769px) {
        margin-left: 1rem;
    }
    @media screen and (max-width: 825px) {
        height: 70px;
        width: 130px;
    }
    @media screen and (max-width: 599px) {
        height: 60px;
        width: 112.5px;
    }
    @media screen and (max-width: 568px) {
        height: 48px;
        width: 90px;
    }
    @media screen and (max-width: 320px) {
        height: 35px;
        width: 65px;
    }
`
const StyledNavbarItem = styled(NavbarItem)`
    flex-grow: 1;
    justify-content: flex-end;
    span.icon {
        transition: all 1s ease-in-out;
    }
    @media screen and (max-width: 320px) {
        padding: 0.5rem;
    }
`
const Burger = styled(NavbarItem)`
    cursor: pointer;
`

export default class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isMenuActive: false
        };
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
            <StyledNavbar className="navbar is-fixed-top">
                <StyledNavbarBrand>
                    <NavbarItem>
                        <Link href="/"><Logo width="150" height="80" /></Link>
                    </NavbarItem>
                    <UserLogin isHidden="desktop">
                        {isAuthenticated
                            ? <Link href="/user"><User id={username} /></Link>
                            : <Link href="/about">
                                <span className="is-size-7">Вход пользователя</span>
                            </Link>
                        }
                    </UserLogin>
                    <Burger isHidden="desktop">
                        <BurgerIcon
                            isActive={this.state.isMenuActive}
                            onClickBurger={this.onClickBurger}
                        />
                    </Burger>
                </StyledNavbarBrand>
                <NavbarEnd>
                    <NavbarItem isHidden="touch"></NavbarItem>
                </NavbarEnd>
            </StyledNavbar>
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
                    return (<Icon className="fas fa-spinner fa-pulse" isSize="large" />)
                if (error) {
                    return null
                }
                if (data) {
                    if (data.getUser.firstname) {
                        return (
                            <span className="is-size-7 is-capitalized">
                                Здравствуйте, {data.getUser.fisrtname}
                            </span>
                        )
                    } else {
                        return (
                            <span className="is-size-7">{data.getUser.email}</span>
                        )
                    }
                } else
                    return (<Icon isSize="medium" className="fas fa-user fa-2x" />)
            }}
        </Query>
    )
}