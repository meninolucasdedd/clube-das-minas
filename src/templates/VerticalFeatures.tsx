/* eslint-disable react/jsx-key */
import { Button, Card, Col, Divider, Row, Typography } from 'antd';

import { Section } from '../layout/Section';

const { Title, Paragraph } = Typography;
const style: React.CSSProperties = { padding: '8px 0' };

const VerticalFeatures = () => (
  <>
    <Section
      title="Vamos falar sobre a mulher na literatura?
    Vem com a gente!"
    >
      <Row
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center',
          alignContent: 'center',
        }}
      >
        <Col span={12}>
          <Card
            style={{
              backgroundColor: '#EDEBEF',
              borderRadius: 8,
              margin: 2,
              justifyContent: 'center',
              height: '650px',
            }}
          >
            <Title>A questão histórica</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet. Eos cumque iure et repellendus rerum
              ut reiciendis labore et quos beatae. Sed unde atque qui eligendi
              quia et quia laborum. In illo possimus non voluptatem quibusdam
              qui veniam magni ad nihil quia ut officiis voluptate.
            </Paragraph>
            <img
              src="https://i.ibb.co/XswPbJC/mulher1.png"
              alt="mulher1"
              style={{
                height: '50%',
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            style={{
              backgroundColor: '#EDEBEF',
              borderRadius: 8,
              margin: 2,
              justifyContent: 'center',
              height: '650px',
            }}
          >
            <Title>Cenário atual</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet. Eos cumque iure et repellendus rerum
              ut reiciendis labore et quos beatae. Sed unde atque qui eligendi
              quia et quia laborum. In illo possimus non voluptatem quibusdam
              qui veniam magni ad nihil quia ut officiis voluptate.
            </Paragraph>

            <img
              src="https://i.ibb.co/p2B64YD/mulher2.png"
              alt="mulher1"
              style={{ height: '50%' }}
            />
          </Card>
        </Col>
      </Row>
    </Section>

    <Section title="Escritoras contemporâneas">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div
            style={{
              backgroundColor: '#EDEBEF',
            }}
          >
            <Card
              bodyStyle={{ backgroundColor: '#EDEBEF' }}
              style={{
                backgroundColor: '#EDEBEF',
                borderRadius: 8,
                margin: 2,
                justifyContent: 'center',
                height: '650px',
              }}
            >
              <img
                src="https://i.ibb.co/rZJd2mm/mulher3.png"
                alt="mulher4"
                style={{
                  height: '50%',
                }}
              />
              <Title level={3}>Adélia Prado</Title>
              <Divider />
              <Paragraph>
                Lorem ipsum dolor sit amet. Eos cumque iure et repellendus rerum
                ut reiciendis labore et quos beatae. Sed unde atque qui eligendi
                quia et quia laborum. In illo possimus non voluptatem quibusdam
                qui veniam magni ad nihil quia ut officiis voluptate.
              </Paragraph>
              <Divider />
              <Button type="primary">Saiba Mais</Button>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Card
              style={{
                backgroundColor: '#EDEBEF',
                borderRadius: 8,
                margin: 2,
                justifyContent: 'center',
                height: '650px',
              }}
            >
              <img
                src="https://i.ibb.co/bXqkgTV/mulher4.png"
                alt="mulher4"
                style={{
                  height: '50%',
                }}
              />
              <Title level={3}>Conceição Evaristo</Title>
              <Divider />
              <Paragraph>
                Lorem ipsum dolor sit amet. Eos cumque iure et repellendus rerum
                ut reiciendis labore et quos beatae. Sed unde atque qui eligendi
                quia et quia laborum. In illo possimus non voluptatem quibusdam
                qui veniam magni ad nihil quia ut officiis voluptate.
              </Paragraph>
              <Divider />
              <Button type="primary">Saiba Mais</Button>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Card
              style={{
                backgroundColor: '#EDEBEF',
                borderRadius: 8,
                margin: 2,
                justifyContent: 'center',
                height: '650px',
              }}
            >
              <img
                src="https://i.ibb.co/KbNqYdF/mulher5.png"
                alt="mulher4"
                style={{
                  height: '50%',
                }}
              />
              <Title level={3}>Lygia Fagundes Telles</Title>
              <Divider />
              <Paragraph>
                Lorem ipsum dolor sit amet. Eos cumque iure et repellendus rerum
                ut reiciendis labore et quos beatae. Sed unde atque qui eligendi
                quia et quia laborum. In illo possimus non voluptatem quibusdam
                qui veniam magni ad nihil quia ut officiis voluptate.
              </Paragraph>
              <Divider />
              <Button type="primary">Saiba Mais</Button>
            </Card>
          </div>
        </Col>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Col className="gutter-row" span={8}>
          <div
            style={{
              backgroundColor: '#EDEBEF',
            }}
          >
            <Card
              bodyStyle={{ backgroundColor: '#EDEBEF' }}
              style={{
                backgroundColor: '#EDEBEF',
                borderRadius: 8,
                margin: 2,
                justifyContent: 'center',
                height: '650px',
              }}
            >
              <img
                src="https://i.ibb.co/NnYqRHN/mulher6.png"
                alt="mulher6"
                style={{
                  height: '50%',
                }}
              />
              <Title level={3}>Ryane Leão</Title>
              <Divider />
              <Paragraph>
                Lorem ipsum dolor sit amet. Eos cumque iure et repellendus rerum
                ut reiciendis labore et quos beatae. Sed unde atque qui eligendi
                quia et quia laborum. In illo possimus non voluptatem quibusdam
                qui veniam magni ad nihil quia ut officiis voluptate.
              </Paragraph>
              <Divider />
              <Button type="primary">Saiba Mais</Button>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div
            style={{
              backgroundColor: '#EDEBEF',
            }}
          >
            <Card
              bodyStyle={{ backgroundColor: '#EDEBEF' }}
              style={{
                backgroundColor: '#EDEBEF',
                borderRadius: 8,
                margin: 2,
                justifyContent: 'center',
                height: '650px',
              }}
            >
              <img
                src="https://i.ibb.co/cLMSV9H/mulher7.png"
                alt="mulher7"
                style={{
                  height: '50%',
                }}
              />
              <Paragraph>
                <Title level={3}>Rupi Kaur</Title>
                <Divider />
                Lorem ipsum dolor sit amet. Eos cumque iure et repellendus rerum
                ut reiciendis labore et quos beatae. Sed unde atque qui eligendi
                quia et quia laborum. In illo possimus non voluptatem quibusdam
                qui veniam magni ad nihil quia ut officiis voluptate.
              </Paragraph>
              <Divider />
              <Button type="primary">Saiba Mais</Button>
            </Card>
          </div>
        </Col>
      </Row>
    </Section>
  </>
);

export { VerticalFeatures };
