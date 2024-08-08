package alicloudroscdkasm


// Properties for defining a `ServiceMesh`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
type ServiceMeshProps struct {
	// Property vpcId: The ID of the virtual private cloud (VPC).
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].
	VSwitches interface{} `field:"required" json:"vSwitches" yaml:"vSwitches"`
	// Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.
	//
	// Valid values: true and false. Default value: false.
	// If you do not set this parameter, the API server of clusters added to the ASM instance
	// cannot be accessed from the Internet.
	ApiServerPublicEip interface{} `field:"optional" json:"apiServerPublicEip" yaml:"apiServerPublicEip"`
	// Property auditProject: The name of the Log Service project that is used for mesh audit.
	//
	// Default value: mesh-log-{meshId}.
	AuditProject interface{} `field:"optional" json:"auditProject" yaml:"auditProject"`
	// Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
	CustomizedZipkin interface{} `field:"optional" json:"customizedZipkin" yaml:"customizedZipkin"`
	// Property enableAudit: Specifies whether to enable the mesh audit feature.
	//
	// To enable this feature, make sure
	// that you have activated Alibaba Cloud Log Service.
	// Valid values: true and false. Default value: false.
	EnableAudit interface{} `field:"optional" json:"enableAudit" yaml:"enableAudit"`
	// Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
	IncludeIpRanges interface{} `field:"optional" json:"includeIpRanges" yaml:"includeIpRanges"`
	// Property istioVersion: The Istio version of the ASM instance.
	IstioVersion interface{} `field:"optional" json:"istioVersion" yaml:"istioVersion"`
	// Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
	//
	// Valid values: true and false. Default value: false.
	LocalityLoadBalancing interface{} `field:"optional" json:"localityLoadBalancing" yaml:"localityLoadBalancing"`
	// Property name: The name of the ASM instance.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property opa: OPA settings.
	Opa interface{} `field:"optional" json:"opa" yaml:"opa"`
	// Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
	OutboundTrafficPolicy interface{} `field:"optional" json:"outboundTrafficPolicy" yaml:"outboundTrafficPolicy"`
	// Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
	//
	// Valid values: true and false. Default value: false.
	// If you do not set this parameter, only clusters in the same VPC as the ASM instance
	// can access Istio Pilot of the instance.
	PilotPublicEip interface{} `field:"optional" json:"pilotPublicEip" yaml:"pilotPublicEip"`
	// Property proxy: Proxy settings.
	Proxy interface{} `field:"optional" json:"proxy" yaml:"proxy"`
	// Property telemetry: Specifies whether to enable Prometheus monitoring.
	//
	// We recommend that you use Application Real-Time Monitoring Service (ARMS).
	Telemetry interface{} `field:"optional" json:"telemetry" yaml:"telemetry"`
	// Property traceSampling: The sampling percentage of tracing.
	TraceSampling interface{} `field:"optional" json:"traceSampling" yaml:"traceSampling"`
	// Property tracing: Specifies whether to enable the tracing feature.
	//
	// To enable this feature, make sure
	// that you have activated Alibaba Cloud Tracing Analysis.
	// Valid values: true and false. Default value: false.
	Tracing interface{} `field:"optional" json:"tracing" yaml:"tracing"`
}

