import '../styles/home.css'

const Header = () => {
    return (<>
      <div className="text">
                <img className="applelogo"
                    alt="idasd"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
                    style={{ height: '13px', cursor: 'pointer' }}
                />
                <button className="btns">Store</button>
                <button className="btns">Mac</button>
                <button className="btns">iPad</button>
                <button className="btns">Watch</button>
                <button className="btns">AirPods</button>
                <button className="btns">TV & Home</button>
                <button className="btns">Only on Apple</button>
                <button className="btns">Accessories</button>
                <button className="btns">Support</button>
            </div>
            <div className="specs">
                <div className="twodiv">
                    <h1 className="iphone14">iPhone14</h1>
                </div>
                <div className="sideiphone14">
                    <p>Overview</p>
                    <p>Switching to iPhone</p>
                    <p>Tech Specs</p>
                    <a href="/buyapple.html" className="btnstyle">
                        <button className="btn">Buy</button>
                    </a>
                </div>
            </div>
    </>)
}

export default Header;