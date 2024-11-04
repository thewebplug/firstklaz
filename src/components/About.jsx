export default function About() {
  const handlePdfDownload = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch("/firstklaz-epk.pdf");
      const blob = await response.blob();

      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "firstklaz-epk.pdf";

      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the blob URL to free up memory
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div className="hero">
      <div className="bio">
        Firstklaz, a rising star from Abuja, Nigeria, is redefining Afrobeats
        and Afro-fusion with his innovative blend of Afrobeats, R&B, hip-hop,
        and Fuji. Drawing inspiration from Bob Marley and Fela Kuti, his music
        is described as sonically pleasing, fresh, nostalgic, and entertaining.
        His 2024 breakout single, “Gen-Z Fuji,” became a cultural hit, endorsed
        by artists like Joeboy, Zlatan, and ODUMODUBLVCK, and featured in top
        publications such as 
        <span className="bio_link">
                      {" "}
                      <a
                        href="https://thenativemag.com/tag/firstklaz/"
                        target="blank"
                      >
        TheNativeMag
        </a>
        </span>
         ,  
         <span className="bio_link">
                      {" "}
                      <a
                        href="https://grungecake.com/tag/firstklaz#google_vignette"
                        target="blank"
                      >
         GrungeCake
         </a>
         , 
         <span className="bio_link">
                      {" "}
                      <a
                        href="https://www.wordplaymagazine.com/blog-1/2023/6/21/firstklaz-x-hitsound-i-like-girls-single"
                        target="blank"
                      >
                        WordPlay
                      </a>
                    </span>, 
                    <span className="bio_link">
                      {" "}
                      <a
                        href="https://imullar.com/2023/06/19/on-rotation-songs-you-need-in-your-life-this-week-89/"
                        target="blank"
                      >
                        IMullar
                      </a>
                    </span> and <span className="bio_link">
                      {" "}
                      <a
                        href="https://ameyawdebrah.com/hitmakers-firstklaz-and-hitsound-team-up-for-summer-anthem-i-like-girls/"
                        target="blank"
                      >
                        AmeyawDebrah
                      </a>
                    </span>
         </span>
         . His follow-up, “Gen-Z
        Fuji II,” featuring Terry Apala, and “Gen-Z Faaji,” with Joeboy, further
        established his fearless approach to blending traditional and modern
        sounds. With a powerful social media presence, Firstklaz’s vibrant
        performances and live renditions have captivated fans globally. Featured
        in GrungeCake’s first magazine in partnership with British Airways,
        spotlighting his track his releases, life and journey. “Gen-Z Arewa,” a
        perfect fusion of traditional drums and modern beats pays homage to his
        Northern roots. This achievement marked him as a global sensation,
        receiving co-signs from Nigerian music legends like Olamide and
        contemporary stars like Blaqbonez, Skales, Mr Eazi, reinforcing his
        status as a force to be reckoned with. Firstklaz’s momentum continues to
        build with each release and appearance, characterized by a relentless
        drive for creativity and a mission to elevate African Music to the
        global stage. With an unwavering commitment to his craft and a fearless
        approach to innovation.
      </div>
      <button onClick={handlePdfDownload}>Download EPK</button>
    </div>
  );
}
