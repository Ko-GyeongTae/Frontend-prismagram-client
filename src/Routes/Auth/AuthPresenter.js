import React from "react";
import Helmet from "rl-react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import icon from "../../instagram_ico.png";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 38px;
`;

export default ({
  action,
  username,
  firstName,
  lastName,
  email,
  setAction,
  onSubmit,
  secret
}) => {
  return (
    <Wrapper>
      <Form>
        <Img>
          <img src={icon} width="176px" height="52px" alt="instagram_ico" />
        </Img>
        {action === "logIn" && (
          <>
            <Helmet>
              <title>로그인</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder={"이메일"} {...email} type="email" />
              <Button text={"로그인"} />
            </form>
          </>
        )}
        {action === "signUp" && (
          <>
            <Helmet>
              <title>회원가입</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder={"닉네임"} {...username} />
              <Input placeholder={"성"} {...firstName} />
              <Input placeholder={"이름"} {...lastName} />
              <Input placeholder={"이메일"} {...email} type="email" />
              <Button text={"회원가입"} />
            </form>
          </>
        )}
        {action === "confirm" && (
          <>
            <Helmet>
              <title>이메일 인증</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input placeholder="코드입력" required {...secret} />
              <Button text={"확인"} />
            </form>
          </>
        )}
      </Form>
      {action !== "confirm" && (
        <StateChanger>
          {action === "logIn" ? (
            <>
              계정이 없으신가요?{" "}
              <Link onClick={() => setAction("signUp")}>회원가입</Link>
            </>
          ) : (
            <>
              계정이 있으신가요?{" "}
              <Link onClick={() => setAction("logIn")}>로그인</Link>
            </>
          )}
        </StateChanger>
      )}
    </Wrapper>
  );
};
