using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `AutoEnableService`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-autoenableservice
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAutoEnableServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.AutoEnableServiceProps")]
    public interface IAutoEnableServiceProps
    {
        /// <summary>Property serviceName: Which service to enable.</summary>
        /// <remarks>
        /// Valid values:
        /// AHAS: Application High Availability Service
        /// ARMS: Realtime Monitoring Service
        /// ARMS/App: Application Monitoring: Basic Edition
        /// ARMS/Web: Front End Monitoring: Basic Edition
        /// ARMS/PrometheusMonitor: Prometheus Monitoring: Expert Edition
        /// ARMS/SyntheticPost: Cloud Dial Test: Expert Edition (pay as you go)
        /// ApiGateway: API Gateway
        /// BatchCompute: Batch Compute
        /// BrainIndustrial: Brain Industrial
        /// CloudStorageGateway: Cloud Storage Gateway
        /// CMS: Cloud Monitor Service
        /// CS: Container Service
        /// DataHub: Data Hub
        /// DataWorks: DataWorks
        /// DCDN: Dynamic Route for CDN
        /// EDAS: Enterprise Distributed Application Service
        /// EMAS: Enterprise Mobile Application Studio
        /// FC: Function Compute
        /// FNF: Serverless Workflow
        /// MaxCompute: MaxCompute
        /// NAS: Network Attached Storage
        /// MNS: Message Service (MNS)
        /// HBR: Hybrid Backup Recovery
        /// IMM: Intelligent Media Management
        /// IOT: IoT Platform
        /// KMS: Key Management Service
        /// NLP: Natural Language Processing
        /// OSS: Object Storage Service
        /// OTS: Table Store
        /// PrivateLink: Private Link
        /// PrivateZone: Private Zone
        /// RocketMQ: RocketMQ
        /// SAE: Serverless App Engine
        /// SLS: Log Service
        /// TrafficMirror: VPC Traffic Mirroring
        /// VS: Video Surveillance
        /// Xtrace: Tracing Anlaysis
        /// CDN: Content Delivery Network
        /// CDT: Cloud Data Transfer
        /// CDTCb: Cloud Data Transfer for Cross Border
        /// TransitRouter: Cen Transit Router
        /// PAI: Platform of Artificial Intelligence
        /// Config: Cloud Config
        /// TrustedService/ROS: Trusted Service for ROS
        /// CloudSSO: Cloud SSO
        /// ControlPolicy: Control Policy
        /// DSC: Data Security Center Free Edition Service
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Properties for defining a `AutoEnableService`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-autoenableservice
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAutoEnableServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.AutoEnableServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IAutoEnableServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serviceName: Which service to enable.</summary>
            /// <remarks>
            /// Valid values:
            /// AHAS: Application High Availability Service
            /// ARMS: Realtime Monitoring Service
            /// ARMS/App: Application Monitoring: Basic Edition
            /// ARMS/Web: Front End Monitoring: Basic Edition
            /// ARMS/PrometheusMonitor: Prometheus Monitoring: Expert Edition
            /// ARMS/SyntheticPost: Cloud Dial Test: Expert Edition (pay as you go)
            /// ApiGateway: API Gateway
            /// BatchCompute: Batch Compute
            /// BrainIndustrial: Brain Industrial
            /// CloudStorageGateway: Cloud Storage Gateway
            /// CMS: Cloud Monitor Service
            /// CS: Container Service
            /// DataHub: Data Hub
            /// DataWorks: DataWorks
            /// DCDN: Dynamic Route for CDN
            /// EDAS: Enterprise Distributed Application Service
            /// EMAS: Enterprise Mobile Application Studio
            /// FC: Function Compute
            /// FNF: Serverless Workflow
            /// MaxCompute: MaxCompute
            /// NAS: Network Attached Storage
            /// MNS: Message Service (MNS)
            /// HBR: Hybrid Backup Recovery
            /// IMM: Intelligent Media Management
            /// IOT: IoT Platform
            /// KMS: Key Management Service
            /// NLP: Natural Language Processing
            /// OSS: Object Storage Service
            /// OTS: Table Store
            /// PrivateLink: Private Link
            /// PrivateZone: Private Zone
            /// RocketMQ: RocketMQ
            /// SAE: Serverless App Engine
            /// SLS: Log Service
            /// TrafficMirror: VPC Traffic Mirroring
            /// VS: Video Surveillance
            /// Xtrace: Tracing Anlaysis
            /// CDN: Content Delivery Network
            /// CDT: Cloud Data Transfer
            /// CDTCb: Cloud Data Transfer for Cross Border
            /// TransitRouter: Cen Transit Router
            /// PAI: Platform of Artificial Intelligence
            /// Config: Cloud Config
            /// TrustedService/ROS: Trusted Service for ROS
            /// CloudSSO: Cloud SSO
            /// ControlPolicy: Control Policy
            /// DSC: Data Security Center Free Edition Service
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
