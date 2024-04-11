import { useParams } from 'react-router-dom';

function ProductsPage() {
    const params = useParams();
    return (
        <>
            <h1>The Products Page</h1>
            <p>{params.productId}</p>
        </>
    );
}

export default ProductsPage;