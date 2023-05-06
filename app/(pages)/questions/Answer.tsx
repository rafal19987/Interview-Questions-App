const Answer = ({ answer }: { answer: string }): JSX.Element => {
  return <h2 className="p-6 text-xl text-left text-black">{answer}</h2>;
};

export default Answer;
