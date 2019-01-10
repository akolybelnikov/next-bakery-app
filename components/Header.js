import { NavbarBrand, NavbarItem, NavbarLink, NavbarMenu } from 'bloomer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Component } from 'react';
import { fromEvent, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';
import LogoSVG from '../static/logos/logo.svg';
import { Default, Handset, SmallHandset } from '../styles/utils';
import withData from '../withData';

const BurgerIcon = dynamic(() => import('../components/SVG/BurgerIcon'), {
  ssr: false,
})

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
              <NavbarLink className='is-arrowless'>
                <LogoSVG className='logoSVG' />
              </NavbarLink>
            </Link>
          </NavbarItem>

          {isAuthenticated && (
            <Default>
              <NavbarItem isHidden='desktop'>
                <Link prefetch href='/user'>
                  <NavbarLink className='is-arrowless'>{email}</NavbarLink>
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
                onClick={this.onCloseMenu}
                className='is-arrowless is-size-5-tablet'>
                Ассортимент
              </NavbarLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/offers' prefetch>
              <NavbarLink
                onClick={this.onCloseMenu}
                className='is-arrowless is-size-5-tablet'>
                Спецпредложения
              </NavbarLink>
            </Link>
          </NavbarItem>
          <NavbarItem isHidden='touch'>
            <Link href='/' prefetch>
              <NavbarLink className='is-arrowless'>
                <LogoSVG className='logoSVG' />
              </NavbarLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href='/contact' prefetch>
              <NavbarLink
                onClick={this.onCloseMenu}
                className='is-arrowless is-size-5-tablet'>
                Контакт
              </NavbarLink>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href={isAuthenticated ? '/user' : '/authenticate'} prefetch>
              <NavbarLink
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
            }
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
            .logo {
              transition: all 1s ease-in-out;
              justify-content: center;
              padding: 0;
            }
            .logoSVG {
              height: auto;
            }
            @media all and (max-width: 359px) {
              .logoSVG {
                width: 90px;
              }
            }
            @media all and (min-width: 360px) and (max-width: 599px) {
              .logoSVG {
                width: 100px;
              }
            }
            @media all and (min-width: 600px) and (max-width: 719px) {
              .logoSVG {
                width: 140px;
              }
            }
            @media all and (min-width: 720px) {
              .logoSVG {
                width: 160px;
              }
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
