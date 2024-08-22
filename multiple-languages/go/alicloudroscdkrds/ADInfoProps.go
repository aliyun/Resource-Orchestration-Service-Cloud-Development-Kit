package alicloudroscdkrds


// Properties for defining a `ADInfo`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-adinfo
type ADInfoProps struct {
	// Property adAccountName: Domain account name.
	AdAccountName interface{} `field:"required" json:"adAccountName" yaml:"adAccountName"`
	// Property addns: Active directory domain name.
	Addns interface{} `field:"required" json:"addns" yaml:"addns"`
	// Property adPassword: Domain password.
	AdPassword interface{} `field:"required" json:"adPassword" yaml:"adPassword"`
	// Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
	AdServerIpAddress interface{} `field:"required" json:"adServerIpAddress" yaml:"adServerIpAddress"`
	// Property dbInstanceId: The ID of the instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
}

