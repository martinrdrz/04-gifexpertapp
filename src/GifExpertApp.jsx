import { useState } from 'react';
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Secnod Punch']);
    
    const onAddCategory = () => {
      //console.log("valorant");
      setCategories([...categories, "Valorant"]);
    };

    return (
      <>
        {/*titulo */}
        <h1>GifExpertApp</h1>

        {/*input */}
        <AddCategory />

        {/*listado de Gif */}
        <button onClick={onAddCategory}>Add Category</button>
        <ol>
          {categories.map((category) => {
            return <li key={category}>{category}</li>;
          })}
        </ol>
      </>
    );
};
