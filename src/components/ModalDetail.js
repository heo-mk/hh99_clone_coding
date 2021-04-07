import React, {useState} from "react";

import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import {actionCreators as commentActions} from "../redux/modules/comment"
import { useDispatch } from "react-redux"; 

const ModalDetail = (props) => {
  const dispatch = useDispatch();
  const [comments, setComments ] = useState();
  const ok_submit = comments ? true : false

  const selectComment = (e) => {
    console.log(e.target.value)
    setComments(e.target.value)
  }

  const addComment = () => {
    console.log(comments)
    let comment_info = {
      comment: comments,
      user_name: '',
    }

    dispatch(commentActions.addCommentAX(comment_info, props.id))
    setComments('')
  }

  return(
    <React.Fragment>
      <Component onClick={props.close}/>
      <ExitContainer>
        <ExitBtn onClick={props.close}>
          <CloseIcon fontSize="large" />
        </ExitBtn>
      </ExitContainer>
      <ModalComponent>
        <ModalImg src={props.post_image_url} />
        <ModalRightContainer>
          <ModalHeader>
            <ModalLeftHeader>
              <ProCircle src={props.profile_image_url} />
              <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
            </ModalLeftHeader>
            <ModalRightHeader>
              <MoreHorizIcon height="14px" width="14px" cursor="pointer"/>
            </ModalRightHeader>
          </ModalHeader>
          <ModalCmtBox>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>
            <ModalCmt>
              <ProCircle src={props.profile_image_url} />
              <ModalCmtRight>
                <ModalAuthor>{props.user_info.user_id}</ModalAuthor>
                안녕하세요 저는 이대호입니다. 제가 좋아하는음식은닭고기삼겹살
                헬로뭐 다 좋아합니다.
              </ModalCmtRight>
            </ModalCmt>

          </ModalCmtBox>
          <ModalCmtInputBox>
            <ModalCmtInput type="text" placeholder="댓글달기..." onChange={selectComment} />
            {ok_submit ? <ModalUpload onClick={addComment} >게시</ModalUpload>
            : <ModalUpload style={{opacity: "0.3"}} >게시</ModalUpload>}
          </ModalCmtInputBox>
        </ModalRightContainer>
      </ModalComponent>
    </React.Fragment>
  )
}

const Component = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.4;
  height: 100vh;
  width: 100vw;
  background-color: black;
  z-index: 10;
`
const ModalComponent = styled.div`
  position: fixed;
  width: 950px;
  height: 600px;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 20;
  display:flex;
`
const ExitContainer = styled.div`
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  padding: 12px;  
`
const ExitBtn = styled.button`
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
`
const ModalImg = styled.img`
  width: 600px;
  height: 600px;
`
const ModalRightContainer = styled.div`
  width: 350px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid #EFEFEF;
`
const ModalHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #EFEFEF;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ModalLeftHeader = styled.div`
  display: flex;
  align-items: center;
`

const ModalRightHeader = styled.div`
  cursor: pointer;
`

const ProCircle = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-size: cover;
  margin-right: 10px;
`
const ModalAuthor = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 5px;
`

const ModalCmtInputBox = styled.div`
  width: 100%;
  height: 56px;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #EFEFEF;
`
const ModalCmtInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 80%;
`
const ModalUpload = styled.div`
  font-size: 14px;
  color: #3897F0;
  cursor: pointer;
  font-weight: 600;
`
const ModalCmtBox = styled.div`
  padding: 0px 16px;
  margin-right: 14px;
  display: flex;
  flex-direction: column;
  height: 480px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
    };
`
const ModalCmt = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 10px;
`
const ModalCmtRight = styled.div`
  font-size: 14px;
`



export default ModalDetail