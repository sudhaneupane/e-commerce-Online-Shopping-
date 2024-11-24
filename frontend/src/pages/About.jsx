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
              Welcome to Forever, your one-stop destination for the latest
              trends in fashion. We are dedicated to offering a diverse range of
              high-quality clothing for men, women, and kids, blending style
              with comfort. Our passion lies in making fashion accessible to
              everyone, with a seamless online shopping experience and
              exceptional customer service. Join us in celebrating individuality
              and confidence through timeless and trendy apparel.
            </p>
            <p>
              We believe fashion is more than just clothing—it's a way to
              express your personality and embrace your unique style. Our
              carefully curated collections are designed to cater to every
              occasion, from casual wear to formal attire. With a focus on
              quality, affordability, and sustainability, we aim to make every
              shopping experience enjoyable and fulfilling. Discover the joy of
              effortless fashion with us
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
              Our mission is to redefine online clothing shopping by providing
              high-quality, stylish, and affordable fashion for everyone. We
              strive to deliver a seamless shopping experience with a wide
              variety of choices, exceptional customer service, and a commitment
              to sustainability.
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
          <p className="text-gray-600">
            Quality is at the heart of everything we do. At Forever, we ensure
            that every product meets the highest standards of craftsmanship,
            durability, and comfort. Our dedicated team carefully selects
            premium materials and employs rigorous quality checks at every
            stage, so you can shop with confidence, knowing you're getting the
            best.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Convenience is our promise to you. At Forever, we make shopping
            effortless with a user-friendly website, secure payment options, and
            fast delivery services. From browsing to checkout, our streamlined
            process ensures a hassle-free experience, so you can focus on
            enjoying your new wardrobe.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At Forever, exceptional customer service is our priority. Our
            dedicated support team is always ready to assist you with any
            queries, ensuring a smooth and enjoyable shopping experience. Your
            satisfaction is our success, and we’re here to make every step of
            your journey with us delightful.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
