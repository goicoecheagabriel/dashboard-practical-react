import Breadcrumb from "../../components/Common/Breadcrumb";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CardComp from "./CardComp";
import MetricsComp from "./MetricsComp";
import ColumnChart from "./ColumnChart";
import { periodData } from "../../../data";
import { AdComp } from './AdComp';
import { ActivityComp } from './ActivityComp';
import { CityRankings } from './CityRankings';


const Dashboard = () => {

    const reports = [
        {
            title: 'Orders',
            iconClass: 'fa-bag-shopping',
            description: '1,235',
            percent: '+1.2'
        },
        { 
            title: 'Revenue',
            iconClass: 'fa-money-check-dollar',
            description: '$35, 723',
            percent: '-5'
        },
        { 
            title: 'Sales',
            iconClass: 'fa-money-check-dollar',
            description: '$160,230',
            percent: '-5'
        },
    ]


    return (
      <>
      <Container fluid>
        <Breadcrumb
            title="Admin"
            breadcrumbItem="Dashboard"
        />

        <Row>
            <Col xl='4'>
                <CardComp />
                <MetricsComp />
            </Col>
            <Col xl='8'>
                <Row>
                    {
                        reports.map((report, key) => {
                            return (
                                <Col md='4' key={'_col_' + key}>
                                    <Card className='mini-stats-wid'>
                                        <CardBody>
                                            <div className='d-flex'>
                                                <div className='flex-grow-1'>
                                                    <p className='text-muted fw-medium'>
                                                        {report.title}
                                                    </p>
                                                    <h4 className='mb-0'>{report.description}</h4>
                                                </div>
                                                <div className='icon-sm rounded-circle bg-primary align-self-center mini-stat-icon'>
                                                    <span className='icon-container rounded-circle bg-primary'>
                                                    <i
                                className={
                                  "bx " + report.iconClass + " font-size-24"
                                }
                              ></i>
                                                        <FontAwesomeIcon icon={`fa-solid ${report.iconClass}`} />
                                                    </span>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <Row>
                    <Col xs='12'>
                        <Card>
                            <ColumnChart 
                                periodData={periodData} 
                                dataColors={['#a855f7', '#3258f2', '#a0eade']}
                            />
                        </Card>
                    </Col>
                </Row>
                
            </Col>
        </Row>
        <Row>
            <Col xl='4'>
                <AdComp/>
            </Col>
            <Col xl='4'>
                <ActivityComp/>
            </Col>
            <Col xl='4'>
                <CityRankings/>
            </Col>
        </Row>
      </Container>
        {/* <div>dashboard</div>
        <Breadcrumb/> */}
      </>
    )
}

export default Dashboard;