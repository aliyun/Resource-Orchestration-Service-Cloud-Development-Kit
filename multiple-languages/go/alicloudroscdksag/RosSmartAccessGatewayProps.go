package alicloudroscdksag


// Properties for defining a `RosSmartAccessGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway
type RosSmartAccessGatewayProps struct {
	BuyerMessage interface{} `field:"required" json:"buyerMessage" yaml:"buyerMessage"`
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	HardWareSpec interface{} `field:"required" json:"hardWareSpec" yaml:"hardWareSpec"`
	HaType interface{} `field:"required" json:"haType" yaml:"haType"`
	MaxBandWidth interface{} `field:"required" json:"maxBandWidth" yaml:"maxBandWidth"`
	Period interface{} `field:"required" json:"period" yaml:"period"`
	ReceiverAddress interface{} `field:"required" json:"receiverAddress" yaml:"receiverAddress"`
	ReceiverCity interface{} `field:"required" json:"receiverCity" yaml:"receiverCity"`
	ReceiverCountry interface{} `field:"required" json:"receiverCountry" yaml:"receiverCountry"`
	ReceiverDistrict interface{} `field:"required" json:"receiverDistrict" yaml:"receiverDistrict"`
	ReceiverEmail interface{} `field:"required" json:"receiverEmail" yaml:"receiverEmail"`
	ReceiverMobile interface{} `field:"required" json:"receiverMobile" yaml:"receiverMobile"`
	ReceiverName interface{} `field:"required" json:"receiverName" yaml:"receiverName"`
	ReceiverState interface{} `field:"required" json:"receiverState" yaml:"receiverState"`
	ReceiverTown interface{} `field:"required" json:"receiverTown" yaml:"receiverTown"`
	ReceiverZip interface{} `field:"required" json:"receiverZip" yaml:"receiverZip"`
	Activate interface{} `field:"optional" json:"activate" yaml:"activate"`
	AlreadyHaveSag interface{} `field:"optional" json:"alreadyHaveSag" yaml:"alreadyHaveSag"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	CidrBlock interface{} `field:"optional" json:"cidrBlock" yaml:"cidrBlock"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ReceiverPhone interface{} `field:"optional" json:"receiverPhone" yaml:"receiverPhone"`
	RoutingStrategy interface{} `field:"optional" json:"routingStrategy" yaml:"routingStrategy"`
	SecurityLockThreshold interface{} `field:"optional" json:"securityLockThreshold" yaml:"securityLockThreshold"`
}

