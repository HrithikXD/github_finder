import React from "react";

function Stats({ icon = null, stat_text='', stat_obj, link = false,url='' }) {
  if (icon) {
    return (
      <div className="stat">
        <div className="stat-figure text-secondary">{icon}</div>
        <div className="stat-title pr-5">{stat_text}</div>

        <div className="stat-value pr-5 text-3xl md:texxt-4xl">
          {link && (
            <a href={url} target="_blank" rel="noreferrer">
              {stat_obj}
            </a>
          )}
          {!link && stat_obj}
        </div>
      </div>
    );
  } else {
    return (
      <div className="stat">
        <div className="stat-title text-md">{stat_text}</div>
        <div className="text-lg stat-value">
        {link && (
            <a href={url} target="_blank" rel="noreferrer">
              {stat_obj}
            </a>
          )}
          {!link && stat_obj}
        </div>
      </div>
    );
  }
}

export default Stats;
