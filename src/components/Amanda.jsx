
import Amanda from "../img/Amanda.png";

export default function AmandaComponent({amandaMessage}) {

    return(
        <div className="amanda_container">
        <img className="amanda" src={Amanda} alt="" />
        <div
          className={
            amandaMessage?.length > 0
              ? "amanda_message amanda_message_active"
              : "amanda_message"
          }
        >
          {/* <div className={"amanda_thank_you_text"}>Thank you for registering for Firstklaz & Friends! Can't wait to see you there!</div> */}
          {amandaMessage === "guess" && (
            <div className={"amanda_thank_you_text"}>
              Hey there, It's Amanda. Guess the release date of "Y2K DISCO" and
              stand and get access to the official cover art before anyone does!
            </div>
          )}
          {amandaMessage === "got it" && (
            <div className={"amanda_thank_you_text"}>
              Congratulations! Now you have access to the offical cover art for
              "Y2K DISCO" don't share it with anyone!
            </div>
          )}
          {amandaMessage === "subscribed" && (
            <div className={"amanda_thank_you_text"}>
              Congratulations! You're officially a Firstklaz Citizen
            </div>
          )}
          {/* <div className={"amanda_thank_you_text"}>Opps! you didn't get it right. Thank you for trying!</div> */}
          <div className="tip"></div>
        </div>
      </div>
        )
    }
    