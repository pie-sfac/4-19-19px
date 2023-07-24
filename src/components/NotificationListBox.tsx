import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

interface NotificationProp {
    createDate: string;
    id: number;
}

const NotificationListBox = ({ createDate, id }: NotificationProp) => {
    const [newDate, setNewDate] = useState("");
    const getCreateDate = () => {
        const year = createDate.slice(0, 4);
        const month = createDate.slice(5, 7).padStart(2, "0");
        const day = createDate.slice(8, 10).padStart(2, "0");
        const dateString = `${year}.${month}.${day}`;
        setNewDate(dateString);
    };
    useEffect(() => {
        getCreateDate();
    }, );
    return (
        <Link to={`/personal${id}`}>
            <div>
                <h2>{newDate}</h2>
                <span>알림 메세지</span>
            </div>
        </Link>
    );
};

export default NotificationListBox;