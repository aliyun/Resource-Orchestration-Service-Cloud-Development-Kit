package datasource


// Properties for defining a `RosTLSPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicy
type RosTLSPolicyProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

