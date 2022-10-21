import React from 'react';

    const Calendar = { placeholder: 'Please Select Date' };
    const show = () => {
        setOpenPicker(true);
    };
    const onClose = () => {
        setOpenPicker(false);
    };
    <Datepicker
        controls={['calendar']}
        showOnClick={false}
        showOnFocus={false}
        isOpen={openPicker}
        onClose={onClose}
        // touchUi={true}
        inputComponent="input"
        inputProps={props}/>;
     
        return(
            <div>
                <Button onClick={show}>Calendar</Button>
            </div>
        )

export default Calendar;