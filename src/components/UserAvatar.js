const UserAvatar = ({ userDetails }) => {
  const { url, username } = userDetails;

  return (
    <span className="user-avatar">
      <a href={url}>{username}</a>
    </span>
  )
}

export default UserAvatar
