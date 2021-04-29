import { Card } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "lib/api";
import dayjs from "dayjs";

const CardItem = ({ title, popularity, image, date, director, link }) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={director?.image || "https://via.placeholder.com/150"}
            className="rounded-circle mr-3"
            alt="avatar"
            style={{
              width: 80,
              height: 80,
              border: "3px solid #007bff",
            }}
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {director?.name || "No Name"}
            </Card.Title>
            <Card.Text className="card-date">
              Released: {dayjs(date).format("MMM DD, YYYY")}
            </Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img
            className="movie-image"
            src={urlFor(image).height(700).crop("center").fit("clip").url()}
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>Popularity: {Math.round(popularity)}%</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
