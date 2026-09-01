using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ManagedPrometheus`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IManagedPrometheusProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.ManagedPrometheusProps")]
    public interface IManagedPrometheusProps
    {
        /// <summary>Property clusterType: The cluster type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ecs: ECS</description>
        /// <description>one: ACK One</description>
        /// <description>ask: ASK</description>
        /// <description>pro: Container Monitoring Pro</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterType
        {
            get;
        }

        /// <summary>Property securityGroupId: The security group ID of the cluster.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Property vpcId: The vpc ID of the cluster.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The vswith ID of the cluster.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterName: The name of the cluster.</summary>
        /// <remarks>
        /// Required when the ClusterType is ecs.
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property grafanaInstanceId: The ID of the managed Grafana workspace that is associated with the cluster.</summary>
        /// <remarks>
        /// If
        /// you set this parameter to free or leave this parameter empty, the cluster is
        /// associated with a shared Grafana workspace.
        /// </remarks>
        [JsiiProperty(name: "grafanaInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GrafanaInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ManagedPrometheus`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IManagedPrometheusProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.ManagedPrometheusProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IManagedPrometheusProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterType: The cluster type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>ecs: ECS</description>
            /// <description>one: ACK One</description>
            /// <description>ask: ASK</description>
            /// <description>pro: Container Monitoring Pro</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityGroupId: The security group ID of the cluster.</summary>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The vpc ID of the cluster.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The vswith ID of the cluster.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterName: The name of the cluster.</summary>
            /// <remarks>
            /// Required when the ClusterType is ecs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property grafanaInstanceId: The ID of the managed Grafana workspace that is associated with the cluster.</summary>
            /// <remarks>
            /// If
            /// you set this parameter to free or leave this parameter empty, the cluster is
            /// associated with a shared Grafana workspace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "grafanaInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GrafanaInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
