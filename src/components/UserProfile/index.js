import './index.css'

const UserProfile = props => {
  const {userDetails, onDeleteUser} = props
  const {imageUrl, name, role, uniqueNo} = userDetails

  const onDelete = () => {
    onDeleteUser(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <div className="imgStyle">
        <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      </div>
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        <span className="deleteX">x</span>
      </button>
    </li>
  )
}
export default UserProfile
