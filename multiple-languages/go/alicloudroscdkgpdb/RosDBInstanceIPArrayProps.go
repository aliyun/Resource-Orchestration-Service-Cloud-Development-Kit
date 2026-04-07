package alicloudroscdkgpdb


// Properties for defining a `RosDBInstanceIPArray`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstanceiparray
type RosDBInstanceIPArrayProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	DbInstanceIpArrayName interface{} `field:"required" json:"dbInstanceIpArrayName" yaml:"dbInstanceIpArrayName"`
	SecurityIpList interface{} `field:"required" json:"securityIpList" yaml:"securityIpList"`
	DbInstanceIpArrayAttribute interface{} `field:"optional" json:"dbInstanceIpArrayAttribute" yaml:"dbInstanceIpArrayAttribute"`
}

