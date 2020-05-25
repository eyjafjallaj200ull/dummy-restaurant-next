import nachos from "../public/juan-manuel-giraldo-grisales-K7bd0WoYfoo-unsplash.jpg";
import mains from "../public/louis-hansel-shotsoflouis-LIJujhJviMI-unsplash.jpg";
import desserts from "../public/louis-hansel-shotsoflouis-HEp8BwW7r84-unsplash.jpg"

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-hero">
            </div>
            <h1 className="text-center my-3">MENU</h1>
            <div className="d-flex align-items-center flex-column menu-title">
                <img src={nachos} alt="Nachos with salsa and guacamole dips on the side"/>
                <h3 className="p-3">Appetizers</h3>
                <hr />
            </div>
            <div className="d-flex align-items-center flex-column menu-items">
                <div className="menu-item">
                    <h5>Meat and Cheese Tray</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Caprese Garlic Bread</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Spinach Artichoke Bites</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Chili Lime Shrimp Cups</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Awesome Ristorante Nachos</h5>
                </div>
            </div>
            <div className="d-flex align-items-center flex-column menu-title mt-3">
                <img src={mains} alt="Dim sums"/>
                <h3 className="p-3">Main Course</h3>
                <hr />
            </div>
            <div className="d-flex align-items-center flex-column menu-items">
                <div className="menu-item">
                    <h5>Balsamic Lamb Chops</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Crab-Stuffed Lobster Tail</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Awesome Ristorante Dim Sums</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Thai Coconut Curry Tofu</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>All You Can Have Tacos</h5>
                </div>
            </div>
            <div className="d-flex align-items-center flex-column menu-title mt-3">
                <img src={desserts} alt="Small chocolate cake on a plate"/>
                <h3 className="p-3">Desserts</h3>
                <hr />
            </div>
            <div className="d-flex align-items-center flex-column menu-items mb-3">
                <div className="menu-item">
                    <h5>Awesome Ristorante Chocolate Cake</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Tiramisu</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Blueberry Pie</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Dulce de Leche Tart</h5>
                </div>
                <div className="menu-item my-1">
                    <h5>Chocolate Mousse</h5>
                </div>
            </div>
            <style jsx>
                {`
                    .menu-title h3 {
                        border-bottom: 2px solid #333;
                    }
                `}
            </style>
        </div>
    )
}

export default Menu;