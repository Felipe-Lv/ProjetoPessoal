import { Card } from 'antd';
import { BoxCenter, BoxTop, Container, Logo } from './style';
import "./styled.css";

export default function Inicio() {
    return (
        <>
            <Container>
                <BoxTop>
                    <Logo>Logo aqui</Logo>
                </BoxTop>
                <BoxCenter>
                    <Card style={{ width: "300px", height: "200px" }}>
                    </Card>
                    <Card style={{ width: "300px", height: "200px" }}>
                    </Card>
                    <Card  style={{ width: "300px", height: "200px" }}>
                    </Card>
                </BoxCenter>
            </Container>
        </>
    );
}
