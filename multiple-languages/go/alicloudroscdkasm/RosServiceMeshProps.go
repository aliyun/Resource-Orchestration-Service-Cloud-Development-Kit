package alicloudroscdkasm


// Properties for defining a `RosServiceMesh`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
type RosServiceMeshProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitches interface{} `field:"required" json:"vSwitches" yaml:"vSwitches"`
	AccessLogEnabled interface{} `field:"optional" json:"accessLogEnabled" yaml:"accessLogEnabled"`
	AccessLogFile interface{} `field:"optional" json:"accessLogFile" yaml:"accessLogFile"`
	AccessLogFormat interface{} `field:"optional" json:"accessLogFormat" yaml:"accessLogFormat"`
	AccessLogProject interface{} `field:"optional" json:"accessLogProject" yaml:"accessLogProject"`
	AccessLogServiceEnabled interface{} `field:"optional" json:"accessLogServiceEnabled" yaml:"accessLogServiceEnabled"`
	AccessLogServiceHost interface{} `field:"optional" json:"accessLogServiceHost" yaml:"accessLogServiceHost"`
	AccessLogServicePort interface{} `field:"optional" json:"accessLogServicePort" yaml:"accessLogServicePort"`
	ApiServerLoadBalancerSpec interface{} `field:"optional" json:"apiServerLoadBalancerSpec" yaml:"apiServerLoadBalancerSpec"`
	ApiServerPublicEip interface{} `field:"optional" json:"apiServerPublicEip" yaml:"apiServerPublicEip"`
	AuditProject interface{} `field:"optional" json:"auditProject" yaml:"auditProject"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	CertChain interface{} `field:"optional" json:"certChain" yaml:"certChain"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	ConfigSourceEnabled interface{} `field:"optional" json:"configSourceEnabled" yaml:"configSourceEnabled"`
	ConfigSourceNacosId interface{} `field:"optional" json:"configSourceNacosId" yaml:"configSourceNacosId"`
	ControlPlaneLogEnabled interface{} `field:"optional" json:"controlPlaneLogEnabled" yaml:"controlPlaneLogEnabled"`
	ControlPlaneLogProject interface{} `field:"optional" json:"controlPlaneLogProject" yaml:"controlPlaneLogProject"`
	CrAggregationEnabled interface{} `field:"optional" json:"crAggregationEnabled" yaml:"crAggregationEnabled"`
	CustomizedPrometheus interface{} `field:"optional" json:"customizedPrometheus" yaml:"customizedPrometheus"`
	CustomizedZipkin interface{} `field:"optional" json:"customizedZipkin" yaml:"customizedZipkin"`
	DnsProxyingEnabled interface{} `field:"optional" json:"dnsProxyingEnabled" yaml:"dnsProxyingEnabled"`
	DubboFilterEnabled interface{} `field:"optional" json:"dubboFilterEnabled" yaml:"dubboFilterEnabled"`
	Edition interface{} `field:"optional" json:"edition" yaml:"edition"`
	EnableAcmg interface{} `field:"optional" json:"enableAcmg" yaml:"enableAcmg"`
	EnableAmbient interface{} `field:"optional" json:"enableAmbient" yaml:"enableAmbient"`
	EnableAudit interface{} `field:"optional" json:"enableAudit" yaml:"enableAudit"`
	EnableCrHistory interface{} `field:"optional" json:"enableCrHistory" yaml:"enableCrHistory"`
	EnableSdsServer interface{} `field:"optional" json:"enableSdsServer" yaml:"enableSdsServer"`
	ExcludeInboundPorts interface{} `field:"optional" json:"excludeInboundPorts" yaml:"excludeInboundPorts"`
	ExcludeIpRanges interface{} `field:"optional" json:"excludeIpRanges" yaml:"excludeIpRanges"`
	ExcludeOutboundPorts interface{} `field:"optional" json:"excludeOutboundPorts" yaml:"excludeOutboundPorts"`
	ExistingCaCert interface{} `field:"optional" json:"existingCaCert" yaml:"existingCaCert"`
	ExistingCaKey interface{} `field:"optional" json:"existingCaKey" yaml:"existingCaKey"`
	ExistingCaType interface{} `field:"optional" json:"existingCaType" yaml:"existingCaType"`
	ExistingRootCaCert interface{} `field:"optional" json:"existingRootCaCert" yaml:"existingRootCaCert"`
	ExistingRootCaKey interface{} `field:"optional" json:"existingRootCaKey" yaml:"existingRootCaKey"`
	FilterGatewayClusterConfig interface{} `field:"optional" json:"filterGatewayClusterConfig" yaml:"filterGatewayClusterConfig"`
	GatewayApiEnabled interface{} `field:"optional" json:"gatewayApiEnabled" yaml:"gatewayApiEnabled"`
	GuestCluster interface{} `field:"optional" json:"guestCluster" yaml:"guestCluster"`
	IncludeIpRanges interface{} `field:"optional" json:"includeIpRanges" yaml:"includeIpRanges"`
	IstioVersion interface{} `field:"optional" json:"istioVersion" yaml:"istioVersion"`
	KialiEnabled interface{} `field:"optional" json:"kialiEnabled" yaml:"kialiEnabled"`
	LocalityLbConf interface{} `field:"optional" json:"localityLbConf" yaml:"localityLbConf"`
	LocalityLoadBalancing interface{} `field:"optional" json:"localityLoadBalancing" yaml:"localityLoadBalancing"`
	MseEnabled interface{} `field:"optional" json:"mseEnabled" yaml:"mseEnabled"`
	MultiBufferEnabled interface{} `field:"optional" json:"multiBufferEnabled" yaml:"multiBufferEnabled"`
	MultiBufferPollDelay interface{} `field:"optional" json:"multiBufferPollDelay" yaml:"multiBufferPollDelay"`
	MysqlFilterEnabled interface{} `field:"optional" json:"mysqlFilterEnabled" yaml:"mysqlFilterEnabled"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Opa interface{} `field:"optional" json:"opa" yaml:"opa"`
	OpaEnabled interface{} `field:"optional" json:"opaEnabled" yaml:"opaEnabled"`
	OutboundTrafficPolicy interface{} `field:"optional" json:"outboundTrafficPolicy" yaml:"outboundTrafficPolicy"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PilotLoadBalancerSpec interface{} `field:"optional" json:"pilotLoadBalancerSpec" yaml:"pilotLoadBalancerSpec"`
	PilotPublicEip interface{} `field:"optional" json:"pilotPublicEip" yaml:"pilotPublicEip"`
	PlaygroundScene interface{} `field:"optional" json:"playgroundScene" yaml:"playgroundScene"`
	PrometheusUrl interface{} `field:"optional" json:"prometheusUrl" yaml:"prometheusUrl"`
	Proxy interface{} `field:"optional" json:"proxy" yaml:"proxy"`
	Telemetry interface{} `field:"optional" json:"telemetry" yaml:"telemetry"`
	TraceSampling interface{} `field:"optional" json:"traceSampling" yaml:"traceSampling"`
	Tracing interface{} `field:"optional" json:"tracing" yaml:"tracing"`
	UseExistingCa interface{} `field:"optional" json:"useExistingCa" yaml:"useExistingCa"`
	WebAssemblyFilterEnabled interface{} `field:"optional" json:"webAssemblyFilterEnabled" yaml:"webAssemblyFilterEnabled"`
}

