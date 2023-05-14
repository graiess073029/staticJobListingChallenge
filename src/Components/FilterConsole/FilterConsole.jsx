/* eslint-disable no-unused-expressions */
import "Components/FilterConsole/FilterConsole.css";

import { ReactComponent as Remove } from "assets/images/icon-remove.svg";

export function FilterConsole({ keywords, setKeywords }) {
    
    const removeElement = (event) => {
        setKeywords(keywords.filter(element => {
            let parent;
            event.target.tagName === 'svg' ? parent = event.target.parentElement.parentElement : 
            event.target.tagName === 'path' ? parent = event.target.parentElement.parentElement.parentElement : 
            parent = event.target.parentElement
            if(element !== parent.firstChild.innerText) {return element}
            return null}));
    };

    const clear = event => setKeywords([])


    return (
        <div className="console" style={{display : keywords.length === 0 ? "none" : "flex"}}>
            <ul className="selected">
                {keywords.map( element=> { 
                    return(<li key={keywords.indexOf(element)} className="element">
                                <p>{element}</p>
                                <div onClick={removeElement} >
                                    <Remove />
                                </div>
                            </li>)
        })}
            </ul>
            <p onClick={clear} className="clear">Clear</p>
        </div>
    );
}
