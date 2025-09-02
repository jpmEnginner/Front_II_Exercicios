import Avatar from "./Avatar";
import Title from "./Title";

function Profile({ user }) {
  return <>

    <Title content={user.name} link={user.wiki} />
    <Avatar user={user} />
  </>
}


export default Profile;