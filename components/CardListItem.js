import { Card } from "react-bootstrap";
import Link from "next/link";
import dayjs from "dayjs";

const CardListItem = ({ title, popularity, date, director, link }) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={director?.image}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {director?.name}
            </Card.Title>
            <Card.Text className="card-date">
              Released: {dayjs(date).format("MMM DD, YYYY")}
            </Card.Text>
          </div>
        </Card.Header>
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

export default CardListItem;
