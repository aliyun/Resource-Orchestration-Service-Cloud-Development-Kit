package alicloudroscdkasm


// Properties for defining a `RosServiceMesh`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
type RosServiceMeshProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitches interface{} `field:"required" json:"vSwitches" yaml:"vSwitches"`
	ApiServerPublicEip interface{} `field:"optional" json:"apiServerPublicEip" yaml:"apiServerPublicEip"`
	AuditProject interface{} `field:"optional" json:"auditProject" yaml:"auditProject"`
	CustomizedZipkin interface{} `field:"optional" json:"customizedZipkin" yaml:"customizedZipkin"`
	EnableAudit interface{} `field:"optional" json:"enableAudit" yaml:"enableAudit"`
	IncludeIpRanges interface{} `field:"optional" json:"includeIpRanges" yaml:"includeIpRanges"`
	IstioVersion interface{} `field:"optional" json:"istioVersion" yaml:"istioVersion"`
	LocalityLoadBalancing interface{} `field:"optional" json:"localityLoadBalancing" yaml:"localityLoadBalancing"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Opa interface{} `field:"optional" json:"opa" yaml:"opa"`
	OutboundTrafficPolicy interface{} `field:"optional" json:"outboundTrafficPolicy" yaml:"outboundTrafficPolicy"`
	PilotPublicEip interface{} `field:"optional" json:"pilotPublicEip" yaml:"pilotPublicEip"`
	Proxy interface{} `field:"optional" json:"proxy" yaml:"proxy"`
	Telemetry interface{} `field:"optional" json:"telemetry" yaml:"telemetry"`
	TraceSampling interface{} `field:"optional" json:"traceSampling" yaml:"traceSampling"`
	Tracing interface{} `field:"optional" json:"tracing" yaml:"tracing"`
}

