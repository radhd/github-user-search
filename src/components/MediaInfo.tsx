interface Props {
  icon: any;
  infoApi: any;
}

function MediaInfo(props: Props) {
  const { icon, infoApi } = props;
  return (
    <div className="flex gap-4 text-[#4B6A9B] dark:text-white">
      {icon}
      <div>{infoApi ? infoApi : "Not Available"}</div>
    </div>
  );
}

export default MediaInfo;
