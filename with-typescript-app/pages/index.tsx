import { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "../components/LaunchItem";
import MissionKey from "../components/MissionKey";
// import App from "../components/App";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Index: React.FC = () => {
  return (
    <Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }: any) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return (
            <Fragment>
              {data.launches.map((launch: any) => {
                return (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                );
              })}
            </Fragment>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default Index;
