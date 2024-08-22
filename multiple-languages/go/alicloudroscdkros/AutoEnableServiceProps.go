package alicloudroscdkros


// Properties for defining a `AutoEnableService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-autoenableservice
type AutoEnableServiceProps struct {
	// Property serviceName: Which service to enable.
	//
	// Valid values:
	// AHAS: Application High Availability Service
	// ARMS: Realtime Monitoring Service
	// ARMS\/App: Application Monitoring: Basic Edition
	// ARMS\/Web: Front End Monitoring: Basic Edition
	// ARMS\/PrometheusMonitor: Prometheus Monitoring: Expert Edition
	// ARMS\/SyntheticPost: Cloud Dial Test: Expert Edition (pay as you go)
	// ApiGateway: API Gateway
	// BatchCompute: Batch Compute
	// BrainIndustrial: Brain Industrial
	// CloudStorageGateway: Cloud Storage Gateway
	// CMS: Cloud Monitor Service
	// CR: Container Registry
	// CS: Container Service
	// DataHub: Data Hub
	// DataWorks: DataWorks
	// DCDN: Dynamic Route for CDN
	// EDAS: Enterprise Distributed Application Service
	// EMAS: Enterprise Mobile Application Studio
	// FC: Function Compute
	// FNF: Serverless Workflow
	// MaxCompute: MaxCompute
	// NAS: Network Attached Storage
	// MNS: Message Service (MNS)
	// HBR: Hybrid Backup Recovery
	// IMM: Intelligent Media Management
	// IOT: IoT Platform
	// KMS: Key Management Service
	// NLP: Natural Language Processing
	// OSS: Object Storage Service
	// OTS: Table Store
	// PrivateLink: Private Link
	// PrivateZone: Private Zone
	// RocketMQ: RocketMQ
	// SAE: Serverless App Engine
	// SLS: Log Service
	// TrafficMirror: VPC Traffic Mirroring
	// VS: Video Surveillance
	// Xtrace: Tracing Anlaysis
	// CDN: Content Delivery Network
	// CDT: Cloud Data Transfer
	// CDTCb: Cloud Data Transfer for Cross Border
	// TransitRouter: Cen Transit Router
	// PAI: Platform of Artificial Intelligence
	// Config: Cloud Config
	// TrustedService\/ROS: Trusted Service for ROS
	// CloudSSO: Cloud SSO
	// ControlPolicy: Control Policy.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
}

