import reqwest from "reqwest";
import React,{Component} from "react";

// function user_seach(url ,data , callback){
//   let baseUrl = "http://localhost/index.php/admin/";
//   url = baseUrl + "index/get_id_to_name";
//   reqwest({
//     url: url
//     , type:"jsonp"
//     , method: 'POST'
//     , data: { "id":35 }
//     , success: function (resp) {
//       console.log(resp);
//     }
//   })
// }

// eslint-disable-next-line @typescript-eslint/camelcase
// function user_seach  (_url ,data , callback) {
//   const baseUrl = "http://localhost/index.php/";
//   // url = baseUrl + "index/get_id_to_name";
//   reqwest({
//     url:baseUrl+_url
//     , type:"jsonp"
//     , method: 'POST'
//     , data: { "id":35 }
//     , success: callback,
//   })
// }

export async function user_seach(_url ,_data , callback){

  const baseUrl = "http://localhost/index.php/";
  // url = baseUrl + "index/get_id_to_name";
  reqwest({
    url: baseUrl+_url
    , type:"jsonp"
    , method: "POST"
    , data: _data
    , success: function () {
      alert("success");
    }
    , error:function () {
      alert("test");
    }

  })
}

