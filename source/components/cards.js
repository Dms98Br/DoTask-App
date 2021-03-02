import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const cards = (props) => (
  <Card>
    <Card.Content>
      <Title>{props.desc}</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>
);

export default cards;