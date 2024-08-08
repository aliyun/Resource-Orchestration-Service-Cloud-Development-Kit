package alicloudroscdksag


// Properties for defining a `SmartAccessGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway
type SmartAccessGatewayProps struct {
	// Property buyerMessage: The remarks left by the buyer.
	BuyerMessage interface{} `field:"required" json:"buyerMessage" yaml:"buyerMessage"`
	// Property chargeType: The billing method of the SAG instance.
	//
	// Set the value to PREPAY, which specifies the subscription billing method.
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	// Property hardWareSpec: The type of the SAG instance.
	//
	// Valid values:
	// sag-100wm
	// sag-1000
	// sag-vcpe.
	HardWareSpec interface{} `field:"required" json:"hardWareSpec" yaml:"hardWareSpec"`
	// Property haType: The deployment mode.
	//
	// Valid values:
	// no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
	// cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
	// device and the other serves as a standby device. Only the active device is connected
	// to Alibaba Cloud. If the active device is not working as expected, you must manually
	// perform a switchover.
	// warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
	// Alibaba Cloud. If an active device is not working as expected, a failover is automatically
	// performed.
	// Note If you want to create an SAG vCPE instance, set the value to warm_backup.
	HaType interface{} `field:"required" json:"haType" yaml:"haType"`
	// Property maxBandWidth: The bandwidth of the SAG instance.
	//
	// If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit\/s.
	// If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit\/s.
	// If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit\/s.
	MaxBandWidth interface{} `field:"required" json:"maxBandWidth" yaml:"maxBandWidth"`
	// Property period: The subscription period of the SAG instance.
	//
	// Unit: months.
	// Valid values: 1 to 9, 12, 24, and 36.
	Period interface{} `field:"required" json:"period" yaml:"period"`
	// Property receiverAddress: The detailed address of the recipient.
	ReceiverAddress interface{} `field:"required" json:"receiverAddress" yaml:"receiverAddress"`
	// Property receiverCity: The city of the recipient address.
	ReceiverCity interface{} `field:"required" json:"receiverCity" yaml:"receiverCity"`
	// Property receiverCountry: The country of the recipient address.
	ReceiverCountry interface{} `field:"required" json:"receiverCountry" yaml:"receiverCountry"`
	// Property receiverDistrict: The district of the recipient address.
	ReceiverDistrict interface{} `field:"required" json:"receiverDistrict" yaml:"receiverDistrict"`
	// Property receiverEmail: The email address of the recipient.
	ReceiverEmail interface{} `field:"required" json:"receiverEmail" yaml:"receiverEmail"`
	// Property receiverMobile: The mobile phone number of the recipient.
	ReceiverMobile interface{} `field:"required" json:"receiverMobile" yaml:"receiverMobile"`
	// Property receiverName: The name of the recipient.
	ReceiverName interface{} `field:"required" json:"receiverName" yaml:"receiverName"`
	// Property receiverState: The province of the recipient address.
	ReceiverState interface{} `field:"required" json:"receiverState" yaml:"receiverState"`
	// Property receiverTown: The town of the recipient address.
	ReceiverTown interface{} `field:"required" json:"receiverTown" yaml:"receiverTown"`
	// Property receiverZip: The postcode of the recipient address.
	ReceiverZip interface{} `field:"required" json:"receiverZip" yaml:"receiverZip"`
	// Property activate: Activate SAG or not.
	//
	// Default is False.
	Activate interface{} `field:"optional" json:"activate" yaml:"activate"`
	// Property alreadyHaveSag: Specifies whether you already have an SAG device.
	//
	// Valid values:
	// true: yes
	// false (default): no.
	AlreadyHaveSag interface{} `field:"optional" json:"alreadyHaveSag" yaml:"alreadyHaveSag"`
	// Property autoPay: Specifies whether to enable auto-payment for the instance.
	//
	// Valid values:
	// true: yes
	// false: no
	// If you set the parameter to false, go to Billing Management to complete the payment
	// after you call this operation. After you complete the payment, the instance can be
	// created.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property cidrBlock: The CIDR blocks of terminals in the private network.
	//
	// Make sure that the CIDR blocks
	// do not overlap with each other.
	// If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
	// the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
	// Protocol (DHCP) enabled.
	CidrBlock interface{} `field:"optional" json:"cidrBlock" yaml:"cidrBlock"`
	// Property description: The description of the SAG instance.
	//
	// The description must be 2 to 256 characters in length, and can contain digits, periods
	// (.), underscores (_), and hyphens (-). It must start with a letter.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the SAG instance.
	//
	// The name must be 2 to 128 characters in length and can contain digits, periods (.),
	// underscores (_), and hyphens (-). It must start with a letter.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property receiverPhone: The landline phone number of the recipient.
	ReceiverPhone interface{} `field:"optional" json:"receiverPhone" yaml:"receiverPhone"`
	// Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
	//
	// static: static routing.
	// dynamic: dynamic routing.
	RoutingStrategy interface{} `field:"optional" json:"routingStrategy" yaml:"routingStrategy"`
	// Property securityLockThreshold: The time that a disconnected SAG device remain locked.
	//
	// The time must be no shorter
	// than zero second.
	// Unit: second.
	SecurityLockThreshold interface{} `field:"optional" json:"securityLockThreshold" yaml:"securityLockThreshold"`
}

