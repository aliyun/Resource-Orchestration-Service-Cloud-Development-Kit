package alicloudroscdkasm


// Properties for defining a `ServiceMesh`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
type ServiceMeshProps struct {
	// Property vpcId: The ID of the virtual private cloud (VPC).
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].
	VSwitches interface{} `field:"required" json:"vSwitches" yaml:"vSwitches"`
	// Property accessLogEnabled: Specifies whether to enable access logging.
	AccessLogEnabled interface{} `field:"optional" json:"accessLogEnabled" yaml:"accessLogEnabled"`
	// Property accessLogFile: Enable and disable access logs.
	//
	// Value:
	// - "" : Turn off access logs.
	// - \/dev\/stdout: Enables access logging.
	AccessLogFile interface{} `field:"optional" json:"accessLogFile" yaml:"accessLogFile"`
	// Property accessLogFormat: The format of access logs.
	AccessLogFormat interface{} `field:"optional" json:"accessLogFormat" yaml:"accessLogFormat"`
	// Property accessLogProject: The Log Service project for access logs.
	AccessLogProject interface{} `field:"optional" json:"accessLogProject" yaml:"accessLogProject"`
	// Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled.
	//
	// Value:
	// - true: Enables Envoy's gRPC logging service.
	// - false: Envoy's gRPC logging service is not enabled.
	// Default value: false.
	AccessLogServiceEnabled interface{} `field:"optional" json:"accessLogServiceEnabled" yaml:"accessLogServiceEnabled"`
	// Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
	AccessLogServiceHost interface{} `field:"optional" json:"accessLogServiceHost" yaml:"accessLogServiceHost"`
	// Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
	AccessLogServicePort interface{} `field:"optional" json:"accessLogServicePort" yaml:"accessLogServicePort"`
	// Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.
	//
	// Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
	ApiServerLoadBalancerSpec interface{} `field:"optional" json:"apiServerLoadBalancerSpec" yaml:"apiServerLoadBalancerSpec"`
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
	// Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed.
	//
	// Value:
	// - true: Automatic renewal.
	// - false: No automatic renewal.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property autoRenewPeriod: ChargeType is a PrePay.
	//
	// Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
	CertChain interface{} `field:"optional" json:"certChain" yaml:"certChain"`
	// Property chargeType: CLB payment type.
	//
	// Value:
	// - PayOnDemand: pay-as-you-go type
	// - PrePay: Annual and monthly.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property clusterSpec: Service grid instance specification, value: - standard: The standard version.
	//
	// - enterprise: Enterprise Edition
	// - ultimate: ultimate.
	ClusterSpec interface{} `field:"optional" json:"clusterSpec" yaml:"clusterSpec"`
	// Property configSourceEnabled: Whether to enable an external service registry.
	//
	// Value:
	// - true: Enables the external service registry.
	// - false: The external service registry is not enabled.
	// Default value: false.
	ConfigSourceEnabled interface{} `field:"optional" json:"configSourceEnabled" yaml:"configSourceEnabled"`
	// Property configSourceNacosId: The Nacos ID for config source.
	ConfigSourceNacosId interface{} `field:"optional" json:"configSourceNacosId" yaml:"configSourceNacosId"`
	// Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
	ControlPlaneLogEnabled interface{} `field:"optional" json:"controlPlaneLogEnabled" yaml:"controlPlaneLogEnabled"`
	// Property controlPlaneLogProject: The Log Service project for control plane logs.
	ControlPlaneLogProject interface{} `field:"optional" json:"controlPlaneLogProject" yaml:"controlPlaneLogProject"`
	// Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.
	CrAggregationEnabled interface{} `field:"optional" json:"crAggregationEnabled" yaml:"crAggregationEnabled"`
	// Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
	CustomizedPrometheus interface{} `field:"optional" json:"customizedPrometheus" yaml:"customizedPrometheus"`
	// Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
	CustomizedZipkin interface{} `field:"optional" json:"customizedZipkin" yaml:"customizedZipkin"`
	// Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
	DnsProxyingEnabled interface{} `field:"optional" json:"dnsProxyingEnabled" yaml:"dnsProxyingEnabled"`
	// Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
	DubboFilterEnabled interface{} `field:"optional" json:"dubboFilterEnabled" yaml:"dubboFilterEnabled"`
	// Property edition: The edition of the ASM instance.
	Edition interface{} `field:"optional" json:"edition" yaml:"edition"`
	// Property enableAcmg: Specifies whether to enable ACMG.
	EnableAcmg interface{} `field:"optional" json:"enableAcmg" yaml:"enableAcmg"`
	// Property enableAmbient: Specifies whether to enable ambient mode.
	EnableAmbient interface{} `field:"optional" json:"enableAmbient" yaml:"enableAmbient"`
	// Property enableAudit: Specifies whether to enable the mesh audit feature.
	//
	// To enable this feature, make sure
	// that you have activated Alibaba Cloud Log Service.
	// Valid values: true and false. Default value: false.
	EnableAudit interface{} `field:"optional" json:"enableAudit" yaml:"enableAudit"`
	// Property enableCrHistory: Specifies whether to enable CR history.
	EnableCrHistory interface{} `field:"optional" json:"enableCrHistory" yaml:"enableCrHistory"`
	// Property enableSdsServer: Specifies whether to enable SDS server.
	EnableSdsServer interface{} `field:"optional" json:"enableSdsServer" yaml:"enableSdsServer"`
	// Property excludeInboundPorts: The inbound ports to exclude from traffic management.
	ExcludeInboundPorts interface{} `field:"optional" json:"excludeInboundPorts" yaml:"excludeInboundPorts"`
	// Property excludeIpRanges: The IP ranges to exclude from traffic management.
	ExcludeIpRanges interface{} `field:"optional" json:"excludeIpRanges" yaml:"excludeIpRanges"`
	// Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
	ExcludeOutboundPorts interface{} `field:"optional" json:"excludeOutboundPorts" yaml:"excludeOutboundPorts"`
	// Property existingCaCert: The existing CA certificate.
	ExistingCaCert interface{} `field:"optional" json:"existingCaCert" yaml:"existingCaCert"`
	// Property existingCaKey: The existing CA key.
	ExistingCaKey interface{} `field:"optional" json:"existingCaKey" yaml:"existingCaKey"`
	// Property existingCaType: The type of existing CA.
	ExistingCaType interface{} `field:"optional" json:"existingCaType" yaml:"existingCaType"`
	// Property existingRootCaCert: The existing root CA certificate.
	ExistingRootCaCert interface{} `field:"optional" json:"existingRootCaCert" yaml:"existingRootCaCert"`
	// Property existingRootCaKey: The existing root CA key.
	ExistingRootCaKey interface{} `field:"optional" json:"existingRootCaKey" yaml:"existingRootCaKey"`
	// Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
	FilterGatewayClusterConfig interface{} `field:"optional" json:"filterGatewayClusterConfig" yaml:"filterGatewayClusterConfig"`
	// Property gatewayApiEnabled: Specifies whether to enable Gateway API.
	GatewayApiEnabled interface{} `field:"optional" json:"gatewayApiEnabled" yaml:"gatewayApiEnabled"`
	// Property guestCluster: The guest cluster configuration.
	GuestCluster interface{} `field:"optional" json:"guestCluster" yaml:"guestCluster"`
	// Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
	IncludeIpRanges interface{} `field:"optional" json:"includeIpRanges" yaml:"includeIpRanges"`
	// Property istioVersion: The Istio version of the ASM instance.
	IstioVersion interface{} `field:"optional" json:"istioVersion" yaml:"istioVersion"`
	// Property kialiEnabled: Specifies whether to enable Kiali.
	KialiEnabled interface{} `field:"optional" json:"kialiEnabled" yaml:"kialiEnabled"`
	// Property localityLbConf: The locality load balancing configuration.
	LocalityLbConf interface{} `field:"optional" json:"localityLbConf" yaml:"localityLbConf"`
	// Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
	//
	// Valid values: true and false. Default value: false.
	LocalityLoadBalancing interface{} `field:"optional" json:"localityLoadBalancing" yaml:"localityLoadBalancing"`
	// Property mseEnabled: Specifies whether to enable MSE.
	MseEnabled interface{} `field:"optional" json:"mseEnabled" yaml:"mseEnabled"`
	// Property multiBufferEnabled: Specifies whether to enable multi-buffer.
	MultiBufferEnabled interface{} `field:"optional" json:"multiBufferEnabled" yaml:"multiBufferEnabled"`
	// Property multiBufferPollDelay: The poll delay for multi-buffer.
	MultiBufferPollDelay interface{} `field:"optional" json:"multiBufferPollDelay" yaml:"multiBufferPollDelay"`
	// Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
	MysqlFilterEnabled interface{} `field:"optional" json:"mysqlFilterEnabled" yaml:"mysqlFilterEnabled"`
	// Property name: The name of the ASM instance.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property opa: OPA settings.
	Opa interface{} `field:"optional" json:"opa" yaml:"opa"`
	// Property opaEnabled: Specifies whether to enable OPA.
	OpaEnabled interface{} `field:"optional" json:"opaEnabled" yaml:"opaEnabled"`
	// Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
	OutboundTrafficPolicy interface{} `field:"optional" json:"outboundTrafficPolicy" yaml:"outboundTrafficPolicy"`
	// Property period: The subscription period.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
	PilotLoadBalancerSpec interface{} `field:"optional" json:"pilotLoadBalancerSpec" yaml:"pilotLoadBalancerSpec"`
	// Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
	//
	// Valid values: true and false. Default value: false.
	// If you do not set this parameter, only clusters in the same VPC as the ASM instance
	// can access Istio Pilot of the instance.
	PilotPublicEip interface{} `field:"optional" json:"pilotPublicEip" yaml:"pilotPublicEip"`
	// Property playgroundScene: The playground scene configuration.
	PlaygroundScene interface{} `field:"optional" json:"playgroundScene" yaml:"playgroundScene"`
	// Property prometheusUrl: The URL for Prometheus.
	PrometheusUrl interface{} `field:"optional" json:"prometheusUrl" yaml:"prometheusUrl"`
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
	// Property useExistingCa: Specifies whether to use an existing CA.
	UseExistingCa interface{} `field:"optional" json:"useExistingCa" yaml:"useExistingCa"`
	// Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
	WebAssemblyFilterEnabled interface{} `field:"optional" json:"webAssemblyFilterEnabled" yaml:"webAssemblyFilterEnabled"`
}

