using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::CMS::MonitorGroupInstances`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `MonitorGroupInstances` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupInstances", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstancesProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosMonitorGroupInstances : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosMonitorGroupInstances(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitorGroupInstancesProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitorGroupInstancesProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMonitorGroupInstances(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMonitorGroupInstances(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances))!;

        /// <remarks>
        /// <strong>Attribute</strong>: GroupId: The ID of the application group.
        /// </remarks>
        [JsiiProperty(name: "attrGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

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
        /// <strong>Property</strong>: groupId: The ID of the application group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object GroupId
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

        /// <remarks>
        /// <strong>Property</strong>: instances:
        /// </remarks>
        [JsiiProperty(name: "instances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object Instances
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances.IInstancesProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances.IInstancesProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances.IInstancesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IInstancesProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty")]
        public interface IInstancesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: category: The abbreviation of the service name. Valid values:
            /// ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
            /// RDS (ApsaraDB for RDS)
            /// ADS (AnalyticDB)
            /// SLB (Server Load Balancer)
            /// VPC (Virtual Private Cloud)
            /// APIGATEWAY (API Gateway)
            /// CDN
            /// CS (Container Service for Swarm)
            /// DCDN (Dynamic Route for CDN )
            /// DDoS (distributed denial of service)
            /// EIP (Elastic IP)
            /// ELASTICSEARCH (Elasticsearch)
            /// EMR (E-MapReduce)
            /// ESS (Auto Scaling)
            /// HBASE (ApsaraDB for HBase)
            /// IOT_EDGE (IoT Edge)
            /// K8S_POD (k8s pod )
            /// KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
            /// KVSTORE_SPLITRW (ApsaraDB for Redis read\/write splitting version)
            /// KVSTORE_STANDARD (ApsaraDB for Redis standard version)
            /// MEMCACHE (ApsaraDB for Memcache)
            /// MNS (Message Service)
            /// MONGODB (ApsaraDB for MongoDB replica set instances)
            /// MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
            /// MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
            /// MQ_TOPIC (Message Service topic)
            /// OCS (old version ApsaraDB for Memcache)
            /// OPENSEARCH (Open Search)
            /// OSS (Object Storage Service)
            /// POLARDB (ApsaraDB for POLARDB)
            /// PETADATA (HybridDB for MySQL)
            /// SCDN (Secure Content Delivery Network)
            /// SHAREBANDWIDTHPACKAGES (shared bandwidth package)
            /// SLS (Log Service)
            /// VPN (VPN Gateway )
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Category
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the resource instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object RegionId
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IInstancesProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances.IInstancesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: category: The abbreviation of the service name. Valid values:
                /// ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
                /// RDS (ApsaraDB for RDS)
                /// ADS (AnalyticDB)
                /// SLB (Server Load Balancer)
                /// VPC (Virtual Private Cloud)
                /// APIGATEWAY (API Gateway)
                /// CDN
                /// CS (Container Service for Swarm)
                /// DCDN (Dynamic Route for CDN )
                /// DDoS (distributed denial of service)
                /// EIP (Elastic IP)
                /// ELASTICSEARCH (Elasticsearch)
                /// EMR (E-MapReduce)
                /// ESS (Auto Scaling)
                /// HBASE (ApsaraDB for HBase)
                /// IOT_EDGE (IoT Edge)
                /// K8S_POD (k8s pod )
                /// KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
                /// KVSTORE_SPLITRW (ApsaraDB for Redis read\/write splitting version)
                /// KVSTORE_STANDARD (ApsaraDB for Redis standard version)
                /// MEMCACHE (ApsaraDB for Memcache)
                /// MNS (Message Service)
                /// MONGODB (ApsaraDB for MongoDB replica set instances)
                /// MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
                /// MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
                /// MQ_TOPIC (Message Service topic)
                /// OCS (old version ApsaraDB for Memcache)
                /// OPENSEARCH (Open Search)
                /// OSS (Object Storage Service)
                /// POLARDB (ApsaraDB for POLARDB)
                /// PETADATA (HybridDB for MySQL)
                /// SCDN (Secure Content Delivery Network)
                /// SHAREBANDWIDTHPACKAGES (shared bandwidth package)
                /// SLS (Log Service)
                /// VPN (VPN Gateway )
                /// </remarks>
                [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Category
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: The ID of the resource instance.
                /// </remarks>
                [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceId
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceName: The name of the instance.
                /// </remarks>
                [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
                /// </remarks>
                [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object RegionId
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty")]
        public class InstancesProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances.IInstancesProperty
        {
            private object _category;

            /// <remarks>
            /// <strong>Property</strong>: category: The abbreviation of the service name. Valid values:
            /// ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
            /// RDS (ApsaraDB for RDS)
            /// ADS (AnalyticDB)
            /// SLB (Server Load Balancer)
            /// VPC (Virtual Private Cloud)
            /// APIGATEWAY (API Gateway)
            /// CDN
            /// CS (Container Service for Swarm)
            /// DCDN (Dynamic Route for CDN )
            /// DDoS (distributed denial of service)
            /// EIP (Elastic IP)
            /// ELASTICSEARCH (Elasticsearch)
            /// EMR (E-MapReduce)
            /// ESS (Auto Scaling)
            /// HBASE (ApsaraDB for HBase)
            /// IOT_EDGE (IoT Edge)
            /// K8S_POD (k8s pod )
            /// KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
            /// KVSTORE_SPLITRW (ApsaraDB for Redis read\/write splitting version)
            /// KVSTORE_STANDARD (ApsaraDB for Redis standard version)
            /// MEMCACHE (ApsaraDB for Memcache)
            /// MNS (Message Service)
            /// MONGODB (ApsaraDB for MongoDB replica set instances)
            /// MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
            /// MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
            /// MQ_TOPIC (Message Service topic)
            /// OCS (old version ApsaraDB for Memcache)
            /// OPENSEARCH (Open Search)
            /// OSS (Object Storage Service)
            /// POLARDB (ApsaraDB for POLARDB)
            /// PETADATA (HybridDB for MySQL)
            /// SCDN (Secure Content Delivery Network)
            /// SHAREBANDWIDTHPACKAGES (shared bandwidth package)
            /// SLS (Log Service)
            /// VPN (VPN Gateway )
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Category
            {
                get => _category;
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
                    _category = value;
                }
            }

            private object _instanceId;

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the resource instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => _instanceId;
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
                    _instanceId = value;
                }
            }

            private object _instanceName;

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => _instanceName;
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
                    _instanceName = value;
                }
            }

            private object _regionId;

            /// <remarks>
            /// <strong>Property</strong>: regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RegionId
            {
                get => _regionId;
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
                    _regionId = value;
                }
            }
        }
    }
}
