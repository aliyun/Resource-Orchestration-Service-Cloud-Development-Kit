export interface RosTag {
  readonly key: string;

  readonly value?: string;
}

export function tagFactory(tags?: { [key: string]: any }[]): RosTag[] {
  let tagList: RosTag[] = [];
  if (!tags) return tagList;
  for (let tag of tags) {
    tagList.push({
      key: tag.key,
      value: tag.value,
    });
  }
  return tagList;
}
