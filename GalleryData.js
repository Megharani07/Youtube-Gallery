import React from "react";

const Videos = [
  {
    id : 1,
    thumbnail: 'https://i.ytimg.com/vi/d72vXhJDE6M/maxresdefault.jpg',
    title: 'Tuition Classes aur Bacche || BY Ashish Chanchlani',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 1000,
    likes: 500,
  },
 {
    id : 2,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3egQ8xB5pXpzj6l6iSt6pqmDpPpkfwaxCg&usqp=CAU',
    title: 'Sasta Biig Bosss 2 | Parody | Ashish Chanchlani',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 500,
    likes: 300,
  },
  {
    id : 3,
    thumbnail: 'https://i.ytimg.com/vi/J-zn8PdvZOU/maxresdefault.jpg',
    title: 'Final Exams || By Ashish Chanchlani',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 900,
    likes: 700,
  },
  {
    id : 4,
    thumbnail: 'https://i.ytimg.com/vi/00uSdO8DefQ/hqdefault.jpg',
    title: 'PARENT TEACHERS MEETING ft.Ashish Chanchlin || By ashish chanchlin',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 900,
    likes: 400,
  },
  {
    id : 5,
    thumbnail: 'https://i.ytimg.com/vi/Xd5yIXCHeEo/maxresdefault.jpg',
    title: 'Filte Copy || every exam preparation || Ashish chanchlin',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 200,
    likes: 100,
  },
  {
    id : 6,
    thumbnail: 'https://s1.dmcdn.net/v/KnVGB1ZlLI0j-GBJD/x720',
    title: 'Ashish chanchlin best vines copmilation video',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 90,
    likes: 80,
  },
  {
    id : 7,
    thumbnail: 'https://s2.dmcdn.net/v/NhF3J1R7Pa7CUyCxi/x1080',
    title: 'Ashish chanchlani best vines copmilation funny video Dailymotion',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 100,
    likes: 50,
  },
  {
    id : 8,
    thumbnail: 'https://i.ytimg.com/vi/Zr3PukaVXFo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANP3IqdznH2Jmj9ehQumWHPWmqwQ',
    title: 'Exams Vaccine Office || Ashish Chanchlani',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 100,
    likes: 100,
  },
  {
    id : 9,
    thumbnail: 'https://i.ytimg.com/vi/OCeqeJi_jYI/maxresdefault.jpg',
    title: 'Student life Bollywood vs reality || By Ashish chanchlani',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 80,
    likes: 70,
  },
  {
    id : 10,
    thumbnail: 'https://i.ytimg.com/vi/0yHA0o_Gwkg/maxresdefault.jpg',
    title: 'Super strict teacher Ashish chanchlani vs Rauntell saifi rafill',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 50,
    likes: 20,
  },
  {
    id : 11,
    thumbnail: 'https://i.ytimg.com/vi/wNDj7RxuXdU/maxresdefault.jpg',
    title: 'the Student Anthem || Ashish chanchlani | Raftar | shakespear',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 70,
    likes:20,
  },
  {
    id : 12,
    thumbnail: 'https://i.ytimg.com/vi/d72vXhJDE6M/maxresdefault.jpg',
    title: 'Tuition Classes aur Bacche || BY Ashish Chanchlani',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZVYOepe_d6tmkh_kHVsw9hbZD-nFPABWHnc6cgUw=s176-c-k-c0x00ffffff-no-rj-mo',
    channelName: 'Ashish Chanchlani Vines',
    views: 50,
    likes: 10,
  },
  
];



const GalleryData = () => {
  return (
  <div className="Gallery">
    {Videos.map((video) => (
  <div className="video-card" key={video.id}>
    <img className="thumbnail" src={video.thumbnail} alt={video.title}/>
    <p>{video.title}</p>

    <div className="img-url">
    <img className="logo-image" width="28px"  src={video.channelLogo}/>
    <span className="channel-name">{video.channelName}</span>
 </div>
 <div className="details">
   <p>{video.likes} Likes</p>
   <p>{video.views} Views</p>
 </div>
 </div>
    ))}
</div>
  );
};

export default GalleryData;

