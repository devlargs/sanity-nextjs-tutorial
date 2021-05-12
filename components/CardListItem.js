import { Card } from "react-bootstrap";
import Link from "next/link";
import dayjs from "dayjs";

const CardListItem = ({
  title,
  popularity,
  date,
  director,
  link,
  mode = "normal",
}) => {
  return (
    <Card className={`fj-card fj-card-list ${mode}`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={director?.image || "https://via.placeholder.com/150"}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            {mode === "placeholder" ? (
              <>
                <Card.Title className="font-weight-bold mb-1">
                  Director Name
                </Card.Title>
                <Card.Text className="card-date">Released Date</Card.Text>
              </>
            ) : (
              <>
                <Card.Title className="font-weight-bold mb-1">
                  {director?.name}
                </Card.Title>
                <Card.Text className="card-date">
                  Released: {dayjs(date).format("MMM DD, YYYY")}
                </Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <Card.Body>
          {mode === "placeholder" ? (
            <>
              <Card.Title className="card-main-title">Movie Title</Card.Title>
              <Card.Text>Popularity</Card.Text>
            </>
          ) : (
            <>
              <Card.Title className="card-main-title">{title}</Card.Title>
              <Card.Text>Popularity: {Math.round(popularity)}%</Card.Text>
            </>
          )}
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
