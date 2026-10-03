import React, { useState } from "react";
import Container from "../common/Container";
import { CiCirclePlus } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";

const FAQ = () => {
  const data = [
    {
      id: 1,
      question: "What services does Catalyst Analytics provide?",
      answer:
        "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 2,
      question: "Lorem Ipsum is simply dummy text of the printing ",
      answer:
        "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 3,
      question: "What services does Catalyst Analytics provide?",
      answer:
        "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 4,
      question: "What services does Catalyst Analytics provide?",
      answer:
        "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      id: 5,
      question: "What services does Catalyst Analytics provide?",
      answer:
        "Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
  ];

  const [open, setOpen] = useState(null);

  console.log(data);

  return (
    <div className="pt-20 pb-50 border-b border-b-[#ffffff69]  ">
      <Container>
        <h3 className=" text-center text-4xl font-bold mb-18 ">
          Frequently Asked Questions
        </h3>

        <div className=" text-center ">
          {data.map((item) => {
            return (
              <div className=" bg-[#1E1E1E] rounded-4xl    ">
                <div>
                  <div
                    onClick={() => {
                      setOpen(item.id);
                    }}
                    className={` ${open == item.id ? " pb-2 text-primary " : "pb-7"}  pt-7  px-12.5 text-2xl! cursor-pointer font-semibold flex justify-between items-center mt-8  `}
                  >
                    <div className=" flex gap-8 items-center">
                      <h4 className=" w-20 h-20 bg-[#3c3c3c2c] rounded-2xl flex justify-center items-center ">
                        0{item.id}
                      </h4>
                      <h3 className="  font-medium "> {item.question} </h3>
                    </div>
                    <div>
                      {open === item.id ? (
                        <TiDeleteOutline className=" text-[42px]! font-extrabold! " />
                      ) : (
                        <CiCirclePlus className=" text-[42px]! font-extrabold! " />
                      )}
                    </div>
                  </div>
                  <p
                    className={` ${open === item.id ? "block" : " hidden"}  pl-37.5 text-start text-xl pb-10 pr-12.5 `}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
