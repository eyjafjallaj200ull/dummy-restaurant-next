import Header from "./Header"
import Fade from 'react-reveal/Fade';

const Layout = (props) => (
    <div>
        <Fade top><Header /></Fade>
        {props.children}
    </div>
)

export default Layout;