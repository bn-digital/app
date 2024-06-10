import { compact } from 'lodash';

export type MakeTitleArgs = {
  title: string,
  prefix?: string | false
  postfix?: string | false
};

function makeTitle({
  title,
  prefix,
  postfix = process.env.NEXT_PUBLIC_APP_NAME,
}: MakeTitleArgs): string {
  return (
    compact([
      prefix,
      title,
      postfix,
    ]).join(' | ')
  );
}

export default {
  makeTitle,
};
