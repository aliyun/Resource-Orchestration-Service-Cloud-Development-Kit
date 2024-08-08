package alicloudroscdkvpc


// Properties for defining a `RosHaVipAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
type RosHaVipAssociationProps struct {
	HaVipId interface{} `field:"required" json:"haVipId" yaml:"haVipId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
}

