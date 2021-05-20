import HomePageImage from '../../components/assets/fletcher_homepage.png'

const Home = () => {
    return(
        <div className="home-page">
            <img className='home-pic' src={HomePageImage} alt='fletcher'></img>
            <h1>Buenos Tardes, Raymondo!</h1>
        </div>
    )
}

export default Home;