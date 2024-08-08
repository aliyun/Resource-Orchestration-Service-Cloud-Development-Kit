package alicloudroscdkvpc


// Properties for defining a `VpnGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpngateway
type VpnGatewayProps struct {
	// Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
	//
	// Value: 5|10|20|50|100|200.
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	// Property vpcId: VPC ID to which the VPN gateway belongs.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway.
	//
	// false: Does not automatically pay the bill for the VPN gateway.
	// Default true.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property description: Description of the VPN gateway.
	//
	// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property disasterRecoveryVSwitchId: The second vSwitch with which you want to associate the VPN gateway.
	//
	// If you call this operation in a region that supports the dual-tunnel mode, this parameter is required.
	// You need to specify two vSwitches in different zones from the VPC associated with the VPN gateway to implement disaster recovery across zones.
	// For a region that supports only one zone, disaster recovery across zones is not supported. We recommend that you specify two vSwitches in the zone to implement high availability. You can specify the same vSwitch.
	// For more information about the regions and zones that support the dual-tunnel mode, see Upgrade a VPN gateway to enable the dual-tunnel mode.
	DisasterRecoveryVSwitchId interface{} `field:"optional" json:"disasterRecoveryVSwitchId" yaml:"disasterRecoveryVSwitchId"`
	// Property enableIpsec: Whether to enable IPsec-VPN.
	//
	// The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
	// True (default): Enables the IPsec-VPN feature.
	// False: The IPsec-VPN function is not enabled.
	EnableIpsec interface{} `field:"optional" json:"enableIpsec" yaml:"enableIpsec"`
	// Property enableSsl: Enable the SSL-VPN function.
	//
	// Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
	// True: Enable SSL-VPN.
	// False (default): Does not enable SSL-VPN.
	EnableSsl interface{} `field:"optional" json:"enableSsl" yaml:"enableSsl"`
	// Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property name: Name of the VPN gateway.
	//
	// The default value is the ID of the VPN gateway.
	// The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property networkType: The network type of the VPN gateway.
	//
	// Valid values: public|private.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property period: Purchase time, value: 1~9|12|24|36.
	//
	// When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property sslConnections: The maximum number of clients allowed to connect at the same time.
	SslConnections interface{} `field:"optional" json:"sslConnections" yaml:"sslConnections"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosVpnGateway_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpnType: VPN gateway type.
	VpnType interface{} `field:"optional" json:"vpnType" yaml:"vpnType"`
	// Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

