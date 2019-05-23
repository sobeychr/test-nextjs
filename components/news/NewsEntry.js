import { timestampToDate } from 'Utils/dates';

const NewsEntry = ({entry}) => {

    return (
    <div>
        <p className='title'>
            <span className='subtitle'>{entry.title}</span>
            <span className='date'>{timestampToDate(entry.date)}</span>
        </p>
        <p className='text'>{entry.text}</p>

        <style jsx>{`
            div {
                margin: 10px 0;
                padding: 0 0 0 5px;
            }
            div:hover .subtitle {
                text-decoration: underline;
            }
            .title {
                margin: 0 0 5px 0;
                padding: 0;
            }
            .subtitle {
                color: #FFF;
                font-size: 20px;
                font-weight: bold;
                margin-right: 7px;
            }
            .date {
                color: #909090;
                font-style: italic;
                font-size: 12px;
            }
            .text {
                margin: 0;
                padding: 0 0 0 10px;
                text-indent: 10px;
            }
        `}</style>
    </div>
);
}

export default NewsEntry;
