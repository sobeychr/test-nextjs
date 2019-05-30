import { getItemImage } from 'Data/items';

const ItemIcon = ({name, image, typeId}) => {
    const imgSrc = getItemImage(typeId);
    const className = 'img' + image;
    return (
        <div className={className}>
            <style jsx>{`
                div {
                    background: transparent url(${imgSrc}) top no-repeat;
                    float: left;
                    height: 119px;
                    width: 63px;
                }
                .img1 {
                    background-position-x: 0;
                }
                .img2 {
                    background-position-x: -63px;
                }
                .img3 {
                    background-position-x: -126px;
                }
                .img4 {
                    background-position-x: -189px;
                }
                .img5 {
                    background-position-x: -252px;
                }
                .img6 {
                    background-position-x: -315px;
                }
            `}</style>
        </div>
    );
};

export default ItemIcon;
