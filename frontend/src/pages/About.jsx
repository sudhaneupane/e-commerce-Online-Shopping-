import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            className="w-full md:max-w-[450px]"
            src={assets.about_us}
            alt=""
          />
          <div className=" text-lg flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quidem eligendi sapiente natus molestiae quisquam labore quas
              suscipit harum ullam repellat dolores vitae cumque perspiciatis
              dicta expedita asperiores, perferendis rerum.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              optio cupiditate ad assumenda quidem nam aspernatur officia magnam
              obcaecati! Quod praesentium delectus earum facilis voluptatibus?
              Quod deleniti veritatis nobis non.
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              omnis at veniam architecto suscipit debitis recusandae nemo ad
              voluptate in ipsam nulla blanditiis dolorum accusantium, enim ipsa
              inventore beatae! Reprehenderit!
            </p>
          </div>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus praesentium! Eius totam distinctio doloribus? Ex excepturi accusamus eaque necessitatibus praesentium nulla! Commodi vitae saepe similique repudiandae natus error earum!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus praesentium! Eius totam distinctio doloribus? Ex excepturi accusamus eaque necessitatibus praesentium nulla! Commodi vitae saepe similique repudiandae natus error earum!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, doloribus praesentium! Eius totam distinctio doloribus? Ex excepturi accusamus eaque necessitatibus praesentium nulla! Commodi vitae saepe similique repudiandae natus error earum!</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
