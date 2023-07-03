export default Property({ name, price, rating, id }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating}</h4>
        </div>
    );
}