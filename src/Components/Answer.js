import { Button } from "react-bootstrap";

const Answer = ({ value, id }) => {
    const handleOnClick = () => {
        console.log(value);
    };
    return (
        <Button key={(id + 123)} onClick={handleOnClick}>
            {value}
        </Button>
    );
};

export default Answer;
