import { db } from "@/firebase";
import { openLoginModal } from "@/redux/modalSlice";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TweetInput() {
  const user = useSelector((state) => state.user);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  async function sendTweet() {

    if (!user.username) {
      dispatch(openLoginModal())
      return
    }

    setLoading(true)
    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });

    setText("")
    setLoading(false)
  }

  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={user.photoUrl || "/assets/twitter-logo.png"}
      />

      {loading && <h1 className="text-2xl text-gray-500">Uploading post...</h1>}
      
      {!loading && (<div className="w-full">
        <textarea
          placeholder="What's on your mind?"
          className="bg-transparent resize-none outline-none w-full
                min-h-[50px] text-lg
                "
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div className="flex justify-between border-t border-gray-700 pt-4">
          {/* ICONS DIV */}
          <div className="flex space-x-0">
            <div className="iconAnimation">
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconAnimation">
              <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
          </div>
          
          <button
          onClick={sendTweet}
          disabled={!text}
           className="bg-[#1d9bf0] rounded-full px-4 py-1.5 
           disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>)}
    </div>
  );
}
