import * as $ from "jquery";
export class objectResult {
  api_url = "http://crm.csigroups.com/suitecrmdemo/service/v4_1/rest.php";
  user_name = 'admin';    //SugarCRM username
  password = 'csi@dmin9';    //SugarCRM password
  params = {
    session: "v8pkh36c2g2gmoiopkcm3r49l2",
    module_name: "Opportunities"
  };
  json = JSON.stringify(this.params);
  result = $.ajax({
    url: this.api_url,
    type: "POST",
    data: { method: "get_entry_list", input_type: "JSON", response_type: "JSON", rest_data: this.json },
    dataType: "json",
    success: function (result) {
      if (result) {
        //HERE: you will have out put from rest
        //alert("sucessfully LOGIN Your session ID is : " + result.id);
        console.log(result);
        return this.result;
      }
      else
        alert("Error");

    },
    error: function (result) {
      alert("Error");
    }
  });
}
