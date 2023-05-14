/* eslint-disable react-hooks/exhaustive-deps */
import { ReactComponent as  BGMobile} from 'assets/images/bg-header-mobile.svg'
import { ReactComponent as  BGDesktop} from 'assets/images/bg-header-desktop.svg'
import { useEffect, useState } from 'react'
import {Offer} from 'Components/Offer/Offer'
import {FilterConsole} from 'Components/FilterConsole/FilterConsole'
import './App.css'

const data = require('data.json')

export function App(){
    let [keywords,setKeywords] = useState([])
    const [filteredData, setfilteredData] = useState([]);
    
    
    function modifiedData () {
        if (keywords) {
        const newData = data.filter((d) => {
          return keywords.every((key) => {
            return (
              d.role === key ||
              d.level === key ||
              d.languages.includes(key) ||
              d.tools.includes(key)
            );
          });
        });
        setfilteredData(newData);
      } else {
        setfilteredData(data);
      }
    };
  
    useEffect(() => {
      modifiedData();
    },[keywords]);
    
    return(
        <>
            <header className="top">
            </header> 
            <main className="root_inner">  
              <FilterConsole  keywords={keywords} setKeywords={setKeywords} />
                
                <div className="offers">
                    {filteredData.map(offer => <Offer keywordsState={keywords} setKeywords={setKeywords} key={offer.id} company={offer.company} logo={offer.logo} isNew={offer.new} isFeatured={offer.featured} position={offer.position} role={offer.role} level={offer.level} postedAt={offer.postedAt} contract={offer.contract} location={offer.location} languages={offer.languages} tools={offer.tools}   />)}
                </div>
            </main>
        </>
    )
}