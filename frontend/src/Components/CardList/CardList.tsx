import React from 'react'
import Card from '../Card/Card';

interface Props {}

const CardList : React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker='AAPL' price={110}/>
        <Card companyName='Microsoft' ticker='AAPL' price={200}/>
        <Card companyName='Nvidia' ticker='NVDA' price={320}/>
        <Card companyName='Tesla' ticker='TSLA' price={300}/>
    </div>
  )
};

export default CardList;