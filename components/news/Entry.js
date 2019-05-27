import { getNewById } from 'Data/news';
import { timestampToDate } from 'Utils/dates';

const Entry = ({id}) => {
    const { date, text, title } = getNewById(id);
    return (
        <div>
            <p className='title'>
                <span className='subtitle'>{title}</span>
                <span className='date'>{timestampToDate(date)}</span>
            </p>
            <p className='text'>{text}</p>

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
};

export default Entry;
