
import { Text } from "@mantine/core";

interface IDisplayItemProps {
  title: string;
  text: string | number;
}

const DisplayItem: React.FC<IDisplayItemProps> = ({ title, text }) => (
  <Text mt="sm" c="dimmed" size="sm">
    <b>{title}</b>
    {' '}
	  {text}
  </Text>
);

export default DisplayItem;
