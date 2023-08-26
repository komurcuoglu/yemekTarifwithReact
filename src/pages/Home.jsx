
import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <Header title="Yemek Tarifleri" bgClass="bg-image">
            <Button
                content="Tarif Ara"
                color="primary"
                as={Link}
                to="/recipes"
                size="big"
            />
        </Header>
    )
}

export default Home;