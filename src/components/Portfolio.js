import Project from "./Project";

function Portfolio()
{
    return(
    <>        
    <h3 className="portfolio-h1">
    My Projects            
    </h3>

        <div className="portfolio-container">

        <Project source={'./image-gene.png'} href={'https://alyshiak.github.io/ig9863450/'} title={'ImageGene'}/>
        <Project source={'./tech-blog.jpg'} href={'https://tech-blog-website.herokuapp.com/'} title={'Tech Blog'}/>
        <Project source={'./weather-dashboard.jpg'} href={'https://zafarfast.github.io/za234957234/'} title={'Weather Dashboard'}/>
        <Project source={'./coding-quiz.jpg'} href={'https://zafarfast.github.io/zafarfastw4c/'} title={'Coding Quiz'}/>
        <Project source={'./hotel-hunter.jpg'} href={'https://melbourne-hotel-hunter.herokuapp.com/'} title={'Hotel Hunter'}/>
        <Project source={'./passwod-generator.jpg'} href={'https://zafarfast.github.io/ro049378231245/'} title={'Password Generator'}/>
        </div>
    </>)
}

export default Portfolio;
