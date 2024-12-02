import Swal from "sweetalert2";

const Notification = ({ title, text, icon }) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: icon,
    });
};

export default Notification;
