package alicloudroscdkvpc


// Properties for defining a `AnycastEIPAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
type AnycastEIPAssociationProps struct {
	// Property anycastId: Anycast EIP instance ID.
	AnycastId interface{} `field:"required" json:"anycastId" yaml:"anycastId"`
	// Property bindInstanceId: The ID of the cloud resource instance to be bound.
	BindInstanceId interface{} `field:"required" json:"bindInstanceId" yaml:"bindInstanceId"`
	// Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
	BindInstanceRegionId interface{} `field:"required" json:"bindInstanceRegionId" yaml:"bindInstanceRegionId"`
	// Property bindInstanceType: The cloud resource instance type to be bound.
	//
	// Valid value: SlbInstance, SLB instance of private network type.
	BindInstanceType interface{} `field:"required" json:"bindInstanceType" yaml:"bindInstanceType"`
}

