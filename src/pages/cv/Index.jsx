import classes from "./styles.module.css";

function Resume({ personalInfo, experiences, educations, status }) {
  //get values
  const { name, surname, email, phone_number, about_me, image } =
    personalInfo !== null ? personalInfo : {};

  return (
    <div className={classes["right-side"]}>
      <div className={classes["personal-info"]}>
        <div>
          <h2>
            {name} {surname}
          </h2>
          {email && (
            <p className={classes.mail}>
              <img src="./assets/images/forEmail.png" alt="email-icon" />
              <span>{email}</span>
            </p>
          )}
          {phone_number && (
            <p>
              <img src="./assets/images/phone.png" alt="phone-icon" />
              <span>{phone_number}</span>
            </p>
          )}
          {about_me && <h4>ჩემ შესახებ</h4>}
          <p>{about_me}</p>
        </div>
        {image && (
          <img src={image} className={classes.photo} alt="person-img" />
        )}
      </div>
      {experiences !== undefined &&
        experiences.map((data, index) => {
          return (
            <div className={classes.experience} key={index}>
              <h4>გამოცდილება</h4>
              <p className={classes.position}>
                {data.position}
                {data.employer && data.position && ","} {data.employer}
              </p>
              <p className={classes.dates}>
                {data.start_date}
                {data.start_date && data.due_date && " - "}
                {data.due_date}
              </p>
              <p className={classes.description}>{data.description}</p>
            </div>
          );
        })}
      {educations !== undefined &&
        educations.map((data, index) => {
          return (
            <div className={classes.education} key={index}>
              <h4>განათლება</h4>
              <p className={classes.institute}>
                {data.institute}
                {data.degree && data.institute && ","} {data.degree}
              </p>
              <p className={classes.dates}>{data.due_date}</p>
              <p className={classes.description}>{data.description}</p>
            </div>
          );
        })}

      <img
        className={
          status === 201
            ? classes["finishedResume-logo"]
            : classes["footer-logo"]
        }
        src="./assets/images/cv-footer-logo.png"
        alt="redberry-footer-logo"
      />
    </div>
  );
}

export default Resume;
