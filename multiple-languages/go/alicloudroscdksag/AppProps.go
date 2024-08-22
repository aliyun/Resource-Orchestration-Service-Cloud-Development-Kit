package alicloudroscdksag


// Properties for defining a `App`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
type AppProps struct {
	// Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances.
	//
	// Default value:
	// false. Valid values:
	// true: automatically pays the bills of SAG APP instances.
	// false: does not automatically pay the bills of SAG APP instances.
	// If you set the parameter to false, after you call this operation, go to Billing Management
	// of the SAG console to complete the payment, the instance can be created.
	AutoPay interface{} `field:"required" json:"autoPay" yaml:"autoPay"`
	// Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month.
	//
	// Unit: GB. Set the value to 5.
	// Note The system allows each client account to use 5 GB traffic plan for free.
	DataPlan interface{} `field:"required" json:"dataPlan" yaml:"dataPlan"`
	// Property period: The subscription period of the SAG APP instance.
	//
	// Unit: months.
	// Valid values: 1~9, 12, 24, and 36.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property userCount: The quota of client accounts for the SAG APP instance.
	//
	// Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
	UserCount interface{} `field:"required" json:"userCount" yaml:"userCount"`
	// Property chargeType: The billing method of the SAG APP instance.
	//
	// Set the value to PREPAY.
	// This value indicates that the SAG APP instance is a subscription resource.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
}

