import produce from "../public/elaine-casap-qgHGDbbSNm8-unsplash.jpg";
import tacos from "../public/xavier-crook-wIqpmuOloVA-unsplash.jpg";
import Fade from 'react-reveal/Fade';

class Index extends React.Component {
    
    render() {
        return (
            <div>
                <div className="section-1 d-flex justify-content-center align-items-center">
                    <Fade top>
                        <h1>Eat with us</h1>
                    </Fade>
                </div>
                <div className="section-2 my-3 d-flex justify-content-lg-between flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
                    <Fade left>
                        <img 
                            src={produce}
                            className="mx-lg-4 img-fluid"
                            alt="Two people's hands holding a bowl of fresh tomatoes"
                        />
                    </Fade>
                    <Fade right>
                        <p className="p-4 d-flex align-items-center">You can trust us to serve you food that's made with only the freshest ingredients.</p>
                    </Fade>
                </div>
                <div className="section-3 my-3 d-flex justify-content-lg-between flex-column flex-lg-row flex-wrap flex-lg-nowrap">
                    <Fade left>
                        <p className="p-4 d-flex align-items-center">Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
                    </Fade>
                    <Fade right>
                        <img 
                            src={tacos}
                            className="mx-lg-4 img-fluid"
                            alt="Tacos"
                        />
                    </Fade>
                </div>
                
                <div className="section-4 p-5">
                    <Fade bottom>
                        <p className="m-3 text-center">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.
                        </p>
                    </Fade>
                </div>
                
            </div>
        )
    }
}

export default Index;