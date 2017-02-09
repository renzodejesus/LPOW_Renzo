function AlumnosController($scope){
    $scope.alumnos=[
      {nombre: "Renzo", telefono: "956363498", curso: "LPOW"},
      {nombre: "Saulo", telefono: "987981050", curso: "BD"},
      {nombre: "Ariana", telefono: "987654321", curso: "IPN"},
  ];


$scope.Save=function(){
  $scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre,telefono:$scope.nuevoAlumno.telefono,curso:$scope.nuevoAlumno.curso });
  $scope.formVisibility=false;
  console.log($scope.formVisibility)
}

$scope.formVisibility=false;

$scope.ShowForm=function(){
  $scope.formVisibility=true;
  console.log($scope.formVisibility)
}

}
