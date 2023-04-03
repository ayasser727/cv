import React from "react";
import PageLayout from "../Layouts/PageLayout";
import SectionTitle from "../section-title/SectionTitle";
import CertificateCard from "../cards/CertificateCard";
import { Grid } from "@mui/material";
import { certificates } from "@/common/data";
// import ImageViewer from "react-simple-image-viewer";
function Certificate() {
  //   const [currentImage, setCurrentImage] = useState(0);
  //   const [isViewerOpen, setIsViewerOpen] = useState(false);
  //   const images = [
  //     "http://placeimg.com/1200/800/nature",
  //     "http://placeimg.com/800/1200/nature",
  //     "http://placeimg.com/1920/1080/nature",
  //     "http://placeimg.com/1500/500/nature",
  //   ];
  //   const openImageViewer = useCallback((index) => {
  //     setCurrentImage(index);
  //     setIsViewerOpen(true);
  //   }, []);

  //   const closeImageViewer = () => {
  //     setCurrentImage(0);
  //     setIsViewerOpen(false);
  //   };
  return (
    <>
      <PageLayout className="animate__animated" id="certificate">
        <SectionTitle title="Certificates" />
        <Grid container spacing={6}>
          {certificates.map((cert, idx) => (
            <Grid item lg={6} md={12} sm={6} xs={12} key={cert.title}>
              <CertificateCard
                cert={cert}
                // onClick={() => openImageViewer(idx)}
              />
            </Grid>
          ))}
        </Grid>
      </PageLayout>
      {/* {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )} */}
    </>
  );
}

export default Certificate;
