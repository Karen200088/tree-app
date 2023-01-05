export let findItemNested: (arr: any[], itemId: (string | number | null)) => any;
findItemNested = (arr: any[], itemId: string | number | null) => (
  // eslint-disable-next-line array-callback-return
  arr.reduce((a, item) => {
    if (a) return a;
    if (item.id === itemId) return item;
    if (item["children"]) return findItemNested(item["children"], itemId)
  }, null)
);