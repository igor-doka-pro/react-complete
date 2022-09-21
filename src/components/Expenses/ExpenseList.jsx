import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import './ExpenseList.css';

export const ExpenseList = ({ data }) => (
    <Card className="expenses">
        {data.map(({ id, title, amount, date }) => (
            <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
    </Card>
);
