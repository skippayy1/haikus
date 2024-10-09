import HaikuPage from '@/app/_components/HaikuPage';
import { getHaiku } from '@/app/_data/haikus';
import React from 'react'

const Haiku = async({params}) => {
  console.log(params)
    const  haiku_id = params.haikuId;
    const haiku = await getHaiku(haiku_id);
  return (
    <HaikuPage haiku={haiku} haiku_id={haiku_id}/>
  )
}

export default Haiku