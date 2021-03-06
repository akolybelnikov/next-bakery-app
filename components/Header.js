import { NavbarBrand, NavbarItem, NavbarLink, NavbarMenu } from 'bloomer'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { Component } from 'react'
import { fromEvent, Subscription } from 'rxjs'
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime,
} from 'rxjs/operators'
import { Default, Handset, SmallHandset } from '../styles/utils'
import withData from '../withData'
import ResponsiveLogo from './ResponsiveLogo'
import BurgerIcon from './SVG/BurgerIcon'

const Direction = {
  Up: 'up',
  Down: 'down',
}

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMenuActive: false,
      isScrolledUp: true,
    }
  }

  scrollUpSubscription = new Subscription()
  scrollDownSubscription = new Subscription()

  componentDidMount() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(100),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]) => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share(),
    )
    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up),
    )

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down),
    )

    this.scrollUpSubscription = scrollUp$.subscribe(() => {
      return this.setState({ isScrolledUp: true })
    })
    this.scrollDownSubscription = scrollDown$.subscribe(() => {
      if (window.pageYOffset > 0) {
        return this.setState({ isScrolledUp: false })
      }
    })
  }

  componentWillUnmount() {
    this.scrollUpSubscription.unsubscribe()
    this.scrollDownSubscription.unsubscribe()
  }

  onToggleMenu = () => {
    this.setState({
      isMenuActive: !this.state.isMenuActive,
    })
  }

  onCloseMenu = () => {
    if (this.state.isMenuActive) this.setState({ isMenuActive: false })
  }

  render() {
    const { isAuthenticated, email } = this.props
    return (
      <nav className='navbar is-fixed-top'>
        <NavbarBrand>
          <NavbarItem className='logo' isHidden='desktop'>
            <Link prefetch href='/'>
              <NavbarLink aria-label='Homepage link' className='is-arrowless'>
                <ResponsiveLogo />
              </NavbarLink>
            </Link>
          </NavbarItem>

          {isAuthenticated && (
            <Default>
              <NavbarItem isHidden='desktop'>
                <Link prefetch href='/user'>
                  <NavbarLink
                    aria-label='User profile page link'
                    className='is-arrowless'>
                    {email}
                  </NavbarLink>
                </Link>
              </NavbarItem>
            </Default>
          )}

          <NavbarItem className='burgericon' isHidden='desktop'>
            <SmallHandset>
              <BurgerIcon
                height={60}
                width={60}
                isActive={this.state.isMenuActive}
                onToggleMenu={this.onToggleMenu}
              />
            </SmallHandset>
            <Handset>
              <BurgerIcon
                height={70}
                width={70}
                isActive={this.state.isMenuActive}
                onToggleMenu={this.onToggleMenu}
              />
            </Handset>
            <Default>
              <BurgerIcon
                height={80}
                width={80}
                isActive={this.state.isMenuActive}
                onToggleMenu={this.onToggleMenu}
              />
            </Default>
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu isActive={this.state.isMenuActive}>
          <NavbarItem>
            <Link href='/assortment' prefetch>
              <NavbarLink
                aria-label='Assortment link'
                onClick={this.onCloseMenu}
                className='is-arrowless is-size-5-tablet'>
                Ассортимент
              </NavbarLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/offers' prefetch>
              <NavbarLink
                aria-label='Offers page link'
                onClick={this.onCloseMenu}
                className='is-arrowless is-size-5-tablet'>
                Спецпредложения
              </NavbarLink>
            </Link>
          </NavbarItem>
          <NavbarItem isHidden='touch'>
            <Link href='/' prefetch>
              <NavbarLink aria-label='Homepage link' className='is-arrowless'>
                <ResponsiveLogo />
              </NavbarLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/contact' prefetch>
              <NavbarLink
                aria-label='Contact page link'
                onClick={this.onCloseMenu}
                className='is-arrowless is-size-5-tablet'>
                Контакт
              </NavbarLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={isAuthenticated ? '/user' : '/authenticate'} prefetch>
              <NavbarLink
                aria-label='User page link'
                onClick={this.onCloseMenu}
                className={
                  isAuthenticated
                    ? `is-arrowless`
                    : `is-arrowless is-size-5-tablet`
                }>
                {isAuthenticated ? email : 'Вход пользователя'}
              </NavbarLink>
            </Link>
          </NavbarItem>
        </NavbarMenu>
        <style jsx global>
          {`
            .navbar {
              transition: all 0.5s ease-in-out;
              max-width: 1600px;
              margin: 0 auto;
              background-color: rgba(255, 255, 255, 0.5);
              top: ${this.state.isScrolledUp ? 0 : -7.25}em !important;
            }
            .navbar-menu {
              justify-content: space-evenly;
            }
            .navbar-brand {
              justify-content: space-between !important;
            }import BurgerIcon from './SVG/BurgerIcon';

            .navbar-item {
              transition: all 0.5s ease-in-out;
              text-align: center;
              justify-content: center;
            }
            .burgericon {
              transition: all 0.5s ease-in-out;
              cursor: pointer;
              min-width: 85px;
              min-height: 85px;
              justify-content: flex-end;
            }
            @media all and (max-width: 825px) {
              .navbar-item {
                flex: 0 0 28%;
              }
            }
          `}
        </style>
      </nav>
    )
  }
}

export default withData(Header)
