import React from "react";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { FaCode, FaStore, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import Stats from "../components/layout/Stats";
import ReposList from "../components/repos/ReposList";
import { getUserAndRepos } from "../context/github/GithubActions";

function User({}) {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async() => {
      const userData = await getUserAndRepos(params.login);
      dispatch({
        type:'GET_USER_AND_REPOS',
        payload : userData
      })
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-2 mt-2">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gab-8 text-white">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full ">
              <figure>
                <img src={avatar_url} alt="user" />
              </figure>

              <div className="card-body justify-end">
                <h2 className="card-title mb-0 text-white">{name}</h2>
                <h4 className="text-white">{login}</h4>
              </div>
            </div>
          </div>

          <div className="col-span-2 ml-4">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && <Stats stat_text="Location" stat_obj={location} />}
              {blog && (
                <Stats
                  stat_text="Website"
                  stat_obj={blog}
                  link={true}
                  url={`https://${blog}`}
                />
              )}
              {twitter_username && (
                <Stats
                  stat_text="Twitter"
                  stat_obj={twitter_username}
                  link={true}
                  url={`https://twitter.com/${twitter_username}`}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-lg bg-base-100 stats">
          <Stats
            icon={<FaUsers className="text-3xl md:text-5xl" />}
            stat_text={"Followers"}
            stat_obj={followers}
          />
          <Stats
            icon={<FaUsers className="text-3xl md:text-5xl" />}
            stat_text={"Following"}
            stat_obj={following}
          />
          <Stats
            icon={<FaCode className="text-3xl md:text-5xl" />}
            stat_text={"Public Repos"}
            stat_obj={public_repos}
          />
          <Stats
            icon={<FaStore className="text-3xl md:text-5xl" />}
            stat_text={"Public Gists"}
            stat_obj={public_gists}
          />
        </div>
        <ReposList repos={repos} />
      </div>
    </>
  );
}

export default User;
