import Link from 'next/link';

import { getTypeHref, getTypeName } from 'Data/items';

const CategoryEntry = ({difficultyId, typeId}) => {
    const { alias, href } = getTypeHref(difficultyId, typeId);
    const name = getTypeName(typeId);

    return (
        <Link
            as={alias}
            href={href}
            >
            <a>
                {name}

                <style jsx>{`
                    a {
                        display: block;
                    }
                    a:nth-child(n + 2) {
                        margin-top: 5px;
                    }
                `}</style>
            </a>
        </Link>
    );
};

export default CategoryEntry;
