import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
} from "reactstrap";

const MenuItem = (props) => {
  // console.log(props);
  return (
    <div>
      <Card style={{ margin: "10px", width: "30rem" }}>
        <CardBody>
          <CardImg
            width="100%"
            alt={props.dish.name}
            src={props.dish.image}
            style={{ opacity: "0.5" }}
          />
          <CardImgOverlay>
            <CardTitle tag="h5">{props.dish.name}</CardTitle>
          </CardImgOverlay>
        </CardBody>
      </Card>
    </div>
  );
};

export default MenuItem;
