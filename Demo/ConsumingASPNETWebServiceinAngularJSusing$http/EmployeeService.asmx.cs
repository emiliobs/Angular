﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
//
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace ConsumingASPNETWebServiceinAngularJSusing_http
{
    /// <summary>
    /// Summary description for EmployeeService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetAllEmployee()
        {
            List<Employee> listEmployees = new List<Employee>();

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            using (SqlConnection con = new SqlConnection(cs))
            {
                SqlCommand cmd = new SqlCommand("Select * from tblEmployees", con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();
                while(rdr.Read())
                {
                    Employee employee = new Employee();
                    employee.Id       = Convert.ToInt32( rdr["Id"]);
                    employee.Name     = rdr["Name"].ToString();
                    employee.Gender   = rdr["Gender"].ToString();
                    employee.Salary   = Convert.ToInt32(rdr["Salary"]);

                    listEmployees.Add(employee);
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(listEmployees));

        }
    }
}
