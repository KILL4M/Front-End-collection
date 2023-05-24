export const dataSource = [
  {
    id: 17,
    orgName: "机关部门",
    childList: [
      {
        id: 19,
        orgName: "公司办公室",
        parentId: 17,
      },
      {
        id: 20,
        orgName: "人力资源部",
        parentId: 17,
      },
    ],
  },
  {
    id: 18,
    orgName: "直属单位",
    childList: [
      {
        id: 30,
        orgName: "集团公司改扩建办公室",
        parentId: 18,
      },
      {
        id: 31,
        orgName: "运行管理总部",
        parentId: 18,
      },
    ],
  },
]

/**
 * demo-1: 把orgName值为'机关部门'或'直属单位'的一级对象的childList拼成一个数组
 */
export function getOrgNameChildList(data) {
  console.log('run');
  // let tree = this.$options.data.call(this).treeData;
  // console.log("处理前", tree);
  let res = [];
  data.forEach((el) => {
    if (el.orgName === "机关部门" || el.orgName === "直属单位") {
      res = res.concat(el.childList);
    }
  });
  // console.log("处理后", deptOptions);
  // this.finalTreeData = deptOptions
  return res
}

// demo-2
export function getOrgNameChildList2(data) {
  // let tree = this.$options.data.call(this).treeData;
  // console.log("处理前", tree);
  let res = [];
  data.forEach((el) => {
    if (el.orgName === "机关部门") {
      res = res.concat(el.childList);
    }
  });
  // console.log("处理后", deptOptions);
  // this.finalTreeData = deptOptions
  return res
}

export const solutionMap = [
  {
    category: 'A',
    action: getOrgNameChildList,
    description: '把orgName值为"机关部门"或"直属单位"的一级对象的childList拼成一个数组',
    sourceCode: getOrgNameChildList.toString(),
  },
  {
    category: 'B',
    action: getOrgNameChildList2,
    description: '123455',
    sourceCode: getOrgNameChildList2.toString(),
  },
]
