package alicloudroscdksag


// Properties for defining a `RosQosPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
type RosQosPolicyProps struct {
	DestCidr interface{} `field:"required" json:"destCidr" yaml:"destCidr"`
	DestPortRange interface{} `field:"required" json:"destPortRange" yaml:"destPortRange"`
	IpProtocol interface{} `field:"required" json:"ipProtocol" yaml:"ipProtocol"`
	Priority interface{} `field:"required" json:"priority" yaml:"priority"`
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	SourceCidr interface{} `field:"required" json:"sourceCidr" yaml:"sourceCidr"`
	SourcePortRange interface{} `field:"required" json:"sourcePortRange" yaml:"sourcePortRange"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DpiGroupIds interface{} `field:"optional" json:"dpiGroupIds" yaml:"dpiGroupIds"`
	DpiSignatureIds interface{} `field:"optional" json:"dpiSignatureIds" yaml:"dpiSignatureIds"`
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
}

