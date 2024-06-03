import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-3 py-5'>
            <img src={logo} alt="Dragon News" className='mx-auto' />
            <p className='text-slate-500'>Journalism Without Fear or Favour</p>
            {
                moment().format("dddd, MMMM D, YYYY")
            }
        </div>
    );
};

export default Header;