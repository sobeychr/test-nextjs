const SkillInfo = ({name}) => {
    return (
        <div>
            <p className='name'>{name}</p>

            <style jsx>{`
                div {
                    box-shadow: 0 0 1px 1px rgba(255,255,255, .2);
                    margin: 10px 0;
                    padding: 10px;
                }
                div:hover {
                    box-shadow: 0 0 3px 3px rgba(255,255,255, .3);
                }
                .name {
                    font-weight: bold;
                    margin: 0 0 10px 0;
                    padding: 0;
                    text-transform: capitalize;
                }
            `}</style>
        </div>
    );
}
    

export default SkillInfo;
