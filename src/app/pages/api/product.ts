import type { NextApiRequest, NextApiResponse } from 'next';

const products = [
    { id: '1', name: 'Modern Couch', price: 299, image: '/images/couch1.jpg', description: 'Comfortable modern couch' },
    { id: '2', name: 'Classic Sofa', price: 499, image: '/images/couch2.jpg', description: 'Elegant classic sofa' },
    { id: '3', name: 'Luxury Couch', price: 799, image: '/images/couch3.jpg', description: 'Luxurious couch for premium comfort' },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(products);
};
