import TypeList from 'Skills/TypeList';

const Entry = ({id}) => {
    const { name } = getClassById(id);
    return (
        <div className='entry'>
            <p>{name}</p>
            <div className='skills'>
                <TypeList classId={id} />
            </div>

            <style jsx>{`
                .entry {
                    margin: 20px 0;
                }
                p {
                    margin: 0 0 5px 0;
                    font-size: 24px;
                    font-weight: bold;
                    padding: 0;
                    text-transform: capitalize;
                }
                .skills {
                    margin-left: 30px;
                }
            `}</style>
        </div>
    );
};

export default Entry;
