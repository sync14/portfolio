import { useState } from "react";
import  emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function App() {
  const [show,setShow] = useState(false);
  const [skill,setSkill] = useState(false);
  const [explain,setExplain] = useState("Touch me to reveal my path")
  const [detail,setDetail] = useState("A website built using Tailwind Css and React.js that allows users to search for images by name using Pixabay api")
  const [image,setImage] = useState({src:"./img/snapsearch.jpg" ,width :1280 ,height :894 , detail :"A website built using Tailwind Css and React.js that allows users to search for images by name using Pixabay api",
  name :"Snap Search"})
  const [sent,setSent] = useState(false)
  const imgArr =[
    {src:"./img/snapsearch.jpg" ,width :1280 ,height :894 , 
    detail :"A website built using Tailwind Css and React.js that allows users to search for images by name using Pixabay api",
     name :"Snap Search"},

    {src:"./img/fun.jpg" ,width :1280 ,height :908 ,
     detail :"A fun website that allows users to translate into their favourite characters using Fun Translation api",
      name :"Fun Translation"},

    {src:"./img/dd.jpg" ,width :1280 ,height :905 ,
     detail :"A daily diary platform where users can post,delete, and edit their entries using Axios for data handling", 
     name :"Daily Diary"}
  ]
  const [count,setCount] = useState(1);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');


  const handleSubmit=(e)=>{
    e.preventDefault();
    const serviceId ='service_ywfz6yf'
    const templateId ='template_6oor3yk'
    const publicKey ='JSNqEt5pq8ZT-SAj-'
    const templateParams ={
      from_name : name,
      from_email : email,
      to_name : "Soe Yan Naing",
      message : message
    }
     emailjs.send(serviceId, templateId, templateParams, publicKey);
    setName('')
    setEmail('')
    setMessage('')
      
        setSent(true)
        setInterval(() => {
          setSent(false)
        }, 3000);
    
  }
  
  const increase=()=>{
      count===2?setCount(0):setCount(count+1)
      setImage(imgArr[count])
      setDetail(imgArr[count].detail)
  }
  const decrease=()=>{
      count===0?setCount(2):setCount(count-1)
      setImage(imgArr[count])
      setDetail(imgArr[count].detail)
  }

  const handleShow =()=>{
    setShow(!show);
  }
  const handleSkill =()=>{
    setSkill(!skill);
    explain==="Touch me to reveal my path"?setExplain("This is how I come along"):setExplain("Touch me to reveal my path")
  }

  const handlePath=(s)=>{
      setExplain(s);
  }
  const replacePath=()=>{
      setExplain("This is how I come along");
  }
  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  
  return (
    <>
    <header className="bg-[#222831] flex justify-between p-2 sticky  z-10  border-b-2 border-[#fd7014] top-0 w-screen font-Concert text-[#eee] px-4" >
      <button>
        <a href="/">
          <img src="./img/logo.png" alt="logo"  className=" w-12 h-12 sm:w-14 sm:h-14" />
        </a>
      </button>
      <nav aria-label="main-navigation" className="hidden sm:block grow max-w-xl my-auto w-full">
        <menu className=" flex justify-evenly text-white items-center">
         <li><a href="#hero" className="font-bold text-xl hover:bg-[#eee] hover:text-[#393e46] px-6 py-2 rounded-xl">Home</a></li>
         <li><a href="#path" className="font-bold text-xl hover:bg-[#eee] hover:text-[#393e46] px-6 py-2 rounded-xl">Path</a></li>
         <li><a href="#exploration" className="font-bold text-xl hover:bg-[#eee] hover:text-[#393e46] px-6 py-2 rounded-xl">Exploration</a></li>
         <li ><a href="#connect" className="font-bold text-xl hover:bg-[#eee] hover:text-[#393e46] px-6 py-2 rounded-xl">Connect</a></li>
        </menu>
      </nav>
      {show&&
      <nav aria-label="mobile_menu" className=" fixed top-0 right-0 opacity-85 flex bg-[#333] items-start rounded-xl" >
       
        <menu className="flex-col  h-1/2 p-6 justify-evenly rounded-lg">
        <li className=" my-4"><a href="#hero" onClick={handleShow} className="font-bold text-xl hover:bg-[#eee] hover:text-[#393e46] px-6 py-2 rounded-lg">Home</a></li>
         <li className=" my-4"><a href="#path" onClick={handleShow} className="font-bold text-xl hover:bg-[#eee] hover:text-[#393e46] px-6 py-2 rounded-lg">Path</a></li>
         <li className=" my-4"><a href="#exploration" onClick={handleShow} className="font-bold text-xl hover:bg-[#eee] hover:text-[#393e46] px-6 py-2 rounded-lg">Exploration</a></li>
         <li className=" my-4"><a href="#connect" onClick={handleShow} className="font-bold text-xl hover:bg-[#eee] hover:text-[#393e46] px-6 py-2 rounded-lg">Connect</a></li>
        </menu>

        <button className=" text-white text-5xl hover:text-[#fd7014] p-4 rounded-md " onClick={handleShow}>
        &times;
        </button>
      </nav>
}
{!show&&
      <button className=" text-white w-14 h-14 text-4xl font-bold sm:hidden hover:text-[#fd7014]" onClick={handleShow} >
       &#9776;
      </button>
}
    </header>
    <main className="bg-[#222831] text-[#eee] w-screen scroll-smooth" >
      <section  id="hero" className=" min-h-screen flex items-center justify-evenly p-4 scroll-mt-10 sm:scroll-mt-24">
        <motion.article className=" p-4" initial={{opacity:0,scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1,ease:"easeOut" ,delay : 0.2}}>
          <h1 className=" font-Bree text-3xl font-bold lg:text-4xl  leading-10 py-2">Hi, I'm <span className="text-[#fd7014]">Soe Yan Naing</span>
          </h1>
          <h2 className=" font-Bree text-xl font-bold lg:text-2xl  leading-10">
          I'm a Frontend Devleoper
          </h2>
          <p className=" font-Permanent py-4 text-lg sm:text-2xl">I specialize in coding for user interaction</p>
          <motion.button className="p-2 px-4 bg-[#fd7014] text-[#222831] rounded-2xl font-Concert" whileTap={{scale:0.9}} whileHover={{scale:1.1, color: "#eee"}} transition={{bounceDamping:10,bounceStiffness:600}}><a href="./SoeYanNaing-CV.pdf" download="./SoeYanNaingCvForm.pdf">
            Download CV <img src="./img/download.png" width={512} height={512} alt="download icon" className=" w-4  h-4  inline-block"  /> 
            </a></motion.button>
        </motion.article>

        <motion.figure className="relative cursor-pointer" initial={{opacity:0,scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1,ease:"easeOut" ,delay : 0.2}}>
        <figcaption className=" p-6 border-[#fd7014] border rounded-full font-Concert font-bold text-xl lg:text-2xl">
            Welcome to my Coding Adventure
          </figcaption>
          <img src="./img/character.png" alt="character" width={408} height={612}/>
         
        </motion.figure>
      </section>

      <hr className="w-2/3 mx-auto border-[#fd7014] border" />

     <section id="path" className="min-h-screen p-4 scroll-mt-12 sm:scroll-mt-14 px-6">
      <h2 className=" font-Permanent font-bold text-4xl mb-10 ml-6">Path</h2>
     <article className=" grid grid-cols-1 lg:grid-cols-2 justify-center">
      <motion.figure className="relative cursor-pointer flex items-center w-2/3 flex-col mx-auto" onClick={handleSkill} initial={{opacity:0,scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1,ease:"easeOut" ,delay : 0.2}}>
       
      <figcaption className="border-[#fd7014] border rounded-full font-Concert sm:font-bold lg:text-2xl p-4 text-center">
         {explain}
          </figcaption>
          <img src="./img/skill-character.png" alt="skill character" width={500} height={500}/>
         
        </motion.figure>
        {skill?
        <motion.article className=" p-4 grid grid-cols-2 w-2/3 sm:grid-cols-3 gap-4 mx-auto" variants={container} initial="hidden" animate="visible">
          <motion.figure variants={item}>
            <img src="./img/html.png" alt="html logo" width={204} height={204}  className=" w-full h-auto border border-[#eee] p-4 rounded-lg hover:backdrop-contrast-150 cursor-pointer"  onMouseOver={()=>handlePath("Html 5")} onMouseOut={replacePath}/>
          </motion.figure>
          <motion.figure variants={item}>
            <img src="./img/css.png" alt="css logo" width={323} height={323}  className=" w-full h-auto border border-[#eee] p-4 rounded-lg hover:backdrop-contrast-150 cursor-pointer" onMouseOver={()=>handlePath("Css 3")} onMouseOut={replacePath} />
          </motion.figure>
          <motion.figure variants={item}>
            <img src="./img/js.png" alt="javascript logo" width={322} height={322}  className=" w-full h-auto border border-[#eee] p-4 rounded-lg hover:backdrop-contrast-150 cursor-pointer" onMouseOver={()=>handlePath("Java Script")} onMouseOut={replacePath}/>
          </motion.figure>
          <motion.figure variants={item}>
            <img src="./img/tailwind.png" alt="tailwind logo" width={226} height={223}  className=" w-full h-auto border border-[#eee] p-4 rounded-lg hover:backdrop-contrast-150 cursor-pointer"  onMouseOver={()=>handlePath("Tailwind Css")} onMouseOut={replacePath}/>
          </motion.figure>
          <motion.figure variants={item}>
            <img src="./img/react.png" alt="react logo" width={225} height={225}  className=" w-full h-auto border border-[#eee] p-4 rounded-lg hover:backdrop-contrast-150 cursor-pointer"  onMouseOver={()=>handlePath("React Js")} onMouseOut={replacePath}/>
          </motion.figure>
      

        </motion.article>
        : 
        <motion.p className="grid place-content-center  text-9xl  mx-auto font-Concert cursor-pointer hover:rotate-45 m-auto" initial={{opacity:0,scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1,ease:"easeOut" ,delay : 0.2}}>
          ?
        </motion.p>
        }
        </article>
     </section>

     <hr className="w-2/3 mx-auto border-[#fd7014] border"/>

     <section id="exploration" className="min-h-screen  scroll-mt-10 sm:scroll-mt-12 p-6">

     <h2 className=" font-Permanent font-bold text-4xl mb-10 ml-6">Exploration</h2>
     <article className=" grid grid-cols-1 lg:grid-cols-2 justify-center">
     <motion.figure className="w-4/5 p-2 mx-auto" initial={{opacity:0,scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1,ease:"easeOut" ,delay : 0.2}}>
          <img src={image.src} alt={image.name} width={image.width}  height={image.height} className=" pb-6 border-b-2 border-[#fd7014]"/>
          <figcaption className=" font-Permanent text-2xl font-bold text-center mt-4 mb-2">{image.name}</figcaption>
          <motion.button className=" px-6 py-2 bg-[#eee] text-[#222831] m-4  rounded-xl font-bold font-Bree npmborder-[#fd7014] text-xl " onClick={decrease} whileTap={{scale:0.9}} whileHover={{scale:1.1, backgroundColor: "#fd7014"}} transition={{bounceDamping:10,bounceStiffness:600}}> &lt; </motion.button>
          <motion.button className=" px-6 py-2 bg-[#eee] text-[#222831] m-4  rounded-xl font-bold font-Bree npmborder-[#fd7014] text-xl" onClick={increase} whileTap={{scale:0.9}} whileHover={{scale:1.1, backgroundColor: "#fd7014"}} transition={{bounceDamping:10,bounceStiffness:600}}>&gt;</motion.button>
          
        </motion.figure>
      <motion.figure className="flex items-center w-full" initial={{opacity:0,scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1,ease:"easeOut" ,delay : 0.2}}>
          <img src="./img/exploration.png" alt="exploration" width={500} height={500} className=" w-1/2 h-auto cursor-pointer "  />
          <figcaption className="font-Concert sm:font-bold lg:text-2xl p-4 text-left  grow xl:h-1/2">
          {detail}
          </figcaption>
      </motion.figure>
        
       
      </article>
     </section>

     <hr className="w-2/3 mx-auto border-[#fd7014] border"/>

     <section id="connect" className="min-h-screen scroll-mt-10 sm:scroll-mt-10 p-6">
      <h2 className=" font-Permanent font-bold text-4xl mb-10 ml-6">Connect</h2>
      <article  className="grid grid-flow-row sm:grid-flow-col gap-6 ">
       
        <motion.figure className="w-1/2 flex-col items-center mx-auto gap-3" initial={{opacity:0,scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1,ease:"easeOut" ,delay : 0.2}}>
          <img src="./img/connect.png" alt="connect"  width={500} height={500} className=" mx-auto" />
          <figcaption className="flex justify-evenly mt-4">
          <motion.a href="https://www.facebook.com/soeyan.naing.161214?mibextid=JRoKGi"  target="_blank" rel="noreferrer" whileTap={{scale:0.9}} whileHover={{scale:1.1}} transition={{bounceDamping:10,bounceStiffness:600}}><img src="./img/facebook.png" alt="facebook" width={48} height={48}  className=" w-14 h-14"/></motion.a>
          <motion.a href="https://www.instagram.com/soe_yan_naing14?igsh=b3l1eGg0MHdkbGZo"  target="_blank" rel="noreferrer" whileTap={{scale:0.9}} whileHover={{scale:1.1}} transition={{bounceDamping:10,bounceStiffness:600}}><img src="./img/instagram.png" alt="instagram" width={48} height={48} className=" w-14 h-14"/></motion.a>
          <motion.a href="https://github.com/sync14"  target="_blank" rel="noreferrer" whileTap={{scale:0.9}} whileHover={{scale:1.1}} transition={{bounceDamping:10,bounceStiffness:600}}><img src="./img/github.png" alt="github" width={64} height={64} className=" w-14 h-14"/></motion.a>
          </figcaption>

        
        </motion.figure>
        
  
       <motion.form  onSubmit={handleSubmit} className=" mx-auto" initial={{opacity:0,scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:1,ease:"easeOut" ,delay : 0.2}}>
            <input type="text" name="name" id="name"  placeholder="Your name" required autoComplete="off" className=" bg-transparent border-b-2 border-[#fd7014] p-4 outline-none w-64 block mb-2 text-[#eee]" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="mail" name="email" id="email"  placeholder="Your email" required autoComplete="off"  className=" bg-transparent border-b-2 border-[#fd7014] p-4 outline-none w-64 block mb-4 text-[#eee]" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <textarea name="message" id="message" cols="30" rows="10" className=" bg-transparent border-2 border-[#fd7014] min-w-80 my-8 outline-none block rounded-xl p-4 text-[#eee]" required autoComplete="off" placeholder="Your message" value={message} onChange={(e)=>setMessage(e.target.value)}>
            </textarea>
            <motion.button type="submit" className="p-2 border-2 border-[#fd7014] px-8 rounded-full  font-bold" onSubmit={handleSubmit} whileTap={{scale:0.9}} whileHover={{scale:1.1, backgroundColor: "#fd7014"}} transition={{bounceDamping:10,bounceStiffness:600}}>Send</motion.button>
           {
            sent&&<p className=" mx-4 p-2 text-lime-500 font-bold  font-Concert inline-block ">sent <img src="./img/send.png" alt="send icon" width={512} height={512} className="w-6 h-6 inline-block ml-2" /></p>
           }
       </motion.form>
      </article>
     </section>
      
    </main>
    
      
    </>
  );
}

export default App;