function OneProfile({ profession, awards, discovered, image }) {
  return (
    <section className="profile">
      <h2>{profession}</h2>
      <img
        className="avatar"
        src={image}
        alt={profession}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <OneProfile profession="profession1" awards={["awards1", "awards2"]} discovered="discovered1" image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/330px-Marie_Curie_c._1920s.jpg"></OneProfile>
      <OneProfile profession="profession2" awards={["awards3", "awards4"]} discovered="discovered2" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg/330px-Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg"></OneProfile>

    </div>
  );
}
