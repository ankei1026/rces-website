import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["engaging", "innovative", "nurturing", "creative", "supportive"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full px-6 sm:px-5 lg:px-20 md:px-20">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <h1 className="text-5xl font-bold md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
            Welcome to Recaredo Castillo Elementary School
          </h1>
          <div className="flex gap-4 flex-col">

            <h1 className="text-3xl sm:text-5xl md:text-7xl tracking-tighter text-center font-regular">
              <span className="">A school that is </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

          </div>
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed tracking-tight max-w-2xl text-center">
            At Recaredo Castillo Elementary, we provide a nurturing and
            engaging environment for young learners. Our goal is to encourage
            curiosity, creativity, and academic excellence, preparing students
            to thrive in every aspect of life.
          </p>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Schedule a Tour <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Enroll Now <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
