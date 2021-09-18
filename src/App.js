import { React, useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import { fetchGallery } from "./services/gallery-api";
import { smoothScroll } from "./services/smoothScroll";
import { ToastContainer, toast } from "react-toastify";
import Loader from "react-loader-spinner";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reqStatus, setReqStatus] = useState("idle");
  const [largeImgUrl, setLargeImgUrl] = useState("");

  useEffect(() => {
    if (!searchValue) return;

    (async () => {
      try {
        setReqStatus("pending");
        setLargeImgUrl("");

        const images = await fetchGallery(searchValue);
        if (images.length === 0) {
          toast.error(
            "Sorry, there are no images matching your search query. Please try again.",
            {
              autoClose: 3000,
            }
          );
        }
        setReqStatus("resolved");
        setGallery(images);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchValue]);

  const handleLoadMore = async () => {
    setPage((prev) => prev + 1);
    const images = await fetchGallery(searchValue, page + 1);
    setGallery((prev) => [...prev, ...images]);
    smoothScroll();
  };

  const handleSubmit = (searchValue) => {
    setGallery([]);
    setSearchValue(searchValue);
    setPage(1);
  };

  const handleLargeImgUrl = (e) => {
    setIsModalOpen(true);
    setLargeImgUrl(e.target.dataset.large);
  };

  const toggleModal = () => {
    setIsModalOpen(false);
  };

  if (reqStatus === "pending") {
    return (
      <div className="Container">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000}
        />
      </div>
    );
  }

  const galleryLength = gallery.length > 1;
  return (
    <div className="Container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery onClick={handleLargeImgUrl} gallery={gallery} />
      {galleryLength && <Button onClick={handleLoadMore}>Load more</Button>}
      {isModalOpen && (
        <Modal src={largeImgUrl} onClose={toggleModal}>
          <div style={{ width: 900 }}>
            <img src={largeImgUrl} alt="" />
          </div>
        </Modal>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
