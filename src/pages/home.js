import Header from '../components/Header'
import '../styles/home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="offer">
                <p className="offertext">Enjoy up to ₹7000 instant savings on orders over ₹41900 across all products with HDFC Bank
                    or American Express credit cards.‡ </p><p className="offertext"> Plus No Cost EMI from most leading banks.‡‡ Shop iPhone</p>
            </div>
            <div class="phoneadd">
        <h1 class="patext">iPhone 14 and iPhone 14 Plus</h1>
        <div class="wonder">
            <h1>Wonderfull.</h1>
        </div>
    </div>
    <div class="pic"><img
            src="https://www.apple.com/v/iphone-14/b/images/overview/hero/hero_all_colors__dvlwc1u257qu_large.jpg" style={{ height: '500px', cursor: 'pointer' }}/>
    </div>

        </div>
    )
}

export default Home