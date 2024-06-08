interface Props {
  infoType: string;
  infoApi: number;
}

function ReposInformation(props: Props) {
  const { infoType, infoApi } = props;
  return (
    <div>
      <p className="text-sm text-[#4B6A9B]">{infoType}</p>
      <p className="space-mono-bold text-2xl">{infoApi}</p>
    </div>
  );
}

export default ReposInformation;
