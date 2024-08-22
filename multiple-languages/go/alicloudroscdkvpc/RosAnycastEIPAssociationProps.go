package alicloudroscdkvpc


// Properties for defining a `RosAnycastEIPAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
type RosAnycastEIPAssociationProps struct {
	AnycastId interface{} `field:"required" json:"anycastId" yaml:"anycastId"`
	BindInstanceId interface{} `field:"required" json:"bindInstanceId" yaml:"bindInstanceId"`
	BindInstanceRegionId interface{} `field:"required" json:"bindInstanceRegionId" yaml:"bindInstanceRegionId"`
	BindInstanceType interface{} `field:"required" json:"bindInstanceType" yaml:"bindInstanceType"`
}

