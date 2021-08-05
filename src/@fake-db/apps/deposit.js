import mock from "../mock";
let data1 = {
  ballance: 1000001,
};

// GET : Calendar Events
mock.onGet("/ballance").reply(() => {
  return [200, data1.ballance];
});
