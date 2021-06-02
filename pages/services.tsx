import Head from 'next/head';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import Link from 'next/link';
import styles2 from '../components/NavMenu.module.css';
import styles from '../styles/Home.module.css';
import { Col, Container, Row ,Form,Image,Nav,Button} from 'react-bootstrap';



export default function Services() {

    return (
      <div className={styles.container}>
        <Head>
          <title>Services</title>
          <link rel="icon" href="/thepublishing.svg" />
        </Head>
        <NavMenu />
        <PageLayout>
          <Container fluid  className={styles.iservices}>      
            <Container className="container">
                            <Row className="justify-content-md-left">
              <Col md={2}><br/></Col>
                <Col md={'auto'}><p className={styles.servicestitle}>Self-Publish a Book <br/><span className={styles.servicestitlespan}>Guide and Services</span></p></Col>
                
              </Row>             
            <Row><Col><br/></Col> <Col md={2}><br/></Col></Row>
              <Row className="justify-content-md-left"><Col md={2}><br/></Col>
              <Col md={'auto'}><p className={styles.iservicesp}>In today’s publishing marketplace,<br/> Self-published authors are leading the pack.<br/> Embark on an incredible journey with us<br/> and get maximum results.</p>
            </Col>
            </Row>
              <Row className="justify-content-md-left">
              <Col md={2}><br/></Col>
             <Col md={'auto'} className={styles.serviceslinkcol}>
             <ol className={styles.serviceslink}>
               <Link href="#writing"><a><li>Writing</li></a></Link>
               <Link href="#bookediting"><a><li>Book Editing</li></a></Link>  
               <Link href="#bookdesign"><a><li>Book Design</li></a></Link>  
               <Link href="#bookmetadata"><a><li>Book Metadata </li></a></Link> 
               <Link href="#printing"><a><li>Printing </li></a></Link> 
               <Link href="#royalties"><a><li>Royalties</li></a></Link> 
               <Link href="#distribution"><a><li>Distribution </li></a></Link> 
               <Link href="#marketing"><a><li>Marketing</li></a></Link> 
              </ol>
              </Col>              
              <Col md={6}><div className={styles.imgpadding}><Image src="/img/Slider.png" height="auto" width="350px"/></div> 
              
     </Col>
              </Row>           
              
            <Row><Col><br/><br/></Col></Row>
            <Row><Col><br/></Col></Row>
            <Row><Col><br/></Col></Row>
            <Row><Col md={2}></Col><Col md={6}> <h1 id="writing">1 Writing</h1></Col></Row>
            <Row>
              <Col md={2}><Image src="/img/1.png" height="auto" width="150px"/></Col>
              <Col md={8}>
              <p>We make thinking and learning visible and permanent as we bring your word to the world. With our ability to express and refine your ideas, let us write your book. </p>
              </Col>
            </Row>
            <Row><Col><br/><br/></Col></Row>
            
            <Row><Col md={2}></Col><Col md={8}> <h1 id="bookediting">2 Book Editing</h1></Col></Row>
            <Row>           
              <Col md={2}><Image src="/img/lapis.png" height="auto" width="150px"/></Col>
              <Col md={8}><p>Never allow your readers to comment when they see that typo. Even the world’s best writers have their manuscripts edited several times. From spelling, sentence structure, the works! A thoroughly edited work rids us of the embarrassment of promoting an imperfect book.
              </p>
              <p> Making it suitable for publication, BOOK EDITING is the method of improvising your writing style as it adheres to the standard style guide. Making the writing a lot clear, concise, and reader-friendly. Editing polishes everything in the manuscript.
              </p>
              <p>Aimed at improving the overall structure and quality of the manuscript, or that extra set of eyes to catch typos and the odd sloppy sentence. Editing a book varies based on a few factors. 
              </p>
              <p>It’s all about the quality of the manuscript. Some require more work than others to produce a professional, ready-to-publish piece. There are different types of editing depending on what your manuscript needs:
              </p>
              <ul>
              <li>Editorial Assessment </li>
              <li>Line Edit</li> 
              <li>Copyediting</li> 
              <li>Proofreading</li>
              </ul>
              <p className={styles.servicesparag}>Editiorial Assessment <br/><span className={styles.servicesspan}>
              €500 / 50,000 words manuscript and €0.7 per words after</span></p>

              <p>With EDITORIAL ASSESSMENT, our in-house editor assesses your manuscript to see if your manuscript is all ready for distribution and is marketable. The work is needed as it provides an objective assessment of the book’s weakness and strengths with an honest and forthright perspective on the book’s effectiveness and in what ways that it might be improved.</p>

              <p>An editor that works for you! Our editors steers you to the right direction for your own best interest.</p> 

              <p className={styles.servicesparag}>Line Editing<br/><span className={styles.servicesspan}> 
              €0.040 per word</span></p>

              <p>Line editing addresses your writing style and language use on the sentence and paragraph level. Addressing structural issues, the same as a critiquing, the purpose of a line edit isn’t to comb your manuscript for errors but rather, a line edit focuses on the approach you employ to communicate your story to the reader.</p>

              <p className={styles.servicesparag}>Copyediting<br/><span className={styles.servicesspan}>
              €0.13 / word </span></p>

              <p>Copyediting sees all the mistakes and errors in the manuscript that the author missed. To be reader-friendly, copyediting refers to making your copy easy to read and understand and ensure that your content smoothly flows from the beginning to the end. Your text should be correct, consistent, clear, concise, and comprehensible.</p>

              <p className={styles.servicesparag}>Proofreading<br/><span className={styles.servicesspan}>
              €0.032 / word </span></p>

              <p>Proofreading is the final work against errors. It is not just looking for typos and misplaced punctuation in the  text but also searches for layout issues like page numbering, consistency with headings, placement of tables of figures in the text, bad line or page breaks, and more. Proofreaders catch all the mistakes the copyeditor missed.</p>
              </Col>
            </Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col md={2}></Col><Col md={8}><h1 id="bookdesign">3 Book Design</h1></Col></Row>
            <Row>
              <Col md={2}><Image src="/img/26.png" height="auto" width="150px"/></Col>
              <Col md={8}>
              <p>Experts know that a design can have an impact on results.</p>

              <p>A well-designed book is very important.  It has to stand out from the competition as readers sometimes judge books by their covers.</p>
              
              <p>A well-designed book is an incredibly important way to stand out from the competition. Depending on the quality of your cover, people judge books by their covers. Readers, book reviewers, critics, whether or not they notice your book in the first place may depend on your cover.</p>
              
              <p>Our roster of professional designers will assure the creative layout from the cover and the inside and out. Covering all requirements needed by some ebook and print-on-demand distribution channels.</p>

              <p>The layout of the book affects its readability. This sense of pride is crucial when it comes time to promote the book. An impressive book design will aid you as an author for that required look and feel.</p>

              <p className={styles.servicesparag}>Book Interior Design <br/><span className={styles.servicesspan}> 
              €500-1500 / design</span></p>

              <p>The art of designing a book’s interior layout, known as book layout design, is also known as “typesetting.” It includes all of the decisions that affect how readers interact with the content of your printed book, such as fonts, spacing, chapter heading styling, margins, and so on. A book layout designer will take care of all of this for you and create a print format that meets the needs of your readers.</p>

              <p className={styles.servicesparag}>Book Cover Design  <br/><span className={styles.servicesspan}>
              €250-1000 / design</span></p>

              <p>A good cover design should not only look good on the shelf, but it should also clearly communicate the title, indicate the genre, and attract the right audience for the book. A professional cover designer understands what works in the market and has developed their own distinct style to make your book stand out. They’ll collaborate with you to produce a cover that reflects your vision while also incorporating their understanding of genre tropes and publishing patterns to give your book that much-desired mass appeal.</p>

              <p className={styles.servicesparag}>Illustrations <br/><span className={styles.servicesspan}> 
              €250-2000 / design</span></p>

              <p>Our seasoned illustrators can cut across the board with their expertise on various genres this from young adult, fiction, to cartoons and fantasy. Text and illustrations work should tell a great story. Drawing in the reader, our brand of visual art brings the story to life. We listen to the author’s vision as well as we commit to delivering expertise that best tells your story. 
              <br/><br/><Link href="/illustration-services"><span  className={styles.serviceslink}><a>See illustration samples</a></span></Link></p>
              
              </Col>
            </Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col md={2}></Col><Col md={8}><h1 id="bookmetadata">4 Book Metadata</h1></Col></Row>
            <Row>
              <Col md={2}><Image src="/img/lens.png" height="auto" width="150px"/></Col>
              <Col md={8}>
              <p>Metadata is the information about your book that includes everything from title, subtitle, and author, to format, publishing date, page count, and trim size. Be it digital content or physical copies, a book metadata shows potential readers how to search your work online. As it tells websites simple facts about your book, like title, price, and author, but it can also find you, new readers.</p> 

              <p className={styles.servicesparag}>Book Description <br/><span className={styles.servicesspan}> 
              €300 / design</span></p>

              <p>Drawing in a prospective reader with an intriguing book description plus a good book cover can close the deal.</p>

              <p className={styles.servicesparag}>ISBN <br/><span className={styles.servicesspan}>
              €35 / 1</span></p>

              <p>Similar to any product number you would find on other products you buy, ISBN stands for International Standard Book Number. It’s an internationally recognized identification number.</p>

              <p className={styles.servicesparag}>BISAC Codes <br/><span className={styles.servicesspan}> 
              €300 / 1</span></p>

              <p>Retailers and booksellers will use your BISAC code to determine in which category to place your book on their website, or where to shelve it in their bookstore. BISAC codes essentially identify what your book is about – the primary genre(s), topic(s), and theme(s).</p>
              </Col>
            </Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col md={2}></Col><Col md={8}><h1 id="printing">5 Printing</h1></Col></Row>
            <Row>
              <Col md={2}><Image src="/img/bookinside2.png" height="auto" width="150px"/></Col>
              <Col md={8}>
              <p>We are always honest about the costs of print-on-demand and that you can choose your suggested retail price with it in mind.</p>

              <p>For distribution, the distributor charges to print and fulfill orders from the retailers, it is ‘free’ in the sense it doesn’t require cash upfront as the customer pays for the printing and fulfillment in the retail price they pay when purchasing your book.</p>

              <p>We partner with printers located within Scandinavia, and around the world. 
              We have options for printing anywhere from a single copy to thousands at low cost. For some print-on-demand costs, and the associated royalties contact us.</p>

              <p>See also <b>Printbook</b></p>
              </Col>
            </Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col md={2}></Col><Col md={8}><h1 id="royalties">6 Royalties</h1></Col></Row>
            <Row>
              <Col md={2}><Image src="/img/coins.png" height="auto" width="150px"/></Col>
              <Col md={8}>
              <p>We offer two main streams of distribution, Managed Distribution, and Direct Distribution.  With assisted self-publishing, you earn much, much higher royalties than in traditional publishing. Every time a bookstore buys your book for resale, or people buy your book from an online retailer like Amazon.com, you earn a royalty.</p>

              <p>With Direct Distribution, this option gives you control of managing all of your different accounts so you can log in to each account and make changes whenever you feel the need. Offering 100% royalties, this option puts you in control.</p>
              
              <p>Managed Distribution, is just as exciting. We will set your book up for distribution with all of the important channels for you. Instead of managing lots of accounts, you just have your us your account where we will consolidate information for you, and make it all easily accessible in one place. This option lets you sit back and relax with 70% royalties.</p>

              <p>Our assisted option puts a great level of work on us, instead of you. This can be a great option for you who do not have the time to manage multiple accounts and keep up with the agreements of all of the different accounts.  Setting authors 85-100% of the net sales revenues means we are neutral when it comes to distribution.</p> 

              <p>We do provide wholesalers with a discount. For most books we publish you can choose between the following discount options:<br/> 
              55 % <br/>
              40 % <br/>
              30 % <br/>
              </p>
              <p>With Amazon.com, you can set the discount at 30% instead of 55%. So, for a book that costs €3 to print and is priced at €20, if the seller takes 30% (€6) then you as the author would be left with the other 70% (€14), minus the €3 cost of printing. Your profit would be €11 per sale.</p>

              </Col>
            </Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col md={2}></Col><Col md={8}><h1 id="distribution">7 Distribution</h1></Col></Row>
            <Row>
              <Col md={2}><Image src="/img/bookglobe.png" height="auto" width="150px"/></Col>
              <Col md={8}>
              <p>By self-publishing with us, you’re giving your book the best chance of reaching that much-needed global readers.</p>

              <p>Distribution used to be a major challenge for self-published authors. As authors would spend weeks, months, even years writing their book, they would have no way to get it into bookstores and libraries.</p>

              <p>By just publishing with us, you can receive the same book distribution channels available to major traditional publishers. The Publishing makes titles available to 39,000 retailers, libraries, schools, and e-commerce companies including Amazon, Barnes & Noble, Indigo, Foyles, Apple, and more.</p>

              <p>We do everything for you. We process the printing and fulfilling orders, collecting payment, and shipping the books to customers or booksellers who act as middlemen. We make your book available to the public. This can include publishing your book in paperback, hardcover, and/or as an eBook, and making the book available to retail channels where people typically go to buy books.</p>
              
              <p>Our print-on-demand systems allow the print edition of your book to be listed for sale with major online retailers like Amazon.com, Chapters.com, and BarnesAndNoble.com. </p>
              
              <p>Currently, a handful of eBook formats dominate the marketplace. For eBooks, there are no major barriers to having your book published alongside bestselling authors.</p>

              <p>Ensuring that your book is available to the broadest possible audience in the format they prefer. The most effective strategy is to make your book available in all of the above formats as well as softcover and hardcover.</p>
              </Col>
            </Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col><br/><br/></Col></Row>
            <Row><Col md={2}></Col><Col md={8}><h1 id="marketing">8 Marketing</h1></Col></Row>
            <Row>
              <Col md={2}><Image src="/img/megaphone2.png" height="auto" width="150px"/></Col>
              <Col md={8}>
              <p>Once your book is available in popular sales channels, it’s time to work on getting the word out. People need to hear about your book through traditional and new media, book reviewers, bloggers, and social media. By building a strong presence, establishes credibility and allows you to connect with readers and promote your book.</p> 

              <p>Book promotion strategies can include focusing on getting the attention of traditional and new media by sending a press release and following up with a phone call. Effectively marketing a book starts with knowing the target audience, its competition, the purpose of your book, and what makes it different.</p> 
              
              <p>In connecting with reviewers by sending a book release, mailing samples, or email an electronic version of the book. Such book reviews are important whether it’s in a newspaper, blog, YouTube channel, or on Goodreads and Amazon.com.</p> 

              <p>We do offer a variety of book promotion services, to help you as little or as much as you need.</p>

              <p>Consider the following tactics to market your book:</p>

              <p className={styles.servicesparag}>Author Website<br/><span className={styles.servicesspan}> 
              €500 Basic , €1500 Advance</span></p>

              <p>If you hope to create an engaged audience over time, a website is the first step. It’s important to have your website when you publish a book. By lending credibility to your name as an author, a website is a great place for readers to go to learn more about you, your book, your events, and more.</p> 

              <p className={styles.servicesparag}>Social Media<br/><span className={styles.servicesspan}> 
              €500</span></p>

              <p>Pick two or three Social media platforms that you like —but make sure you ask yourself, where are my readers? : Facebook, Twitter, Instagram, LinkedIn. Choose it, we will post and share it with you.</p>

              <p className={styles.servicesparag}>Audio Book<br/><span className={styles.servicesspan}> 
              €2500 / 10,000 words</span></p>

              <p>If you can’t capture your audience visually then Audiobook Premium is the perfect alternative! Audiobook, by all means, provides a quality convenience in absorbing your story while your audience are in the middle of doing something. This is also the best format to reach the visually challenged audience who are interested in discovering the world you have created through words. In the event that your potential audience don’t have the ample time to read your work, then find a way to make it to your audience through audio recordings!</p>

              <p className={styles.servicesparag}>Video Book<br/><span className={styles.servicesspan}> 
              €2800 / minute</span></p>

              <p>Book Video provide to your needs by showing your viewers a glimpse of your book on screen. It allows you to show a trailer of your book plot based on the option you chose. Take part of the social media noise through creative media.</p>

              <p className={styles.servicesparag}>Author Events<br/><span className={styles.servicesspan}> 
              €1500-5000</span></p>

              <p>Whether it’s your book launch party or an author reading, events are a great way to connect with readers in your community. Bookstores and libraries are great options, but you should also think outside the box. What other venues might want to feature your book? If you wrote a cookbook, perhaps there’s a local winery or brewery where you can pair some of your tasty food with some local beverages.
              Marketing your book can be fun when you take the time and effort to understand your audience and provide them with a valuable reason to join your tribe and ultimately, purchase your book!</p>

              <p className={styles.servicesparag}>Sale Sheets<br/><span className={styles.servicesspan}> 
              €200</span></p>

              <p>This one-page paper contains high-level, relevant information about your book. A sale sheet is basically, your high-level metadata such as the title, subtitle, publisher, publication date, etc.</p> 

              <p className={styles.servicesparag}>Advanced Reader Copies<br/><span className={styles.servicesspan}> 
              €600</span></p>

              <p>ARCs are used to get endorsements, which can be added to the final cover of your book before printing. ARCs are copies of your book that are printed in advance to generate buzz for your book.</p> 

              </Col>
            </Row>            
            
                 </Container>
                 </Container>
        </PageLayout>
        <Footer />
    </div>
  );
}