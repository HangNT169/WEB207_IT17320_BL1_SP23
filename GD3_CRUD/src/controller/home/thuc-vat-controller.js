window.ThucVatController = function ($scope, $http) {
  // De giao tiep BE, FE
  // => Phuong thuc HTTP
  // Voi cac HTTP Method : GET,POST,PUT,DELETE.....
  // CRUD: CREATE, READ, UPDATE, DELETE
  // request: Nhung gia tri tham so duoc truyen tu client => server
  // (FE => BE) => Giong tham so truyen vao cua 1 function
  // response: Gia tri nhan duoc tu phia server => client
  // (BE=> FE)=> Giong nhu ket qua tra ve cua 1 function
  // => Giong ket qua tra ve cua 1 function
  $scope.listThucVat = [];
  $scope.form_thucVat = {
    ten: "",
    loai: "",
    gioiTinh: true,
  };
  $scope.viTri = -1;
  // GET: Lay du lieu  <=> READ <=> SELECT
  $http.get(thucVatAPI).then(function (response) {
    $scope.listThucVat = response.data;
  });

  // DELETE <=> DELETE <=> DELETE
  $scope.removeThucVat = function (event, index) {
    event.preventDefault();
    let tv = $scope.listThucVat[index];
    let api = thucVatAPI + "/" + tv.id;
    $http.delete(api).then(function () {
      $scope.listThucVat.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };

  // Detail
  $scope.detailThucVat = function (event, index) {
    event.preventDefault();
    let tv = $scope.listThucVat[index];
    // console.log(tv);
    // $scope.name = tv.name;
    $scope.form_thucVat.ten = tv.ten;
    $scope.form_thucVat.loai = tv.loai;
    $scope.form_thucVat.gioiTinh = tv.gioiTinh;
    $scope.viTri = index;
  };

  // POST: Them du lieu  <=> CREATE <=> INSERT INTO
  $scope.addThucVat = function (event) {
    event.preventDefault();
    $http.post(thucVatAPI, $scope.form_thucVat).then(function (r) {
      $scope.listThucVat.push(r.data);
    });
  };

  // PUT: Thay doi du lieu <=> UPDATE <=> UPDATE
  $scope.updateThucVat = function (event) {
    event.preventDefault();
    let tv = $scope.listThucVat[$scope.viTri];
    let api = thucVatAPI + "/" + tv.id;
    $http.put(api, $scope.form_thucVat).then(function (r) {
      $scope.listThucVat[$scope.viTri] = r.data;
    });
  };
};
