import React from "react";
import "./Schedule.scss";
const ScheduleResult = ({ group, day, schedule }) => {
  return (
    <div>
      <div className="grouptitle">
        Расписание для группы {group}, {day}:
      </div>
      <ul>
        {schedule.map((lesson, index) => (
          <li key={index}>
            <div className="info">
              <p>Время:</p> <p className="neno"> {lesson.time}</p>
            </div>

            <div className="info">
              <p>Аудитория:</p> <p className="neno">{lesson.classroom}</p>
            </div>
            <div className="info">
              <p>Предмет:</p> <p className="neno">{lesson.subject}</p>
            </div>
            <div className="info">
              <p>Преподаватель:</p> <p className="neno">{lesson.teacher}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleResult;
