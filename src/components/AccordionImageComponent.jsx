import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GiNinjaStar } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { TiLightbulb } from "react-icons/ti";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaCentercode, FaTabletScreenButton } from "react-icons/fa6";
import { TbClick } from "react-icons/tb";
const AccordionImageComponent = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(0);

  const accordionData = [
    {
      title: "Collaborative Learning",
      text: "We aim to empower students by facilitating seamless connections with their peers for collaborative studying. Students can effortlessly form study groups and engage in productive group study sessions from the convenience of their own homes. This platform provides a structured environment where students can share resources, discuss topics, and support each others learning journey, fostering a sense of community and enhancing the overall study experience.",
      imageSrc:
        "https://media.discordapp.net/attachments/1008571069797507102/1233718348873732216/sioux34tr_1._My_affection_for_my_grandfather_knew_no_bounds_he__c71be018-1608-4741-9ad5-b7a87117e3f6.png?ex=662e1d3f&is=662ccbbf&hm=90431ce3e90c70e0ebad9b9764970077cb9bbddb234b2bd98da2624bdefce502&=&format=webp&quality=lossless&width=1007&height=565", // Replace with your image source
    },
    {
      title: "Goal Tracker",
      text: "We offer students a comprehensive solution for achieving their academic goals effectively and efficiently. With our system, students have the ability to define precise study objectives and allocate a specific amount of time per day towards their attainment. Our platform then provides tailored guidance and resources to help students stay on track and complete their goals within the designated time frame. By utilizing our platform, students can enhance their productivity, optimize their study habits, and ultimately achieve academic success.",
      imageSrc:
        "https://media.discordapp.net/attachments/1008571069797507102/1233718348873732216/sioux34tr_1._My_affection_for_my_grandfather_knew_no_bounds_he__c71be018-1608-4741-9ad5-b7a87117e3f6.png?ex=662e1d3f&is=662ccbbf&hm=90431ce3e90c70e0ebad9b9764970077cb9bbddb234b2bd98da2624bdefce502&=&format=webp&quality=lossless&width=1007&height=565", // Replace with your image source
    },
    {
      title: "Study Smart AI",
      text: "We aim to revolutionize study techniques by providing personalized AI-driven guidance tailored to each chapter. Students receive comprehensive strategies for approaching topics efficiently, maximizing comprehension, and optimizing learning outcomes. With our innovative AI system, navigating through subjects becomes intuitive and effective, empowering students to achieve academic excellence.",
      imageSrc:
        "https://media.discordapp.net/attachments/1225526730509389834/1233805329767333958/sg310368_A_comic_book_illustration_of_an_eagle_flying_over_th_493ee54f-9c0a-4260-9b97-434b4434ace8_0.png?ex=662e6e41&is=662d1cc1&hm=2879456d42a7bbd8aacb0bff73a83c1a387cab5ad891a7d2f835a14b76a8aeb0&=&format=webp&quality=lossless&width=581&height=437", // Replace with your image source
    },
  ];

  const handleAccordionClick = (index) => {
    setSelectedAccordion((prevIndex) =>
      prevIndex === index ? prevIndex : index
    );
  };

  // Open the first accordion by default
  useEffect(() => {
    setSelectedAccordion(0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const items = [
    {
      id: 1,
      icon: <IoCodeSlashSharp size={30} />,
      header: "Expert Mentor Network",
      text: "Upon successfully completing a course, students are invited to join our Expert Mentor Network. As mentors, they have the opportunity to share their knowledge and experiences with fellow students, providing guidance and support. Additionally, mentors can share their notes and study materials, enriching the learning experience for their peers. This peer-to-peer mentorship program fosters a collaborative learning environment and promotes knowledge sharing among students.",
    },
    {
      id: 2,
      icon: <FaCentercode size={30} />,
      header: "Competitive Edge Booster",
      text: "The Competitive Edge Booster feature equips students with essential skills and strategies to thrive in competitive environments. Through workshops, seminars, and skill-building exercises, students learn how to leverage their strengths, adapt to challenges, and excel in academic and professional settings. This holistic approach to skill development empowers students to become confident, resilient, and competitive individuals.",
    },
    {
      id: 3,
      icon: <FaTabletScreenButton size={30} />,
      header: "Interactive Learning Suite",
      text: "Our Interactive Learning Suite offers a wide range of engaging learning resources and tools to enhance students understanding and retention of course concepts. From interactive simulations and multimedia presentations to virtual labs and quizzes, students have access to immersive learning experiences that cater to diverse learning styles. This interactive approach to learning promotes active engagement and deepens students comprehension of complex topics.",
    },
    {
      id: 4,
      icon: <TiLightbulb size={30} />,
      header: "Progress Monitor",
      text: "The Progress Monitor feature allows students to track their academic progress in real-time, providing valuable insights into their learning journey. Through visual dashboards, progress reports, and performance analytics, students can monitor their strengths, weaknesses, and areas for improvement. This data-driven approach enables students to make informed decisions about their study habits and adjust their strategies accordingly, leading to continuous growth and improvement.",
    },
    {
      id: 5,
      icon: <AiOutlineGlobal size={30} />,
      header: "Feedback Loop",
      text: "Our platform incorporates a Feedback Loop that delivers personalized feedback to students based on their performance and learning objectives. Whether through automated assessments, peer evaluations, or instructor feedback, students receive constructive feedback that helps them identify their strengths and areas for development. This ongoing feedback loop promotes self-reflection, fosters a growth mindset, and empowers students to take ownership of their learning.",
    },
    {
      id: 6,
      icon: <TbClick size={30} />,
      header: "Integrated Learning",
      text: " Beyond academic excellence, our platform focuses on fostering holistic student development by addressing various aspects of their personal and professional growth. Students have the opportunity to develop essential life skills such as communication, leadership, and critical thinking. This comprehensive approach to education prepares students to navigate the complexities of the modern world and become well-rounded individuals capable of making meaningful contributions to society.",
    },
  ];
  return (
    <>
      <motion.div
        className=" text-white mt-12 p-8 rounded-md text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="md:text-7xl -mt-20x text-3xl text-[#a966d8] font-bold mb-4">
          Education Enrichment Portal
        </h2>
        <p className="text-lg md:ml-14 md:-mt-3 opacity-50">
          Unlocking potential, igniting knowledge <br /> where learning knows no
          bounds
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row md:mr-18 md:ml-36">
        {/* First div with accordions */}
        <div className="lg:w-[40rem] md:mt-[rem] p-4 flex flex-col justify-center align-center">
          {accordionData.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => handleAccordionClick(index)}
              className={`cursor-pointer mb-5 p-2 bg-gradient-to-b from-gray-900 to--900 rounded-md overflow-hidden`}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="flex justify-between mb-3">
                <span className="text-[2rem] flex gap-2 items-center">
                  <GiNinjaStar className="mt-1" />
                  {item.title}
                </span>
                <motion.div
                  initial={false}
                  animate={{ rotate: selectedAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedAccordion === index ? (
                    <FiChevronUp size={20} />
                  ) : (
                    <FiChevronDown size={20} />
                  )}
                </motion.div>
              </div>
              {selectedAccordion === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text opacity-75 text-[#CE9FFC] overflow-hidden"
                >
                  {item.text}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Second div with images */}
        <div className="md:w-[75rem] p-4">
          {selectedAccordion !== null && (
            <motion.img
              key={selectedAccordion}
              src={accordionData[selectedAccordion].imageSrc}
              alt={`Image ${selectedAccordion + 1}`}
              className="w-full h-auto rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
      </div>

      <motion.div
        className=" text-white p-8 rounded-md text-left md:ml-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="md:text-[4rem] md:ml-14 text-3xl text-[#B58DF9] font-bold mb-4">
          Code Right, Test Swiftly{" "}
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col flex-wrap justify-center "
      >
        <div className="flex flex-wrap  justify-center">
          {items.slice(0, 3).map(({ id, icon, header, text }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="md:w-[25rem] h-auto  m-2 rounded-md p-4 flex flex-col  text-white"
            >
              <div className="mb-4">{icon}</div>
              <h2 className="text-lg md:text-[2rem] font-bold mb-4">
                {header}
              </h2>
              <p className="text-lg  opacity-75 ">{text}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {items.slice(3, 6).map(({ id, icon, header, text }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="md:w-[25rem] h-auto m-2 rounded-md p-4 flex flex-col text-white"
            >
              <div className="mb-4">{icon}</div>
              <h2 className="text-lg md:text-[2rem] font-bold mb-4">
                {header}
              </h2>
              <p className="text-lg opacity-75">{text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default AccordionImageComponent;
