/* eslint-disable no-unused-expressions */
import "./Offer.css";

export function Offer({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  setKeywords,
  keywordsState
  
}) {

  const selectTool = (event) => {
    console.log("Clicked !")
    if (
      !keywordsState.includes(
        event.target.innerText
      )
    ) {
        setKeywords([
        ...keywordsState,
        event.target.innerText,
      ]
      );
    }
    console.log(keywordsState)

  };


  return (
    <div 
      className="offer"
      style={{
        borderLeft:
          isNew && isFeatured ? "4px solid hsl(180, 29%, 50%)" : "none",
      }}
    >
      <div className="left">
        <img src={logo} alt="" />
        <div className="info">
          <div>
            <p className="cName">{company}</p>
            <p
              className="new"
              style={{ display: isNew === true ? "block" : "None" }}
            >
              NEW!
            </p>
            <p
              className="featured"
              style={{ display: isFeatured === true ? "block" : "None" }}
            >
              FEATURED
            </p>
          </div>
          <p className="position">{position}</p>
          <div>
            <p className="postDate">{postedAt}</p>
            <p className="point">.</p>
            <p className="contract">{contract}</p>
            <p className="point">.</p>
            <p className="location">{location}</p>
          </div>
        </div>
      </div>

      <div className="right">
        <p className="role" onClick={selectTool}>
          {role}
        </p>
        <p className="level" onClick={selectTool}>
          {level}
        </p>
        {languages.map((language) => (
          <p key={languages.indexOf(language)} className="lang" onClick={selectTool}>
            {language}
          </p>
        ))}
        {tools.map((tool) => (
          <p key={tools.indexOf(tool)} className="tool" onClick={selectTool}>
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
