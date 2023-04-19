
function Header({ currentPage, changePage }) {
    return (
        <>
            <div className='flex'>
                <div>
                <img id='logo' src="./logo.png" />
                </div>
                <div>
                    <ul className='buttons-flex nobullets'>
                        <li className="nav-li"> <a href="#" onClick={() => { changePage('AboutMe') }}>About Me</a> </li>
                        <li className="nav-li" >  <a href="#" onClick={() => { changePage('Portfolio') }}>Portfolio</a> </li>
                        <li className="nav-li" >  <a href="#" onClick={() => { changePage('ContactMe') }}>Contact Me</a></li>
                        <li className="nav-li" >  <a href="#" onClick={() => { changePage('Resume') }}>Resume</a></li>
                    </ul>
                </div>


            </div>
        </>)
}

export default Header;
