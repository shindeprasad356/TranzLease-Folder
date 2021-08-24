using AspNetCore.Model;
using AutoMapper;
using SalesPortalService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCore
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<SalesPortalService.VMVehicleSearch, Model.VMVehicleSearch>();
            //CreateMap<DoRetailSearchResult, Model.VMPlanVehicle>()
            //.ForMember(destinationMember => destinationMember.TCSCess, act => act.AllowNull())
            // .ForMember(destinationMember => destinationMember.Location, act => act.AllowNull())
            // .ForMember(destinationMember => destinationMember.TCSRange, act => act.AllowNull())
            // .ForMember(destinationMember => destinationMember.UsesPlan, act => act.AllowNull())
            // .ForMember(destinationMember => destinationMember.MinDownPayment, act => act.AllowNull())
            // .ForMember(destinationMember => destinationMember.DealerName, act => act.AllowNull());
            //   .ForSourceMember(x =>   x.ObjSearchVehicle.tcs, y => y.DoNotValidate() )
            //             .ForSourceMember(x => x.TCSCess, y => y.DoNotValidate())
            //              .ForSourceMember(x => x.IsDeleted, y => y.DoNotValidate())
            //               .ForSourceMember(x => x.IsDeleted, y => y.DoNotValidate())
            //                .ForSourceMember(x => x.IsDeleted, y => y.DoNotValidate())
            //              .ForSourceMember(x => x.IsDeleted, y => y.DoNotValidate());

            //            Location
            // TCSCess
            //TCSRange
            //UsesPlan
            //MinDownPayment
            //DealerName
        }
    }
}