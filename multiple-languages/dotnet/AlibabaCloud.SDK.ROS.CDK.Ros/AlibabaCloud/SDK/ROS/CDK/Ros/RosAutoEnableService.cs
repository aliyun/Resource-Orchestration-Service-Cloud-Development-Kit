using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::ROS::AutoEnableService`, which is used to automatically activate an Alibaba Cloud service or feature.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `AutoEnableService` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-autoenableservice
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ros.RosAutoEnableService), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosAutoEnableService", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ros.RosAutoEnableServiceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosAutoEnableService : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosAutoEnableService(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ros.IRosAutoEnableServiceProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ros.IRosAutoEnableServiceProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAutoEnableService(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosAutoEnableService(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ros.RosAutoEnableService))!;

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Which service to enable. Valid values:
        /// AHAS: Application High Availability Service
        /// ARMS: Realtime Monitoring Service
        /// ARMS\/App: Application Monitoring: Basic Edition
        /// ARMS\/Web: Front End Monitoring: Basic Edition
        /// ARMS\/PrometheusMonitor: Prometheus Monitoring: Expert Edition
        /// ARMS\/SyntheticPost: Cloud Dial Test: Expert Edition (pay as you go)
        /// ApiGateway: API Gateway
        /// BatchCompute: Batch Compute
        /// BrainIndustrial: Brain Industrial
        /// CloudStorageGateway: Cloud Storage Gateway
        /// CMS: Cloud Monitor Service
        /// CR: Container Registry
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
        /// TrustedService\/ROS: Trusted Service for ROS
        /// CloudSSO: Cloud SSO
        /// ControlPolicy: Control Policy
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ServiceName
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
    }
}
