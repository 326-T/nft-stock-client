import LineChart from './LineChart'
import PieChart from './PieChart'
import SummaryBoard from './SummaryBoard'

export default function ChartContainer() {
  return (
    <div className='w-full-grid-large'>
      <SummaryBoard />
      <div className='h-96'>
        <LineChart />
      </div>
      <div className='h-96'>
        <PieChart />
      </div>
    </div>
  )
}
