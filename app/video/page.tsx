import Video from 'next-video';
import myVideo from '/videos/1.mp4'; 
 
export default function VideoPage() { 
   return <Video src={myVideo} style={{maxWidth: '42rem'}} accentColor='#ffd700' />;
}