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
                <div className="grid grid-cols-3 ">
                  <div className=" col-span-1 place-self-center w-96">
                    {/* image div */}
                    <figure className="grid place-content-center" >
                      <img className="h-48 w-auto rounded-t-lg " 
                       src={profileImage} alt={name} />
                    </figure>

                  </div>
                  <div className=" place-self-center col-span-2 w-96">
                  <div className="grid grid-cols-2">
                    {/* data div */}
                    <div>
                      <p className="text-lg">{name}</p>
                      <p className="text-sm">({role})</p>

                    </div>
                    <div className="grid grid-cols-3">
                      <a href={github} target='_blank' rel="noreferrer">
                       <div className="grid place-content-center ">
                       <BsGithub  className="w-12 h-12"/>
                        <p className="text-sm text-sky-500">Github </p>
                       </div>
                      </a>
                      <a href={linkden} target='_blank' rel="noreferrer">
                        <div className="grid place-content-center ">
                        <AiFillLinkedin  className="w-12 h-12" />
                        <p className="text-sm text-sky-500">Linkden </p>
                        </div>
                      </a>
                      <a href={portfolio} target='_blank' rel="noreferrer">
                       <div className="grid place-content-center ">
                       <BsFillPersonCheckFill  className="w-12 h-12"/>
                        <p className="text-sm text-sky-500">Portfolio</p>
                       </div>

                      </a>
                    </div>


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
               <p className="text-lg">{name}</p> <p className="text-sm">({role})</p>
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
