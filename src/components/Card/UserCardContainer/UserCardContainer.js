import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getContributors, getCurrentRepo } from "../../../actions/repos";
import UserCard from '../UserCardPage'


const UserCardContainer = (props) => {

  console.log(props);

  const { username, reponame } = useParams();
  const [repo, setRepo] = useState({ owner: {} });
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    getCurrentRepo(username, reponame, setRepo);
    getContributors(username, reponame, setContributors)
  }, [reponame, username]);

  return (
    <UserCard props={props} />
  )
}

export default UserCardContainer