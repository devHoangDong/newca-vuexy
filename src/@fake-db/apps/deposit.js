import mock from "../mock";
let data1 = {
  ballance: 999999,
};

// GET : Calendar Events
mock.onGet("/ballance").reply(() => {
  return [200, data1.ballance];
});
