package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
type RosInstancesProps struct {
	AdditionalAttributes interface{} `field:"optional" json:"additionalAttributes" yaml:"additionalAttributes"`
	EipAddresses interface{} `field:"optional" json:"eipAddresses" yaml:"eipAddresses"`
	Filters interface{} `field:"optional" json:"filters" yaml:"filters"`
	HpcClusterId interface{} `field:"optional" json:"hpcClusterId" yaml:"hpcClusterId"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InnerIpAddresses interface{} `field:"optional" json:"innerIpAddresses" yaml:"innerIpAddresses"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InstanceNetworkType interface{} `field:"optional" json:"instanceNetworkType" yaml:"instanceNetworkType"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	InstanceTypeFamily interface{} `field:"optional" json:"instanceTypeFamily" yaml:"instanceTypeFamily"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	Ipv6Address interface{} `field:"optional" json:"ipv6Address" yaml:"ipv6Address"`
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	PublicIpAddresses interface{} `field:"optional" json:"publicIpAddresses" yaml:"publicIpAddresses"`
	RdmaIpAddresses interface{} `field:"optional" json:"rdmaIpAddresses" yaml:"rdmaIpAddresses"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Tags *[]*RosInstances_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

