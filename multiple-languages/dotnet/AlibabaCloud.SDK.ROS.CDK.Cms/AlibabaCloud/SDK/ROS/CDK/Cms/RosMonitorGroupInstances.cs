using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>A ROS template type:  `ALIYUN::CMS::MonitorGroupInstances`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupInstances", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstancesProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosMonitorGroupInstances : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CMS::MonitorGroupInstances`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosMonitorGroupInstances(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitorGroupInstancesProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
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

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
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
        [JsiiProperty(name: "attrGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGroupId
        {
            get => GetInstanceProperty<object>()!;
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
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double GroupId
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instances:
        /// </remarks>
        [JsiiProperty(name: "instances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object Instances
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
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
            /// KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
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
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}")]
            string Category
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the resource instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            string InstanceId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
            string InstanceName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}")]
            string RegionId
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
                /// KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
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
                [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}")]
                public string Category
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: The ID of the resource instance.
                /// </remarks>
                [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
                public string InstanceId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceName: The name of the instance.
                /// </remarks>
                [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}")]
                public string InstanceName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
                /// </remarks>
                [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}")]
                public string RegionId
                {
                    get => GetInstanceProperty<string>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty")]
        public class InstancesProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosMonitorGroupInstances.IInstancesProperty
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
            /// KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
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
            [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Category
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the resource instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string InstanceId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string InstanceName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: regionId: The ID of the region where the instance is deployed, such as cn-hangzhou.
            /// </remarks>
            [JsiiProperty(name: "regionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string RegionId
            {
                get;
                set;
            }
        }
    }
}
