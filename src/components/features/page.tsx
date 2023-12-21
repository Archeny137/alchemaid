import { Fcards } from "@/constants/page";
import FeatureCard from "../featureCard/page";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <>
      <motion.div
        className="w-full flex justify-center bg-green1/30 py-16"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-3 gap-10">
          {Fcards.map((card, index) => {
            return (
              <>
                <FeatureCard
                  key={index}
                  img={card.img}
                  title={card.title}
                  width={300}
                  height={300}
                />
              </>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Features;
