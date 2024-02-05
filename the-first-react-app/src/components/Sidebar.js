function Sidebar(props) {
    return (
        <div className="promo-section">
            <div>
                <h1 className="h1ofSidebar">{props.heading}</h1>
            </div>
            <div>
                <h2 className="h2ofSidebar">{props.promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Sidebar;