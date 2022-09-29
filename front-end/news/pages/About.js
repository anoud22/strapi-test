import styles from "../styles/Home.module.css";
function About({ data }) {
  //   console.log(data.data);
  //   console.log(data.data.attributes.Team[0].TeamName);

  return (
    <>
      <div className={styles.container}>
        <h1>About us</h1>
        <h2>{data.data.attributes.Title}</h2>
        <img
          src={"http://localhost:1337/uploads/thumbnail_OIP_effa966e35.jfif"}
        />
        <p>{data.data.attributes.Description}</p>

        <div className="serviceSection">
          <h2>{data.data.attributes.ServicesSection}</h2>
          <h3>{data.data.attributes.Services[0].ServiceTitle}</h3>
          <img
            src={"http://localhost:1337/uploads/R_1_f6ee943ca8.jfif"}
            className={styles.Image}
          />
          <p>{data.data.attributes.Services[0].ServiceDescription}</p>
        </div>

        <div className="teamSection">
          <h2>{data.data.attributes.TeamSection}</h2>
          <h3>{data.data.attributes.Team[0].TeamName}</h3>
          <img
            src={"http://localhost:1337/uploads/OIP_1_e2b268c7d3.jfif"}
            className={styles.Image}
          />
          <p>{data.data.attributes.Team[0].TeamDescription}</p>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "http://localhost:1337/api/about?populate=Cover,Team,Services"
  );
  const data = await res.json();

  return {
    props: { data },
  };
}

export default About;
