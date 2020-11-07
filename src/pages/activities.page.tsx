import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Activity from "../components/Activity.Component";
import activityStore from "../stores/activityStore";

const Activities = () => {
  const activityData = useContext(activityStore);

  useEffect(() => {
    activityData.getActivities();
  }, [activityData]);
  return (
    <div>
      {activityData &&
        activityData.activities?.map((act) => (
          <Activity key={act.id} activity={act} />
        ))}
    </div>
  );
};

export default observer(Activities);
