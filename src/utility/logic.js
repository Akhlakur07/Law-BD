import { toast } from 'react-toastify';

const getCurrentDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return days[today.getDay()];
};

const getAppointment = () => {
    const storedAppointments = localStorage.getItem("appointments");

    if (storedAppointments) {
        return JSON.parse(storedAppointments);
    }
    else {
        return [];
    }
}


const addAppointment = (license) => {
    const storedAppointments = getAppointment();

    if (storedAppointments.includes(license)) {
        toast.error("You have already booked an appointment with this lawyer.");
        return;
    }
    else {
        storedAppointments.push(license);
        const data = JSON.stringify(storedAppointments);
        localStorage.setItem("appointments", data);
        toast.success("Appointment booked successfully!");
    }
}

const removeAppointment = (license) => {
    const storedAppointments = getAppointment();
    const updatedAppointments = storedAppointments.filter(app => app !== license);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    toast.info("Appointment removed successfully!");
}

export {getCurrentDay, getAppointment, addAppointment, removeAppointment};