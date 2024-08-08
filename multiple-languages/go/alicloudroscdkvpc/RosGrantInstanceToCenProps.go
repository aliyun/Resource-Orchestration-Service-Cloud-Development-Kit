package alicloudroscdkvpc


// Properties for defining a `RosGrantInstanceToCen`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
type RosGrantInstanceToCenProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	CenOwnerId interface{} `field:"required" json:"cenOwnerId" yaml:"cenOwnerId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
}

