interface Props {
  created: string;
}

function UserJoined(props: Props) {
  const { created } = props;

  const format = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };
  return <p className="dark:text-white">Joined {format(created)}</p>;
}

export default UserJoined;
