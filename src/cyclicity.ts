export interface CyclicityOptions {
  times: string[] | Record<string, () => void>;
  task?: () => void;
}

export const cyclicity = (options: CyclicityOptions) => {
  return options;
};
