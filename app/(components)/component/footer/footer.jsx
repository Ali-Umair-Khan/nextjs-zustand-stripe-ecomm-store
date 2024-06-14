import Link from 'next/link';
import './footer.scss'
 const Footer = () => {
    return(
        <div className='footer'>
                <div className='footer__left'>
                    <h1>CONTACT &#124;</h1>
                    <h1>ALL STORES   &#124;</h1>
                    <h1>PRIVACY AND DATA PROTECTION &#124;</h1>
                    <h1>POLICY SET  &#124;</h1>
                    <h1>COOKIE PREFERENCES  &#124;</h1>
                    <h1>LEGAL NOTICES  &#124;</h1>
                    <h1>CATALOGUES  &#124;</h1>
                </div>
                <p className='footer__right'>&copy; 2023 X Ventures, Inc.</p>
        </div>
    )
}

export default Footer