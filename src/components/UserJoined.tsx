interface Props {
  created: string;
}

function UserJoined(props: Props) {
  const { created } = props;
  return <p>{created}</p>;
}

export default UserJoined;
