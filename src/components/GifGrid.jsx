import { useEffect, useState } from 'react';
import { GitItem } from './GitItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    };

    useEffect(() => {
        //getGifs(category);
        getImages();
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((image) => (
                    <GitItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
