const UserAvatar = ({ user }) => {
  const { url, username } = user;

  return (
    <span className="user-avatar">
      <a href={url}>{username}</a>
    </span>
  )
}

export default UserAvatar
