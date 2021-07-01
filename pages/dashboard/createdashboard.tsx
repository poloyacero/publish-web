import React,{useState} from 'react'
import Head from 'next/head'
import NavMenu from '../../components/Nav'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../components/Dashboard/createdashboard/Createdashboard.module.css'
import PrintEbookandEbookdash from '../../components/Dashboard/createdashboard/Printbookebook'
import PrintBookOnlydash from '../../components/Dashboard/createdashboard/Printbookonly'
import EBookOnlydash from '../../components/Dashboard/createdashboard/Ebookonly'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";

export default function createbook() {
  const [createtype, setCreatetype] = useState('')
 
  // const handleChange=(e:any) =>{
  //   setCreatetype(e.target.value);    
  // }
    return (
        <div className={styles.container}>
      <Head>
        <title>Create</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />  
      <NavMenuDashboard /> 
        <Container fluid>
          <Container>
            <Row >
               <Sidebar/>
                <Col md={6}>
                  <Row  className={styles.createcontainer}>
             <Col>
                 <Col className={styles.indentselectbox}>
                    <Form.Control className={styleIn.inputselect} as="select" defaultValue={createtype} onChange={(e)=>{setCreatetype(e.target.value)}}>
                          <option disabled>Select Creation</option>                                
                          <option>Print Book and Ebook € 350</option>
                          <option>Print Book Only € 300</option>                  
                          <option>Ebook Only € 250</option>  
                    </Form.Control>
                    </Col>
                    { createtype==="Print Book and Ebook € 350"?(
                      <>                 
                      <PrintEbookandEbookdash />
                      </> 
                    ):createtype==="Print Book Only € 300"?(
                      <>                  
                      <PrintBookOnlydash />
                      </>
                    ):createtype==="Ebook Only € 250"?(
                      <>                  
                      <EBookOnlydash/>
                      </>
                    ):(
                      <>
                      <br/>
                      <h2 className={styles.indentselectbox}>Please Select Creation</h2>                 
                      </>
                    )}                    
                    
             </Col> 
             </Row>
             </Col>
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    );
}
