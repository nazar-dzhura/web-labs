import React, {useState} from 'react';
import Card from "../card/Card";
import "./discover-cards.css"
import Button from "@material-ui/core/Button";

function DiscoverCards(props) {

    const [showCards, setShowCards] = useState(false);

    const data = [{title: 'Title1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vehicula gravida.', imageURL: 'https://i0.wp.com/www.casualoptimist.com/wp-content/uploads/2021/08/damnation-spring-design-jaya-miceli-art-jeremy-miranda.jpg?resize=993%2C1500'},
        {title: 'Title2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vehicula gravida.', imageURL: 'https://i0.wp.com/www.casualoptimist.com/wp-content/uploads/2021/08/damnation-spring-design-jaya-miceli-art-jeremy-miranda.jpg?resize=993%2C1500'},
        {title: 'Title3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vehicula gravida.', imageURL: 'https://i0.wp.com/www.casualoptimist.com/wp-content/uploads/2021/08/damnation-spring-design-jaya-miceli-art-jeremy-miranda.jpg?resize=993%2C1500'},
        {title: 'Title4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vehicula gravida.', imageURL: 'https://i0.wp.com/www.casualoptimist.com/wp-content/uploads/2021/08/damnation-spring-design-jaya-miceli-art-jeremy-miranda.jpg?resize=993%2C1500'},
        {title: 'Title5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vehicula gravida.', imageURL: 'https://i0.wp.com/www.casualoptimist.com/wp-content/uploads/2021/08/damnation-spring-design-jaya-miceli-art-jeremy-miranda.jpg?resize=993%2C1500'},
        {title: 'Title6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit vehicula gravida.', imageURL: 'https://i0.wp.com/www.casualoptimist.com/wp-content/uploads/2021/08/damnation-spring-design-jaya-miceli-art-jeremy-miranda.jpg?resize=993%2C1500'},]

    let content = null;

    showCards === false
        ? content = data.slice(0, 3).map((item, index) => (
        <Card heading={item.title} description={item.description} imageURL={item.imageURL} key={index}/>
    ))
        : content = data.map((item, index) => (
            <Card heading={item.title} description={item.description} imageURL={item.imageURL} key={index}/>
        ))


    return (
        <div className="discover-cards">
            {content}
            {showCards === false ?
                <Button
                    className="shadow-2xl btn-green"
                    variant="contained"
                    color="primary"
                    onClick={() => {setShowCards(true)}}
                >
                    View More
                </Button>
                : null}
        </div>
    );
}

export default DiscoverCards;