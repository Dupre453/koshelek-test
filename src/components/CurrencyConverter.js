import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setUsd, setEur} from '../store/currencySlice';

const CurrencyConverter = () => {
    const {usd, eur} = useSelector((state) => state.currency);
    const dispatch = useDispatch();

    const handleUsdChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            dispatch(setUsd(value));
        }
    };

    const handleEurChange = (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            dispatch(setEur(value));
        }
    };

    return (
        <div className="currency-converter">
            <div className="input-group">
                    <span>USD</span>
                <input id="usd" type="text" value={usd} onChange={handleUsdChange}/>
                <svg fill="#707070" width="20px" height="20px" viewBox="0 0 512 512"
                     xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5_logos</title>
                    <path
                        d="M240,480V443.58C160.53,439,112.25,398.06,112,336h72c1.77,26.34,23.86,46.45,56,50V288L213.23,281c-61-14.18-93.64-49.39-93.64-102.08C119.59,116.81,164.08,76.08,240,70V32h32V70c77.39,6.3,119,47.74,120,106H320c-.76-24.06-15.83-43.39-48-46v92l30.82,7.28C367.61,243.46,400,277,400,332c0,64.34-43.74,105.88-128,111.32V480Zm0-264V130c-27.59,1.52-47.27,18.47-47.27,42.53C192.73,194.83,209.12,209.41,240,216Zm32,78v92c38.15-1.54,56.38-18.92,56.38-45.77C328.38,315.65,310.15,299.1,272,294Z"/>
                </svg>
            </div>
            <div className="input-group">
                    <span>EUR</span>
                <input id="eur" type="text" value={eur} onChange={handleEurChange}/>
                <svg fill="#707070" width="20px" height="20px" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z"/></svg>
            </div>
        </div>
    );
};

export default CurrencyConverter;