import './footer.scss'
import logo from '../../assets/tmovie.png'
import bg from '../../assets/footer-bg.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
		<div className="footer__content container">
			<div className="footer__content__logo">
				<div className="logo">
					<img src={logo} alt="" />
					<Link to='/'>themoviedb</Link>
				</div>
			</div>
			<div className="footer__content__menus">
				<div className="footer__content__menu">
					<Link to='/'>Home</Link>
					<Link to='/'>Contact Us</Link>
					<Link to='/'>Term Of Service</Link>
					<Link to='/'>About US</Link>
				</div>
				<div className="footer__content__menu">
					<Link to='/'>Live</Link>
					<Link to='/'>FAQ Us</Link>
					<Link to='/'>Premium</Link>
					<Link to='/'>Privacy policy</Link>
				</div>
				<div className="footer__content__menu">
					<Link to='/'>You must watch</Link>
					<Link to='/'>Recent release</Link>
					<Link to='/'>Top IMDB</Link>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Footer