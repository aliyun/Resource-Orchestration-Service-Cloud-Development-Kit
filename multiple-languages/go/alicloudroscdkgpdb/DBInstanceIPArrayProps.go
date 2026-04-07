package alicloudroscdkgpdb


// Properties for defining a `DBInstanceIPArray`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstanceiparray
type DBInstanceIPArrayProps struct {
	// Property dbInstanceId: The instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbInstanceIpArrayName: The name of the IP address whitelist.
	//
	// If you do not specify this parameter, the default whitelist is queried.
	// >  Each instance supports up to 50 IP address whitelists.
	DbInstanceIpArrayName interface{} `field:"required" json:"dbInstanceIpArrayName" yaml:"dbInstanceIpArrayName"`
	// Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0\/0 - 10.23.12.24(IP) - 10.23.12.24\/24(CIDR mode, Classless Inter-Domain Routing, '\/24' indicates the length of the prefix in the address, and the range is '[1,32]').
	SecurityIpList interface{} `field:"required" json:"securityIpList" yaml:"securityIpList"`
	// Property dbInstanceIpArrayAttribute: The default is empty.
	//
	// To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
	DbInstanceIpArrayAttribute interface{} `field:"optional" json:"dbInstanceIpArrayAttribute" yaml:"dbInstanceIpArrayAttribute"`
}

