import { useState } from 'react';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Secnod Punch']);
    console.log(categories);
    return (
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>

            {/*input */}

            {/*listado de Gif */}
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};
