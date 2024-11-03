
export default function Sidebar({setPage, setActive, active}) {

    return(
        <div className={active ? "sidebar" : "sidebar none"}>
        <div
          onClick={() => (active ? setActive(false) : setActive(true))}
          className={active ? "hamburger hamburger_active" : "hamburger"}
        >
          <div className="hamburger1"></div>
          <div className="hamburger2"></div>
          <div className="hamburger3"></div>
        </div>
        <div className="sidebar_inner">
          <div
            onClick={() => {
              setActive(false);
              setPage("tour");
            }}
          >
            tour
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("about");
            }}
          >
            about
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("store");
            }}
          >
            store
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("music");
            }}
          >
            music
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("videos");
            }}
          >
            videos
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("shows");
            }}
          >
            shows
          </div>
          <div
            onClick={() => {
              setActive(false);
              setPage("gallery");
            }}
          >
            gallery
          </div>
        </div>
      </div>
        )
    }
    