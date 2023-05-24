export const dataSource = [
  {
    id: 18,
    type: "北京",
  },
  {
    id: 17,
    type: "南京",
  },
  {
    id: 20,
    type: "新疆",
  },
  {
    id: 19,
    type: "南京",
  },
]

export function get() {
  // console.log("处理前", arr);

  let res = [];

  dataSource.forEach((el) => res.push(el.type));
  res = Array.from(new Set(res));
  if (res.includes("南京")) {
    res.splice(res.indexOf("南京"), 1);
    res.unshift("南京");
  }

  // console.log("处理后", this.finalArrObj);
  return res
}

export const solutionMap = [
  {
    description: `输出数组a -> 1. 把对象数组中所有对象的type的值取出来
    放到空数组a里 2. 对数组a进行去重 3. 如果数组a中有'南京'
    把'南京'放到数组a中第一个`,
    action: get,
  }
]
