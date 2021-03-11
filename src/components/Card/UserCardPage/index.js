import './index.css'

const UserCard = (props) => {

  return (
    <div>
      <button onClick={() => props.history.goBack()} className="back-btn">Go to Main</button>
      <div className="card">
        <img src={props.repo.owner.avatar_url} alt="user avatar" />
        <div className="name">{props.repo.name}</div>
        <div className="stars">{props.repo.stargazers_count}</div>
      </div>
      {props.contributors.map((c, index) =>
        <div>
          {index + 1}. {c.login}
        </div>)}
    </div>
  )
}

export default UserCard