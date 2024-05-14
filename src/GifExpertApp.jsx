import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([...categories, newCategory]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            <button onClick={onAddCategory}>Add Category</button>
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
