import { useState } from 'react';
import styled from 'styled-components';
import MenuTab from '../components/MenuTab';
import Modal from '../components/Modal';

const Container = styled.div`
  padding: 60px 0 80px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 10px 20px 5px;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid #ecf0f1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.h2`
  width: 100%;
  color: #333;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
`;
const ProfileImgList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 350px;
`;
const ProfileImg = styled.li`
  width: 110px;
  height: 110px;
  background-color: ${(props) => props.theme.tabBgColor};
  &:first-child, &:nth-child(2), &:nth-child(3){
    margin-bottom: 5px;
  }
  &:nth-child(2), &:nth-child(5){
    margin: 0 5px;
  }
`;
const ProfileImgInfoText = styled.span`
  display: block;
  text-align: center;
  padding: 17px 5px;
  font-size: 12px;
  a{
    font-weight: 700;
    color: #343434;
  }
  border-bottom: 1px solid #eee;
`;
const UserProfileList = styled.ul`
  max-width: 400px;
  border-bottom: 1px solid #eee;
`;
const UserProfile = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  font-size: 14px;
`;
const UserProfileTitle = styled.span`
  width: 35%;
  color: ${(props) => props.theme.accentColor};
  padding: 15px 0 15px 35px;
`;
const UserProfileTxt = styled.span`
  color: #ff7675;
`;

const UserIntro = styled.textarea`
  width: 100%;
  height: auto;
  border: none;
  resize: none;
  outline: none;
  position: relative;
  padding: 5px 15px;
`;
const UserIntroInfoText = styled(ProfileImgInfoText)`
  padding: 0 15px 15px;
`;

// const ProfileImages

function ProfileEdit() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const [profileValue, setProfileValue] = useState("");
  return (
    <>
      <Container>
        <Header>
          <Title>????????? ??????</Title>
        </Header>
        <form>
        <ProfileImgList>
          <ProfileImg></ProfileImg>

          <ProfileImg></ProfileImg>
          
          <ProfileImg></ProfileImg>

          <ProfileImg></ProfileImg>

          <ProfileImg></ProfileImg>
          
          <ProfileImg></ProfileImg>
        </ProfileImgList>
        <ProfileImgInfoText>
          ????????? ????????? ????????? ???????????? ??????????????? 
          <a href='#'> ??? ????????????</a>
        </ProfileImgInfoText>
        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>?????????</UserProfileTitle>
            <UserProfileTxt onClick={openModal}>
                {profileValue}??????
                
              <Modal open={modalOpen} close={closeModal} header="Modal heading">
                  <input
                    value={profileValue}
                    onChange={(e) => setProfileValue(e.target.value)}
                />
              </Modal>
            </UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>??????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>1990-03-24</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>??????</UserProfileTxt>
          </UserProfile>
        </UserProfileList>

        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt></UserProfileTxt>
            <UserIntro placeholder='???????????? ????????? ???????????? ??????????????????'></UserIntro>
            <UserIntroInfoText>
              SNS ????????? ??? ????????? ?????? ??? ????????? ????????? ???????????????
            </UserIntroInfoText>
          </UserProfile>
        </UserProfileList>

        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>???</UserProfileTitle>
            <UserProfileTxt>185cm</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>?????????</UserProfileTxt>
          </UserProfile>
        </UserProfileList>

        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>??????????????????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>IT ?????????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>?????????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>?????????</UserProfileTxt>
          </UserProfile>
        </UserProfileList>

        <UserProfileList>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>?????????,?????????,??????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>??????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>??????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>??????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>?????????</UserProfileTitle>
            <UserProfileTxt>??????????????????</UserProfileTxt>
          </UserProfile>
          <UserProfile>
            <UserProfileTitle>??????</UserProfileTitle>
            <UserProfileTxt>??????????????????</UserProfileTxt>
          </UserProfile>
          </UserProfileList>
          
          <button>????????????</button>
        </form>
      </Container>

      {/* ?????? ?????? ????????? */}
      <MenuTab />
    </>
  );
}

export default ProfileEdit;