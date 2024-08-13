type Text = {
  textValue: string;
  className?: string;
};

const Text = ({ textValue, className }: Text) => (<p className={className}>{textValue}</p>)

export default Text;
