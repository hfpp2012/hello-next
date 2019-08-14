import { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Link from "next/link";
import { useRouter } from "next/router";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default () => {
  const router = useRouter();
  let { flight_number } = router.query;
  const id = +flight_number;

  return (
    <Fragment>
      <Query query={LAUNCH_QUERY} variables={{ flight_number: id }}>
        {({ loading, error, data }: any) => {
          if (loading) return <h4>loading...</h4>;
          if (error) console.log(error);

          const {
            flight_number,
            mission_name,
            launch_year,
            launch_success,
            rocket: { rocket_id, rocket_name, rocket_type }
          } = data.launch;

          return (
            <div>
              <h1 className="display-4 my-3">
                <span className="text-dark">Mission: </span> {mission_name}
              </h1>
              <h4 className="mb-3">Launch Details</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  Flight Number: {flight_number}
                </li>
                <li className="list-group-item">Flight Year: {launch_year}</li>
                <li className="list-group-item">
                  Flight Successful: {launch_success ? "Yes" : "No"}
                </li>
              </ul>
              <h4 className="mb-3">Rocket Details</h4>
              <ul className="list-group">
                <li className="list-group-item">Rocket ID: {rocket_id}</li>
                <li className="list-group-item">Rocket Name: {rocket_name}</li>
                <li className="list-group-item">Rocket Type: {rocket_type}</li>
              </ul>
              <hr />
              <Link href="/">
                <a className="btn btn-secondary">Home</a>
              </Link>
            </div>
          );
        }}
      </Query>
    </Fragment>
  );
};
