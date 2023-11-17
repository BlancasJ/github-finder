import { Card, CardMedia } from "@mui/material";
import { UserData } from '../types';
import { formatContactData, formatDate, getContactClasses } from "../helpers";
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import ApartmentIcon from '@mui/icons-material/Apartment';

interface ContentCardProps {
  errorMessage: string | null;
  userData: UserData | null;
}

const ContentCard = ({ errorMessage, userData }: ContentCardProps) => {
  if (!errorMessage && !userData) {
    return (
      <div className="info-message">
        <h1 className="info-message__title">
          Search for a user to display their information.
        </h1>
      </div>
    )
  }

  if (errorMessage || !userData) {
    return (
      <div className="info-message">
        <h1 className="info-message__title">
          {errorMessage}
        </h1>
      </div>
    )
  }

  return (
    <Card
      className="card-container"
      sx={{
        color: 'var(--theme-text-primary)',
        backgroundColor: 'var(--theme-secondary-background-color)',
        borderRadius: '15px',
        width: '50%',
        textAlign: 'center',
        padding: '0',
        gap: '16px',
      }}
    >
      <div className="card__image-container">
        <CardMedia
          component="img"
          sx={{
            width: '140px', // Increased size
            height: '140px',
            borderRadius: '50%',
            margin: 'auto',
          }}
          image={userData.avatar_url}
          alt={userData.name}
        />
      </div>
      <div className="card__content-container">
        <div className="card__content-header">
          <h1 className="card__content-name">{userData.name}</h1>
          <p className="card__content-date">{`Joined ${formatDate(userData.created_at)}`}</p>
          <p className="card__content-username">{`@${userData.login}`}</p>
          <p className="card__content-bio">{
            userData.bio ? userData.bio : 'This profile has no bio.'
          }</p>
        </div>
        <div className="card__content_stats">
          <div className="card__content-stats-container">
            <p className="card__content-stats-label">Repos</p>
            <p className="card__content-stats-number">{userData.public_repos}</p>
          </div>
          <div className="card__content-stats-container">
            <p className="card__content-stats-label">Followers</p>
            <p className="card__content-stats-number">{userData.followers}</p>
          </div>
          <div className="card__content-stats-container">
            <p className="card__content-stats-label">Following</p>
            <p className="card__content-stats-number">{userData.following}</p>
          </div>
        </div>
        <div className="card__content-contact">
          <div className="card__content-contact-container" id="location">
            <PlaceIcon className="card__content-contact-icon" />
            <p className={getContactClasses(userData.location)}>{formatContactData(userData.location)}</p>
          </div>
          <div className="card__content-contact-container" id="twitter">
            <TwitterIcon className="card__content-contact-icon" />
            <p className={getContactClasses(userData.twitter_username)}>{formatContactData(userData.twitter_username)}</p>
          </div>
          <div className="card__content-contact-container" id="website">
            <LinkIcon className="card__content-contact-icon" />
            {
              !userData.blog
                ? <p className={getContactClasses(userData.blog)}>{formatContactData(userData.blog)}</p>
                : <a
                    className="card__content-contact-info"
                    href={userData.blog}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`@${userData.login}`}
                  </a>
            }
          </div>
          <div className="card__content-contact-container" id="company">
            <ApartmentIcon className="card__content-contact-icon" />
            <p className={getContactClasses(userData.company)}>{formatContactData(userData.company)}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ContentCard;
