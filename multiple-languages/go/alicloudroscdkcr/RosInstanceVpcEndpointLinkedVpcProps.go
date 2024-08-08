package alicloudroscdkcr


// Properties for defining a `RosInstanceVpcEndpointLinkedVpc`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
type RosInstanceVpcEndpointLinkedVpcProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VswitchId interface{} `field:"required" json:"vswitchId" yaml:"vswitchId"`
	EnableCreateDnsRecordInPvzt interface{} `field:"optional" json:"enableCreateDnsRecordInPvzt" yaml:"enableCreateDnsRecordInPvzt"`
	ModuleName interface{} `field:"optional" json:"moduleName" yaml:"moduleName"`
}

