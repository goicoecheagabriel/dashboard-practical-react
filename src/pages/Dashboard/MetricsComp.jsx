
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactApexChart from 'react-apexcharts';
import { Card } from 'reactstrap';

const MetricsComp = () => {

    const series = [50, 55, 50, 83];

    const options = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            console.log(w)
                            return 299
                        }
                    }
                }
            }
        },
        labels: [ 'Computer', 'Tablet', 'Laptop', 'Mobile' ],
        colors: [ '#a855f7', '#a0eade', '#bfd2bf', '#3258f2' ]
    };

  return (
    <Card>
        <div className="text-center">
            <h5>Views</h5>
            <div className="d-flex justify-content-center">
                <h3 className="m-0">27,000</h3>
                <div className='d-flex align-items-end px-2'>
                    <FontAwesomeIcon
                        icon='fa-solid fa-caret-up'
                        color='green'    
                    />
                    <span className='text-success'>12%</span>
                </div>
            </div>
        </div>
        <ReactApexChart
            options={ options }
            series={ series }
            type='radialBar'
            height='230'
            className='apex-charts'
        />
    </Card>
  )
}

export default MetricsComp