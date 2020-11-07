import { action, observable } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { IActivity } from "../models/activity";

class activityStore {
  @observable activities: IActivity[] = [];
  @observable loading = false;
  @observable error = "";

  @action getActivities = () => {
    this.loading = true;
    agent.activities
      .list()
      .then((activities) => {
        activities.forEach((activity) => {
          this.activities.push(activity);
        });
      })
      .catch((err) => (this.error = err.message));
    this.loading = false;
  };
}

export default createContext(new activityStore());
