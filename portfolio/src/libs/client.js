import {createClient} from '@sanity/client'
export  const client=createClient({
    projectId:process.env.PROJECT_ID,
    dataset:process.env.DATA_SET,
    apiVersion: '2021-08-31', // use a UTC date string
  useCdn: true, 
});

