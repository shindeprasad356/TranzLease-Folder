using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspNetCore.Model
{
    public abstract class VMVehicleBase
    {
        public int VehicleID { get; set; }
        public string FuleType { get; set; }
        public string Transmission { get; set; }
        public string BodyType { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Variant { get; set; }
        public int Exshowroom { get; set; }
        public int Registration { get; set; }
        public int OnRoadCost { get; set; }
        public bool IsFavorite { get; set; }
    }

    public class VMVehicleSearch : VMVehicleBase
    {
        public string PlanType { get; set; }
        public int LocationID { get; set; }
        public int ConditionID { get; set; }

        public int ClientID { get; set; }
        public int Tenor { get; set; }
        public bool IsDP { get; set; }
        public decimal TaxBenifit { get; set; }
        public int EMI { get; set; }
        public string UsesPlan { get; set; }
    }

    public class VMPlanVehicle : VMVehicleBase
    {
        public int LocationID { get; set; }
        public string Location { get; set; }
        public int Tenor { get; set; }
        public int TCS { get; set; }
        public int FirstYrIns { get; set; }
        public int Discount { get; set; }
        public int Total { get; set; }
        public int ConditionID { get; set; }

        public string PlanType { get; set; }
        public List<VMPlan> Plans { get; set; }
        public decimal TCSCess { get; set; }
        public int TCSRange { get; set; }
        public string UsesPlan { get; set; }
        public int MinDownPayment { get; set; }
        public string DealerName { get; set; }
    }

    public class VMPlan
    {
        public int EMI { get; set; }
        public int Booking { get; set; }
        public int Tenor { get; set; }
        public string PlanName { get; set; }
        public string SchemeName { get; set; }
        public int ConditionID { get; set; }
        public int AutoEMI { get; set; }
        public string AdvanceType { get; set; }
        public string GuaranteedBonus { get; set; }
        public int SaleValue { get; set; }
        public string BuyBackValue { get; set; }
        public int FirstReferralAmount { get; set; }
        public int ReferralAmount { get; set; }
        public string UsesPlan { get; set; }
        //  public int PromoCodeID { get; set; }

        public string GoodDriveBonus { get; set; }
        public int MonthlySavings { get; set; }
        public int SavingsOverTenor { get; set; }
        public decimal CityWiseDisPer { get; set; }
        public decimal CityWiseDisAmt { get; set; }
        public int InternalDiscountAmt { get; set; }
        public decimal InternalDiscountEMI { get; set; }
        public int TotalExtensionLR { get; set; }
        public int ExtensionBuyCarPrice { get; set; }
        public int SavingPer { get; set; }
        public int ExtensionMonth { get; set; }
        public decimal BankEMI { get; set; }
        public bool hasBothCondition { get; set; }
        public int AssuredPayBack { get; set; }
        public int MaxDownpayment { get; set; }
    }

    public class PriceListVariantWise
    {
        public int VehicleID { get; set; }
        public string Location { get; set; }
        public string PlanName { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Variant { get; set; }
        public string FuleType { get; set; }
        public string Transmission { get; set; }
        public int Exshowroom { get; set; }
        public int Registration { get; set; }
        public int Insurance { get; set; }
        public int TCS { get; set; }
        public int Tenor { get; set; }
        public int DownPayment { get; set; }
        public int EMI { get; set; }
        public int BalloonAmt { get; set; }
        public string GuaranteedBonus { get; set; }
        public string GoodDriveBonus { get; set; }
        public int ReferralAmount { get; set; }
    }

    public class PriceListModelWise
    {
        public List<PriceListVariantWise> LIFESTYLE36 { get; set; }
        public List<PriceListVariantWise> CLASSIQUE36 { get; set; }
        public List<PriceListVariantWise> CLASSIQUE60 { get; set; }

        public PriceListModelWise()
        {
            LIFESTYLE36 = new List<PriceListVariantWise>();
            CLASSIQUE36 = new List<PriceListVariantWise>();
            CLASSIQUE60 = new List<PriceListVariantWise>();
        }
    }
}