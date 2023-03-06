import styled from 'styled-components';

export const Container = styled.div`
    width: 150px;
    height: auto;
    padding: auto 5px;
    display: flex;
    flex-direction: row;

    .linx {
        height: 40px;
        margin-right: 10px; 
    }

    .impulse {
        width: 70px;
        margin-right: 10px; 
    }

    @media (max-width: 345px) {
        .linx {
            height: 25px;
        }
    
        .impulse {
            width: 50px;
        }
    }
`;