package alicloudroscdkhbr


// Properties for defining a `RosDbAgent`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
type RosDbAgentProps struct {
	InstanceInfo interface{} `field:"required" json:"instanceInfo" yaml:"instanceInfo"`
	CrossAccountRoleName interface{} `field:"optional" json:"crossAccountRoleName" yaml:"crossAccountRoleName"`
	CrossAccountType interface{} `field:"optional" json:"crossAccountType" yaml:"crossAccountType"`
	CrossAccountUserId interface{} `field:"optional" json:"crossAccountUserId" yaml:"crossAccountUserId"`
}

