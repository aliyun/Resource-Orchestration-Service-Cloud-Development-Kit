package datasource


// Properties for defining a `RosAddresses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-addresses
type RosAddressesProps struct {
	AddressName interface{} `field:"optional" json:"addressName" yaml:"addressName"`
	AllocationId interface{} `field:"optional" json:"allocationId" yaml:"allocationId"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	IpAddress interface{} `field:"optional" json:"ipAddress" yaml:"ipAddress"`
	Isp interface{} `field:"optional" json:"isp" yaml:"isp"`
	PaymentType interface{} `field:"optional" json:"paymentType" yaml:"paymentType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SegmentInstanceId interface{} `field:"optional" json:"segmentInstanceId" yaml:"segmentInstanceId"`
}

