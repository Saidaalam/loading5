import teamPic from '../../../../images/team.png';
import 'animate.css';
const TeamInfo = () => {
    return (
            <div className="hero mt-10 rounded-xl bg-base-200 animate__slideInLeft">
  <div className="hero-content flex-col lg:flex-row">
    <img src={teamPic} className="max-w-lg h-96 rounded-lg shadow-2xl" />
    <div className='ml-10'>
      <h1 className="text-5xl font-bold animate__animated animate__fadeInLeft">Meet the Team</h1>
      <p className="py-6 animate__animated animate__fadeInLeft">With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties. <br/> <br/>Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council.<br/> <br/> With her years of experience, impressive property portfolio, celebrity clientele, and unparalleled knowledge of the market and pedigree estates, Simone estimable business is sophisticated and renowned.</p>
      <button className="btn bg-slate-900 text-white">Contact Us</button>
    </div>
  </div>
</div>
    );
};

export default TeamInfo;