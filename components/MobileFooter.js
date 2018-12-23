import { fromEvent, Subscription } from "rxjs";
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from "rxjs/operators";
import withData from "../withData";
import { Level, LevelItem } from "bloomer";
import FacebookIcon from "./SVG/Facebook";
import InstagramIcon from "./SVG/Instagram";
import { theme } from "../styles/utils";

const Direction = {
  Up: "up",
  Down: "down"
};

class MobileFooter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolledDown: true,
      windowY: null
    };
  }

  scrollUpSubscription = new Subscription();
  scrollDownSubscription = new Subscription();

  componentDidMount() {
    this.setState({ windowY: window.pageYOffset });
    const scroll$ = fromEvent(window, "scroll").pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]) => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );
    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    this.scrollUpSubscription = scrollUp$.subscribe(() => {
      return this.setState({ isScrolledDown: true });
    });
    this.scrollDownSubscription = scrollDown$.subscribe(() => {
      return this.setState({ isScrolledDown: false });
    });
  }

  componentWillUnmount() {
    this.scrollUpSubscription.unsubscribe();
    this.scrollDownSubscription.unsubscribe();
  }

  render() {
    return (
      <div className="mobile-footer">
        <Level className="mobile-footer-nav" isMobile="true">
          <LevelItem
            aria-label="Facebook link"
            href="https://www.facebook.com/CONFERTRU.RU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon width="24px" />
          </LevelItem>
          <LevelItem
            aria-label="Instagram link"
            href="https://www.instagram.com/confertru.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width="24px" />
          </LevelItem>
          <LevelItem />
          <LevelItem />
        </Level>
        <style global jsx>
          {`
            div.mobile-footer {
              transition: all 0.5s ease-in-out;
              position: fixed;
              right: 0;
              margin: 0 auto;
              left: 0;
              background-color: ${theme.primaryHalf};
              bottom: ${this.state.isScrolledDown
                ? this.state.windowY - 7.25
                : 0}em !important;
            }
            nav.mobile-footer-nav {
              padding: 0.8rem 0 !important;
            }
          `}
        </style>
      </div>
    );
  }
}

export default withData(MobileFooter);
