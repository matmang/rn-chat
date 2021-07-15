import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
margin-bottom: 30px;
`
const ProfileImage = styled.Image`
background-color: ${({theme}) => theme.imgBackground};
width: 100px;
height: 100px;
border-radius: 50px;
`

const Image = ({url}) => {
    return (
        <Container>
            <ProfileImage source={{uri: url}}/>
        </Container>
    );
}

Image.defaultProps = {
    url: 'https://firebasestorage.googleapis.com/v0/b/rn-chat-6e02e.appspot.com/o/ionic.jpg?alt=media'
}

Image.propTypes = {
    url: PropTypes.string,
}

export default Image;