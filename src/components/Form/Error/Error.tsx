import { FC } from "react";

interface Props {
  label?: string;
}

const Error: FC<Props> = ({ label = "This field is required" }) => (
  <span className="text-red-600">{label}</span>
);

export default Error;
