import useQuery from "../api/useQuery";
import { useNavigate } from "react-router";

/** Shows a list of activities. */
export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activities");

  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

/** Shows a single activity. Logged-in users will also see a delete button. */
function ActivityListItem({ activity }) {
  //const {
  //mutate: deleteActivity,
  //loading,
  // error,
  //} = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);
  let navigate = useNavigate();
  return (
    <li>
      <p>{activity.name}</p>
      <p onClick={() => navigate(`/activities/${activity.id}`)}>
        view Activity
      </p>
    </li>
  );
}
