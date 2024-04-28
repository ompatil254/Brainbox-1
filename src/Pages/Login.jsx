import { motion } from "framer-motion";
import Form from "../components/Form.jsx";

const Login = () => {
  return (
    <>
      <motion.div className="flex md:h-screen md:flex-row flex-col">
        <div className="md:w-[60%] hidden sm:block mt-24 ">
          <div className="flex flex-col main-event ">
            <div className="flex align-center justify-center">
              <img src="/UnitLogo.png" alt="" />
            </div>
            <div className="flex align-center justify-center -mt-10">
              <img src="/HeroImg.png" alt="" />
            </div>
            <div className="text-center -mt-10">
              <h1 className="text-[3rem]">
                BrainBox: <br /> Accelerate, Collaborate & Succeed Together
              </h1>
            </div>
            <div className="flex align-center justify-center mt-5">
              <img src="Circle.png" alt="" />
            </div>
          </div>
        </div>
        <div className="md:w-[40%] Form-main">
          <Form />
        </div>
      </motion.div>
    </>
  );
};

export default Login;
