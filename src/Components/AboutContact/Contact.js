import React from "react";
import ContactData from './Contact.json';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillPersonCheckFill } from 'react-icons/bs'



function Contact() {
  return (
    <>
      <div className="w-8/12 m-auto py-10 pb-10">
        <h1 className="text-3xl px-20 opacity-4 shadow-md text-purple-900 inline-block">
          Contact Us
        </h1>
      </div>
      <div className=" text-3xl text-center w-8/12 m-auto mb-10 h-auto bg-gray-100 rounded-xl shadow-md overflow-hidden  ">
        {
          ContactData.map(({ id, github, linkden, name, portfolio, profileImage, role }) => {
            return (
              <div key={id} className='grid gap-5'>
                <div className="grid grid-rows-2 ">
                  <div className="bg-red-600">
                    {/* image div */}
                    <figure >
                      <img className="h-48 w-auto rounded-t-lg " 
                       src={profileImage} alt={name} />
                    </figure>

                  </div>
                  <div className="grid grid-cols-2 bg-green-800">
                    {/* data div */}
                    <div>
                      <span className="text-lg">{name}</span>
                      <span className="text-sm">({role})</span>

                    </div>
                    <div className="grid grid-cols-3">
                      <a href={github} target='_blank' rel="noreferrer">
                        <BsGithub />
                      </a>
                      <a href={linkden} target='_blank' rel="noreferrer">
                        <AiFillLinkedin />
                      </a>
                      <a href={portfolio} target='_blank' rel="noreferrer">
                        <BsFillPersonCheckFill />

                      </a>
                    </div>


                  </div>

                </div>

                <div >


                </div>
                {/* <div>
               <figure>
                  <img className='rounded-t-lg ' src={profileImage} alt={name} />
                </figure>
               </div> */}

                {/* <div>
               <span className="text-lg">{name}</span> <span className="text-sm">({role})</span>
               <div>
                <h1>Personal Profile</h1>
                <div className="grid grid-cols-3">
                  <a href={github} target='_blank'   rel="noreferrer">
                  <BsGithub  />
                  </a>
                  <a href={linkden} target='_blank'  rel="noreferrer">
                  <AiFillLinkedin  />
                  </a>
                  <a href={portfolio} target='_blank'  rel="noreferrer">
                  <BsFillPersonCheckFill  />

                  </a>
                </div>
               </div>
               </div> */}

              </div>
            )
          })
        }

      </div>
    </>
  );
}

export default Contact;
