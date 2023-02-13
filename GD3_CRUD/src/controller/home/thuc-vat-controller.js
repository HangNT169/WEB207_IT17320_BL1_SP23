window.ThucVatController = function ($scope, $http) {
  // De giao tiep giua BE , FE
  // => Phuong thuc HTTP
  // Su dung HTTP Method: GET, POST, PUT, DELETE,...
  // CRUD : CREATE, READ, UPDATE,DELETE
  // HTTP STATUS CODE: 200,201,400,404,401,403,500...
  // GET: Hien thi du lieu <=> READ <=> SELECT
  $scope.listThucVat = [];
  $scope.request = {
    ten: "",
    loai: "",
    gioiTinh: true,
  };
  $http.get(thucVatAPI).then(function (response) {
    $scope.listThucVat = response.data;
  });

  // Detail
  $scope.detailThucVat = function (event, index) {
    event.preventDefault();
    let tv = $scope.listThucVat[index];
    $scope.request.ten = tv.ten;
    $scope.request.loai = tv.loai;
    $scope.request.gioiTinh = tv.gioiTinh;
  };

  // Remove: Xoa du lieu <=> DELETE <=> DELETE
  $scope.removeThucVat = function (event, index) {
    event.preventDefault();
    let tv = $scope.listThucVat[index];
    let api = thucVatAPI + "/" + tv.id;
    $http.delete(api).then(function () {
      $scope.listThucVat.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };

  // Add <=> CREATE <=> POST
  $scope.addThucVat = function (event) {
    event.preventDefault();
    $http.post(thucVatAPI, $scope.request).then(function (response) {
      $scope.listThucVat.push(response.data);
    });
  };

  // Update : PUT
  $scope.updateThucVat = function (event) {};
};
