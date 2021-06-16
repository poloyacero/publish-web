import React from 'react'
import Head from 'next/head'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenu.module.css'
import { Col, Container, Row ,Image} from 'react-bootstrap'
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function createdashboard() {
    return (
        <div>
            
            <NavMenu /> 
            <h1>Create</h1>            
            <Sidebar/>
        </div>
    )
}
