import React,{useState,useEffect} from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown} from 'react-bootstrap';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'
import styles from './NavMenuDashboard.module.css';
import axios from 'axios'



interface DNavProps {
  className?: string; 
}

const Navdashboard = ({ ...props }: DNavProps) => { 
  const [user, setUser] = useState("");
   function logout(){  
      localStorage.removeItem('AccessToken');       
    
     }
     useEffect(() => {
      // Getting the error details from URL
    getuser();
    }, [user])
     async function getuser () {
      
      let webApiUrl = 'https://account.thepublishing.com/auth/info';
      let tokenStr = localStorage.getItem("AccessToken");
      
      try {
        const response = await axios.get(webApiUrl, 
          { headers: {"Authorization" : `Bearer ${tokenStr}`} 
         
        });        
        setUser(response.data.object.contact_name)
      } catch (error) {
        console.error(error);
      }
      };
    
  return (
    <Container fluid style={{background: '#8f7c69'}}>
      <Container className="container">
        <Row>
        {/* <AiOutlineMenu/> */}
              <Col> 
                         
              <Navbar className={styles.navbardash} expand="lg">
                    <Col md={1} className={styles.navbardropcontainer}>
                    <NavDropdown title={<AiOutlineMenu/>}  id={styles.menus}  className={styles.navmenu}>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/accountinfo"><b>{user}</b></NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/accountinfo">Account Information</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/billinginfo">Payment Information</NavDropdown.Item>
                    {/* <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/payopeninvoices">Pay Open Invoices</NavDropdown.Item>      
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/compensationinfo">Compensation</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/documentsinfo">Documents</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/emaildashboard">Email</NavDropdown.Item> */}
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/"><span onClick={logout}>Logout</span></NavDropdown.Item>
                    </NavDropdown>    
                    </Col>
                   <Col md={10}  className={styles.navbarlinkcontainer}>              
                    <Nav.Link href="/dashboard/homedashboard" id={styles.menus} className={styles.navmenu}>Home</Nav.Link>
                    {/* <Nav.Link href="/dashboard/titlesdashboard" id={styles.menus}  className={styles.navmenu}>Titles</Nav.Link>
                    <Nav.Link href="/dashboard/reportdashboard" id={styles.menus}  className={styles.navmenu}>Reports</Nav.Link>
                    <Nav.Link href="/dashboard/ordersdashboard" id={styles.menus}  className={styles.navmenu}>Orders</Nav.Link>
                    <Nav.Link href="/dashboard/submittedrequestdashboard" id={styles.menus}  className={styles.navmenu}>Submitted Request</Nav.Link> */}
                   </Col>
            </Navbar>    
             </Col>       
  
        </Row>
      </Container>
     
    </Container>
  );
};

export default Navdashboard;