import Recipe from './Recipe.jsx'
const RecipeContainer = ({recipes}) => {

    return (
        <>
            {recipes.map((recipe, index) => (
                
                    <Recipe key={index + recipe.name} recipe={recipe}/>
                
                
            ))}
        </>
    )
}

export default RecipeContainer;