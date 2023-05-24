import React, { useState, useEffect } from "react";
import NewPostPageTopBar from "../../components/NewPostPageTopBar/NewPostPageTopBar";
import DatePicker from "../../components/DatePicker/DatePicker";
import GroupSizePicker2 from "../../components/CreatePost/GroupSizePicker2";
import PriceRangeSlider2 from "../../components/CreatePost/PriceRangeSlider2";
import HotelNeighborhoodForm from "../../components/CreatePost/HotelNeighborhoodForm";
import { Card, Toast } from "flowbite-react";
import Post from "../../components/Post/Post";
import RoommatePreferenceForm from "../../components/CreatePost/RoommatePreferenceForm";
import AboutYouForm from "../../components/CreatePost/AboutYouForm";
import { useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi";

function ErrorToast({ onClose, errorMessage }) {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
        <HiX className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{errorMessage} </div>
      <Toast.Toggle onClick={onClose} />
    </Toast>
  );
}

function formatDateObject(dateStr) {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1; // Month value is zero-based, so add 1
  const day = date.getDate();

  return `${month}/${day}`;
}

function NewPostPage() {
  const navigate = useNavigate();

  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [postId, setPostId] = useState(100); // Initial postId value is 100 for new posts
  // Retrieve the postId from localStorage on component mount
  useEffect(() => {
    const savedPostId = localStorage.getItem("postId");
    if (savedPostId) {
      setPostId(parseInt(savedPostId));
    }
  }, []);

  const [eventName, setEventName] = useState("");
  const [checkInDate, setCheckInDate] = useState("1/1");
  const [checkOutDate, setCheckOutDate] = useState("12/30");

  const [hasFemaleCnt, setHasFemaleCnt] = useState(0);
  const [hasMaleCnt, setHasMaleCnt] = useState(0);
  const [hasOtherCnt, setHasOtherCnt] = useState(0);

  const [wantFemaleCnt, setWantFemaleCnt] = useState(0);
  const [wantMaleCnt, setWantMaleCnt] = useState(0);
  const [wantOtherCnt, setWantOtherCnt] = useState(0);

  const [priceRange, setPriceRange] = useState([0, 1000]);

  const [coverImages, setCoverImages] = useState([]);

  const [selfIntro, setSelfIntro] = useState("");
  const [preferences, setPreferences] = useState("");

  const [bookingStatus, setBookingStatus] = useState("");
  const [hotel, setHotel] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  const handleCloseErrorToast = () => {
    setShowErrorToast(false);
  };

  const handleCoverImageChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    const missingFields = [];
    if (!eventName) missingFields.push("Event name");
    if (hasFemaleCnt + hasMaleCnt + hasOtherCnt < 1)
      missingFields.push("Number of people in your group");
    if (wantFemaleCnt + wantMaleCnt + wantOtherCnt < 1)
      missingFields.push("Number of people your group is looking for");
    if (!selfIntro) missingFields.push("Self introduction");
    if (!preferences) missingFields.push("Roommate preferences");
    if (!bookingStatus) missingFields.push("Hotel Searching Status");
    if (!hotel && !neighborhood)
      missingFields.push("Hotel/neighborhood information");

    if (
      !eventName ||
      hasFemaleCnt + hasMaleCnt + hasOtherCnt === 0 ||
      wantFemaleCnt + wantMaleCnt + wantOtherCnt === 0 ||
      !priceRange ||
      !selfIntro ||
      !preferences ||
      !bookingStatus ||
      (!hotel && !neighborhood)
    ) {
      // If any required field is empty, display an error toast
      setShowErrorToast(true);
      setErrorMessage("Missing: " + missingFields.join(", ") + ".");
      return;
    }

    // Create a new post object based on the form data
    const newPost = {
      postId: postId,
      images:
        coverImages.length > 0
          ? coverImages
          : [
              "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
            ], // Array of image URLs
      event: eventName,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      hasNumGenders: [hasFemaleCnt, hasMaleCnt, hasOtherCnt],
      wantNumGenders: [wantFemaleCnt, wantMaleCnt, wantOtherCnt],
      // ... other form data ...
      priceRange: priceRange,
      bookingStatus: bookingStatus,
      hotel: hotel,
      neighborhoodList: [neighborhood],
      selfIntro: selfIntro,
      roommatePreference: preferences,
    };

    setPostId((prevId) => prevId + 1); // increment postId by 1
    // Save the updated postId to localStorage
    localStorage.setItem("postId", postId + 1);

    navigate("/DYScovery-code/results", { state: { newPost: newPost } });
  };

  return (
    <div className="min-h-screen flex-col items-center justify-between p-8 relative">
      <NewPostPageTopBar />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 space-x-6">
          <div className="px-4 col-span-3 space-y-3">
            <Card>
              <h1 className="text-xl font-bold dark:text-white">
                Basic Information
              </h1>
              {/* Event name */}
              <div>
                <h2
                  htmlFor="event name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Event Name
                </h2>
                <input
                  type="text"
                  id="event-name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                />
              </div>

              {/* Check in/out dates */}
              <div>
                <h2
                  htmlFor="check-in/out dates"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Check-in/out Dates
                </h2>
                <div className="flex items-center">
                  <DatePicker
                    dateTitle="Check-in Date"
                    showTitle={false}
                    onChange={(selectedDate) => {
                      setCheckInDate(formatDateObject(selectedDate));
                    }}
                    isStart={true}
                  />
                  <span className="mx-4 text-gray-500">to</span>
                  <DatePicker
                    dateTitle="Check-out Date"
                    showTitle={false}
                    onChange={(selectedDate) => {
                      setCheckOutDate(formatDateObject(selectedDate));
                    }}
                    isStart={false}
                  />
                </div>
              </div>

              {/* Group gender numbers */}
              <div>
                <h2
                  htmlFor="current roommate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  We are a Group of
                </h2>
                <div className="flex justify-between space-x-6 mb-3">
                  <GroupSizePicker2
                    gender="Female"
                    onChange={(newSize) => {
                      setHasFemaleCnt(newSize);
                    }}
                  />
                  <GroupSizePicker2
                    gender="Male"
                    onChange={(newSize) => {
                      setHasMaleCnt(newSize);
                    }}
                  />
                  <GroupSizePicker2
                    gender="Non-Binary"
                    onChange={(newSize) => {
                      setHasOtherCnt(newSize);
                    }}
                  />
                </div>
                <h2
                  htmlFor="future roommate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  We are Looking For
                </h2>
                <div className="flex justify-between space-x-6">
                  <GroupSizePicker2
                    gender="Female"
                    onChange={(newSize) => {
                      setWantFemaleCnt(newSize);
                    }}
                  />
                  <GroupSizePicker2
                    gender="Male"
                    onChange={(newSize) => {
                      setWantMaleCnt(newSize);
                    }}
                  />
                  <GroupSizePicker2
                    gender="Non-Binary"
                    onChange={(newSize) => {
                      setWantOtherCnt(newSize);
                    }}
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h2
                  htmlFor="price range"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Budget per room per day
                </h2>
                <PriceRangeSlider2
                  onChange={(newRangeValues) => setPriceRange(newRangeValues)}
                />
              </div>

              {/* Cover Image */}
              <div>
                <h2
                  htmlFor="cover image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cover Image(s)
                </h2>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="cover_image"
                  type="file"
                  multiple
                  onChange={handleCoverImageChange}
                />
                <div
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="user_avatar_help"
                >
                  Upload some useful cover images to attract potential
                  roommates!
                </div>
              </div>
            </Card>

            <AboutYouForm onChange={(value) => setSelfIntro(value)} />
            <RoommatePreferenceForm
              onChange={(value) => setPreferences(value)}
            />
            <HotelNeighborhoodForm
              onBookingStatusChange={(value) =>
                value.startsWith("hotel")
                  ? setBookingStatus("booked")
                  : setBookingStatus("not-booked")
              }
              onNeighborhoodInfoChange={(value) => {
                setNeighborhood(value);
                setHotel("");
              }}
              onHotelInfoChange={(value) => {
                setNeighborhood("");
                setHotel(value);
              }}
            />
          </div>

          <div className="col-span-1">
            <div className="sticky top-40 grid space-y-6">
              {showErrorToast && (
                <ErrorToast
                  onClose={handleCloseErrorToast}
                  errorMessage={errorMessage}
                />
              )}
              <div className="grid place-items-center font-medium text-lg">
                Listing Preview
              </div>
              <Post
                images={
                  coverImages.length > 0
                    ? coverImages
                    : [
                        "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
                      ]
                }
                event={eventName ? eventName : "Your Event Name"}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                hasNumGenders={[hasFemaleCnt, hasMaleCnt, hasOtherCnt]}
                wantNumGenders={[wantFemaleCnt, wantMaleCnt, wantOtherCnt]}
                priceRange={priceRange}
                hotel={hotel}
                neighborhoodList={
                  neighborhood ? [neighborhood] : ["Your neighborhood listing"]
                }
                isClickable={false}
              />
              <div className="grid place-items-center">
                <button
                  type="submit"
                  className="mt-2 px-6 py-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPostPage;
