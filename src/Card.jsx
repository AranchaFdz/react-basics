import profilepic from "./assets/Yo1.jpg"

function Card() {
  return (
    <div className="card">
        <img src={profilepic} alt="Profile foto" className="card-img" />
        <h2 className="card-title">Arancha Fenández</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo nesciunt culpa aliquam laboriosam velit reiciendis laudantium eligendi deserunt. Laborum.
        </p>
    </div>
  )
}

export default Card