import Recipe from './Recipe.jsx';
import {Grid} from '@mui/material';
const RecipeContainer = ({recipes}) => {

    return (
        <Grid container spacing={2}>
            {recipes.map((recipe, index) => (
                    <Recipe key={index + recipe.name} recipe={recipe}/>
            ))}
        </Grid>
    )
}

export default RecipeContainer;