using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCore.Model;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore.Controllers
{
    [Route("api/[controller]")]
    public class VehicleSearchController : Controller
    {
        private readonly IMapper mapper;

        public VehicleSearchController(IMapper _mapper)
        {
            mapper = _mapper;
        }

        [HttpGet("[action]")]
        public async Task<ActionResult> GetAllVehicleSearchResult()
        {
            List<VMVehicleSearch> lstVehicle = new List<VMVehicleSearch>();
            SalesPortalService.SalesPortalServiceSoapClient salesPortalService = new SalesPortalService.SalesPortalServiceSoapClient(SalesPortalService.SalesPortalServiceSoapClient.EndpointConfiguration.SalesPortalServiceSoap);
            var objsearch = await salesPortalService.GetRetailSearchResultAsync(69, 575000, 750000, "", "", null, null, null, null, 0, 0, "flexi own");

            lstVehicle = mapper.Map<List<VMVehicleSearch>>(objsearch);

            return Ok(lstVehicle);
        }

        private ActionResult ProblemDetails()
        {
            throw new NotImplementedException();
        }

        //[HttpGet("[action]")]
        //public async Task<IEnumerable<VMSearch>> GetAllVehicleSearc()
        //{
        //    SalesPortalService.SalesPortalServiceSoapClient salesPortalService = new SalesPortalService.SalesPortalServiceSoapClient(SalesPortalService.SalesPortalServiceSoapClient.EndpointConfiguration.SalesPortalServiceSoap);
        //    var obj = await salesPortalService.GetVehicleDetailAsync("1116");

        //    List<VMSearch> lstVehicle;

        //    return lstVehicle = new List<VMSearch>()
        //    {
        //        new VMSearch{VehicleID =1105,Make="Honda",Model="City",Variant="VMT Metallic",Exshowroom =800000},
        //       new VMSearch{VehicleID =1106,Make="Honda",Model="City",Variant=" Metallic",Exshowroom =900000},
        //    };
        //}
    }
}