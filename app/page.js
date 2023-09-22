import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
     // const navigate = useNavigate();
     return (
          <>
               <header>
                    <nav>
                         <div className="left">Chirag&apos;s Portfolio</div>
                         <div className="right">
                              <ul>
                                   <li><a href="/">Home</a></li>
                                   <li><a href="/">About</a></li>
                                   <li><a href="/">Service</a></li>
                                   <li><a href="/">Projects</a></li>
                                   <li><a href="/">Contact Me</a></li>
                              </ul>
                         </div>
                    </nav>
               </header>
               <main>
                    <section className="firstSection">
                         <div className="leftSection">
                              <div>Hi, My Name is <span className="purple">Chirag</span></div>
                              <div>and I am a Passionate</div>
                              <span id="element" />
                              <div className="buttons">
                              {/* <a clasName='btn' href="Vocabulary.pdf" download>Download Resume</a> */}      
                              <Link className="btn" href="Vocabulary.pdf" download="Vocabulary.pdf">Download Resume</Link>
                                   <Link href="https://github.com/Chirag1905?tab=repositories" className="btn">Visit Github</Link>
                              </div>
                         </div>
                         <div className="rightSection">
                              <Image src="/bg.png" width={400} height={325} alt="" />
                         </div>
                    </section>
                    <hr />
                    <section className="secondSection">     
                         <span className="text-gray">What I have done so far</span>
                         <h1>Work Experience</h1>
                         <div className="box">
                              <div className="vertical">
                                   <Image className="image-top" width={25} height={22} src="/developer.png" alt="" />
                                   <div className="verticla-text">
                                        HTML/CSS Developer
                                   </div>
                                   <div className="vertical-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo corporis
                                        voluptatum quibusdam vero excepturi placeat adipisci, praesentium in sit optio cum natus
                                        quo maxime officiis consectetur laudantium! Ipsam, ratione.
                                   </div>
                              </div>
                              <div className="vertical">
                                   <Image className="image-top" width={25} height={22} src="/insta.png" alt="" />
                                   <div className="verticla-text">
                                        NodeJS Developer
                                   </div>
                                   <div className="vertical-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo corporis
                                        voluptatum quibusdam vero excepturi placeat adipisci, praesentium in sit optio cum natus
                                        quo maxime officiis consectetur laudantium! Ipsam, ratione.
                                   </div>
                              </div>
                              <div className="vertical">
                                   <Image className="image-top" width={25} height={22} src="/twit.png" alt="" />
                                   <div className="vertical-text">
                                        React/Next Developer
                                   </div>
                                   <div className="vertical-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo corporis
                                        voluptatum quibusdam vero excepturi placeat adipisci, praesentium in sit optio cum natus
                                        quo maxime officiis consectetur laudantium! Ipsam, ratione.
                                   </div>
                              </div>
                              <div className="vertical">
                                   <Image className="image-top" width={25} height={22} src="/fb.png" alt="" />
                                   <div className="verticla-text">
                                        Python Developer
                                   </div>
                                   <div className="vertical-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo corporis
                                        voluptatum quibusdam vero excepturi placeat adipisci, praesentium in sit optio cum natus
                                        quo maxime officiis consectetur laudantium! Ipsam, ratione.
                                   </div>
                              </div>
                              <div className="vertical">
                                   <Image className="image-top" width={25} height={22} src="/youtube.png" alt="" />
                                   <div className="verticla-text">
                                        NodeJS Developer
                                   </div>
                                   <div className="vertical-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo corporis
                                        voluptatum quibusdam vero excepturi placeat adipisci, praesentium in sit optio cum natus
                                        quo maxime officiis consectetur laudantium! Ipsam, ratione.
                                   </div>
                              </div>
                              <div className="vertical">
                                   <Image className="image-top" width={25} height={22} src="/fb.png" alt="" />
                                   <div className="verticla-text">
                                        NodeJS Developer
                                   </div>
                                   <div className="vertical-desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum explicabo corporis
                                        voluptatum quibusdam vero excepturi placeat adipisci, praesentium in sit optio cum natus
                                        quo maxime officiis consectetur laudantium! Ipsam, ratione.
                                   </div>
                              </div>
                         </div>
                    </section>
               </main>
               <footer>
                    <div className="footer">
                         <div className="footer-first">
                              <h3>Chirag&apos;s Developer Portfolio</h3>
                         </div>
                         <div className="footer-second">
                              <ul>
                                   <li>Home</li>
                                   <li>About</li>
                                   <li>Contact</li>
                                   <li>Service</li>
                              </ul>
                         </div>
                         <div className="footer-third">
                              <ul>
                                   <li>Home</li>
                                   <li>About</li>
                                   <li>Contact</li>
                                   <li>Service</li>
                              </ul>
                         </div>
                         <div className="footer-fourth">
                              <ul>
                                   <li>Home</li>
                                   <li>About</li>
                                   <li>Contact</li>
                                   <li>Service</li>
                              </ul>
                         </div>
                    </div>
                    <div className="footer-rights">
                         Copyright © chiragvadhavana.com | All Rights Reserved
                    </div>
               </footer>
          </>
     )
} 