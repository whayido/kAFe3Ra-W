import React, { useState } from "react";
import Schedule from "./ScheduleResult";
import './Schedule.scss'

const ScheduleTab = ({ data }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="schedulecol">
      <div>
        <div className="grouptitle">Группа:</div>
        <select
          onChange={(e) => handleGroupChange(e.target.value)}
          className="selector"
        >
          <option value="">...</option>
          {data.groups.map((group) => (
            <option key={group.name} value={group.name}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      {selectedGroup && (
        <div>
          <div className="scheduleright">
            <div>
              <div className="grouptitle">День недели:</div>
              <select
                onChange={(e) => handleDayChange(e.target.value)}
                className="selector"
              >
                <option value="">...</option>
                {Object.keys(data.groups[0].schedule).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {selectedDay && (
                <p>
                  <Schedule
                    group={selectedGroup}
                    day={selectedDay}
                    schedule={
                      data.groups.find((group) => group.name === selectedGroup)
                        .schedule[selectedDay]
                    }
                  />
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleTab;
