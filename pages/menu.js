import nachos from "../public/juan-manuel-giraldo-grisales-K7bd0WoYfoo-unsplash.jpg";

const Menu = () => {
    return (
        <div className="menu">
            <div className="chefs">
            </div>
            <h1 className="text-center">MENU</h1>
            <div className="d-flex align-items-center flex-column appetizers">
                <img src={nachos} />
                <h3>Appetizers</h3>
            </div>
        </div>
    )
}

export default Menu;