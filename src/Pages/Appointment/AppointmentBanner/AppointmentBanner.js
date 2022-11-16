import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
    <img className='lg:w-1/2' src={chair} alt="" />
    <div className='mx-auto'>
    <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate}></DayPicker>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentBanner;