import React, { useEffect, useState } from "react";
import agent from "../api/agent";
import { IActivity } from "../models/activity";
import message from "../utils/message";
import Activity from "../components/Activity.Component";

const Activities = () => {
  const [activitiesData, setActivitiesData] = useState<IActivity[] | null>([]);
  useEffect(() => {
    agent.activities.list().then((res) => {
      setActivitiesData(res);
      console.log(message.Sucessfull);
    });
  }, []);
  return (
    <div>
      {activitiesData?.map((act) => (
        <Activity key={act.id} activity={act} />
      ))}
    </div>
  );
};

export default Activities;
