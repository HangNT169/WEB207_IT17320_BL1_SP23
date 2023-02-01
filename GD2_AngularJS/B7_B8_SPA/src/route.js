var myApp = angular.module("myModule", ["ngRoute"]);
// chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {
  // xoa tren duong dan
  $locationProvider.hashPrefix("");
  // chuyen trang : $routeProvider
  $routeProvider
    .when("/trang-chu", {
      // lam gi thi lam
      // noi dung cua trang chu
      template: `<section>
              <h1>Noi dung trang chu</h1>
               <h1>Noi dung trang chu1111</h1>
               <h1>Noi dung trang chu1111</h1>
               <table>
               <tr>
                 <th>Company</th>
                 <th>Contact</th>
                 <th>Country</th>
               </tr>
               <tr>
                 <td>Alfreds Futterkiste</td>
                 <td>Maria Anders</td>
                 <td>Germany</td>
               </tr>
               <tr>
                 <td>Centro comercial Moctezuma</td>
                 <td>Francisco Chang</td>
                 <td>Mexico</td>
               </tr>
             </table>
          </section>`,
    })
    .when("/chung-toi", {
      // lam gi thi lam
      // noi dung cua trang chu
      //   template: "<h1>Noi dung ve chung toi </h1>",
      //   truyen 1 file html
      templateUrl: "./pages/ve-chung-toi.html",
    })
    .when("/lien-he", {
      // lam gi thi lam
      // noi dung cua trang chu
      template: "<h1>Noi dung lien he</h1>",
    })
    .otherwise({
      redirectTo: "/trang-chu",
    });
});
