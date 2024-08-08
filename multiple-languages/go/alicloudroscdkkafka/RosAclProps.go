package alicloudroscdkkafka


// Properties for defining a `RosAcl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
type RosAclProps struct {
	AclOperationTypes interface{} `field:"required" json:"aclOperationTypes" yaml:"aclOperationTypes"`
	AclResourceName interface{} `field:"required" json:"aclResourceName" yaml:"aclResourceName"`
	AclResourcePatternType interface{} `field:"required" json:"aclResourcePatternType" yaml:"aclResourcePatternType"`
	AclResourceType interface{} `field:"required" json:"aclResourceType" yaml:"aclResourceType"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Username interface{} `field:"required" json:"username" yaml:"username"`
	AclPermissionType interface{} `field:"optional" json:"aclPermissionType" yaml:"aclPermissionType"`
	Host interface{} `field:"optional" json:"host" yaml:"host"`
}

