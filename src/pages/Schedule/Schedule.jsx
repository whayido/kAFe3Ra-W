import "./Schedule.scss";
import { motion } from "framer-motion";
import ScheduleTab from "./ScheduleTab";
import data from "./Schedule.json";

const Schedule = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div>
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <p className="title">Расписание</p>
          </motion.div>
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <div className="scheduleboxbox">
              <div className="schedulebox">
                <ScheduleTab data={data} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Schedule;

/* const Schedule = () => {
  return (
    <div>
      <section className="btn-grid">
        <a href="/" className="btn">
          
        </a>
        <button className="qw">damn</button>
      </section>

      <section className="Staff-card">
        <FadeIn delay={0.2} direction="right" padding fullwidth>
          <div className="box box--animated box--expand">
            <h2>bayeard</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              vitae eveniet minus quasi fugit similique neque quas vel dolor
              laboriosam inventore, repudiandae aliquam odit, velit modi
              asperiores impedit ipsum quo.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Schedule;
 */
