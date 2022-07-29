import type { NextPage } from 'next'
import Profile from '../components/profile'
import ProjectPreview, { ProjectPreviewInterface, } from '../components/project_preview';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import UserFind from '../components/UserFind';
import Images from '../components/images';
import React, {useEffect, useState} from 'react';

const Home: NextPage = () => {
  const searchIcon = <FontAwesomeIcon icon={faGoogle} />

  const projectMetadataArray = [];

  projectMetadataArray.push({
    title: 'Data Analysis App',
    desc: 'Processes data in Python',
    linkUrl: '/data_analysis',
    image: '/1.jpg'
    })

  projectMetadataArray.push({
    title: 'Sound Processing App',
    desc: 'Processes data in Python',
    linkUrl: '/sound_processing',
    image: '/2.jpg'
    })

  projectMetadataArray.push({
    title: 'Social Media Tracker',
    desc: 'Tracks time and usagr',
    linkUrl: '/social_tracker',
    image: '/3.jpg'
    });

  const projectPreviewElements = [];
  // <ProjectPreview {...projectPreviewData}/>

  for (let i = 0; i < projectMetadataArray.length; i++){
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element)
  } 
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      response => response.json().then(data => {
        setImages(data);
      })
    )
  })
  return (
    <div>
      <Profile/>
      <div className='mt-4 flex flex-col gap-4'>
        <form>
          <a className='border border-slate-300 shadow-md flex gap-2'>
            {searchIcon}
            <input type="text" name="" placeholder = "Email me" className='bg-transparent w-full'
             onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
              console.info((e.target as HTMLInputElement).value);
            }} />
          </a>
        </form>
        {projectPreviewElements}
      </div>
      <UserFind/>
      <Images data = {images} />
    </div>
  );
};

export default Home;
