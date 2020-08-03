import request from "@/utils/request";

export function getList(data) {
  const mockData = request({
    url: "/table/getList",
    method: "post",
    data,
  });
  mockData.then((value) => {
    console.log(value);
  });
  return mockData;
}

export function doEdit(data) {
  return request({
    url: "/table/doEdit",
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/table/doDelete",
    method: "post",
    data,
  });
}
