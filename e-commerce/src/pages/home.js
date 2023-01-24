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
        </div>
    )
}

export default Home