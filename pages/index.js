import produce from "../public/elaine-casap-qgHGDbbSNm8-unsplash.jpg"

class Index extends React.Component {
    
    render() {
        return (
            <div>
                <div className="section-1 d-flex justify-content-center align-items-center">
                    <h1>Eat with us</h1>
                </div>
                <div className="section-2 my-3 d-flex justify-content-between">
                    <img src={produce} />
                    <p className="p-4 d-flex align-items-center">You can trust us to serve you food that's made with only the freshest ingredients.</p>
                </div>
            </div>
        )
    }
}

export default Index;