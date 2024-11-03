export default function About() {

    const handlePdfDownload = async () => {
        try {
          // Fetch the PDF file
          const response = await fetch("/firstklaz-epk.pdf");
          const blob = await response.blob();
          
          // Create a blob URL
          const blobUrl = window.URL.createObjectURL(blob);
          
          // Create a temporary link element
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = "firstklaz-epk.pdf";
          
          // Append to document, click, and cleanup
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          
          // Revoke the blob URL to free up memory
          window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
          console.error('Error downloading PDF:', error);
        }
      };

return(
    <div className="hero">
                  

                  <div className="bio">
                    Fast-rising Afrobeats/Afro-fusion prodigy Firstklaz aka
                    young don aka helicopter boy is a singer/songwriter based in
                    Abuja, Nigeria. His stage name arose due to the high
                    academic position he maintained in high school. The
                    23-year-old has been singing since he was 10 years old,
                    learning the basics of music from his church choir, and has
                    released 11 singles that have been accepted by his fans
                    across the world. He combines creative world play and an
                    array of genres such as Afrobeats, R&B, and hip-hop to give
                    birth to his unique sound. His distinctive style of fashion
                    and music, influenced by listening to artists such as Bob
                    Marley, Fela, and other greats while growing up, has earned
                    him cosigns from Afrobeat stars such as{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://www.instagram.com/reel/Cse0U1yg0FR/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                        target="blank"
                      >
                        Joeboy
                      </a>
                    </span>{" "}
                    as well as articles from top magazines such as{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://thenativemag.com/native-selects-omah-lay-libianca/#:~:text=Nigerian%20musicians%20Firstklaz,an%20eye%20on."
                        target="blank"
                      >
                        TheNativeMag
                      </a>
                      ,
                    </span>{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://www.wordplaymagazine.com/blog-1/2023/6/21/firstklaz-x-hitsound-i-like-girls-single"
                        target="blank"
                      >
                        WordPlay
                      </a>
                      ,
                    </span>{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://imullar.com/2023/06/19/on-rotation-songs-you-need-in-your-life-this-week-89/"
                        target="blank"
                      >
                        IMullar
                      </a>
                    </span>{" "}
                    and{" "}
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://ameyawdebrah.com/hitmakers-firstklaz-and-hitsound-team-up-for-summer-anthem-i-like-girls/"
                        target="blank"
                      >
                        AmeyawDebrah
                      </a>
                    </span>
                    . He continues to spread the gospel that is his music as he
                    continues to push for global stardom.
                  </div>
                  <button
                  onClick={handlePdfDownload}
                  >Download EPK</button>
                </div>)
}
