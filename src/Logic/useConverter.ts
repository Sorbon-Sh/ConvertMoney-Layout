export const useConverter = () => {
  const listConvertEnter = (list: string) => {
    console.log(list);
  };

  const listConvertOut = (list: string) => {
    console.log(list);
  };

  const convert = (enter: number, out: number) => {
    return (+enter * +out) / 100;
  };

  return { convert, listConvertEnter, listConvertOut };
};
