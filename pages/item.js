import { withRouter } from 'next/router';

import Layout from 'Global/Layout';

import ItemList from 'Items/ItemList';

import { getDifficultyName, getTypeName } from 'Data/items';

const Page = (props) => {
    const { difficultyId, typeId } = props;
    const difficultyName = getDifficultyName(difficultyId);
    const typeName = getTypeName(typeId);

    return (
        <Layout title={difficultyName + ' > ' + typeName}>
            <ItemList difficultyId={difficultyId} typeId={typeId} />
        </Layout>
    );
};

Page.getInitialProps = async (context) => {
    let { difficultyId, typeId } = context.query;
    difficultyId = parseInt(difficultyId);
    typeId = parseInt(typeId);
    return { difficultyId, typeId };
};

export default withRouter(Page);
