import { GetStaticPaths, GetStaticProps } from 'next';
import { Product } from '../../types/product';

const ProductPage = ({ product }: { product: Product }) => {
    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/products');
    const products: Product[] = await res.json();

    const paths = products.map((product) => ({
        params: { id: product.id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/products`);
    const products: Product[] = await res.json();
    const product = products.find((p) => p.id === params?.id);

    return { props: { product } };
};

export default ProductPage;
