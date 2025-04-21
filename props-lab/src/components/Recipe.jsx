import {Grid, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

const Recipe = ({recipe}) => {
    const {name, ingredients, instructions} = recipe;
    return (
        
            <Grid size={6}>
                <Card variant="outlined">
                <CardHeader title={name} ></CardHeader>
                
                <CardContent>
                    <Typography variant="h6" color="primary">Ingredients</Typography>
                    <ul>
                        {ingredients.map(ingredient => (<li>{ingredient}</li>))}
                    </ul>
                    <Typography variant="h6" color="secondary">Instructions</Typography>
                    <ol>
                        {instructions.map(step => (<li>{step}</li>))}
                    </ol>
                </CardContent>
                </Card>
            </Grid>
        
        
    )
}

export default Recipe;