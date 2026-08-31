using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `LoadBalancerClone`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancerclone
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILoadBalancerCloneProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.LoadBalancerCloneProps")]
    public interface ILoadBalancerCloneProps
    {
        /// <summary>Property sourceLoadBalancerId: Source load balancer id to clone.</summary>
        [JsiiProperty(name: "sourceLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceLoadBalancerId
        {
            get;
        }

        /// <summary>Property backendServers: The list of ECS instance, which will attached to load balancer.</summary>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosLoadBalancerClone.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backendServersPolicy: Solution for handle the backend server and weights.</summary>
        /// <remarks>
        /// If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        /// </remarks>
        [JsiiProperty(name: "backendServersPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServersPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: The resource metering method for the CLB instance.</summary>
        /// <remarks>
        /// Valid value:
        ///
        /// <list type="bullet">
        /// <description>PayByCLCU: pay-by-data-transfer</description>
        /// </list>
        ///
        ///     As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
        ///     no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerName: The CLB instance name.</summary>
        /// <remarks>
        /// The name must be 1 to 80 characters in length, and can contain digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter.
        /// If you do not specify this parameter, the system automatically assigns a name to
        /// the CLB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerSpec: The specification of the CLB instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>slb.s1.small</description>
        /// <description>slb.s2.small</description>
        /// <description>slb.s2.medium</description>
        /// <description>slb.s3.small</description>
        /// <description>slb.s3.medium</description>
        /// <description>slb.s3.large</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
        ///     do not need to specify this parameter.</description>
        ///     <description>As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
        ///     are no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "loadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to slb.</summary>
        /// <remarks>
        /// Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosLoadBalancerClone.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Slb.RosLoadBalancerClone.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagsPolicy: Solution for handle the tags.</summary>
        /// <remarks>
        /// If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
        /// Default is 'empty'.
        /// </remarks>
        [JsiiProperty(name: "tagsPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagsPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.</summary>
        /// <remarks>
        /// If you want to deploy the CLB instance in a VPC, this parameter is required. If
        /// this parameter is specified, AddessType is set to intranet by default.
        ///
        ///     The vSwitch must be in the primary zone.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LoadBalancerClone`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancerclone
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerCloneProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.LoadBalancerCloneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.ILoadBalancerCloneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sourceLoadBalancerId: Source load balancer id to clone.</summary>
            [JsiiProperty(name: "sourceLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceLoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backendServers: The list of ECS instance, which will attached to load balancer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosLoadBalancerClone.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backendServersPolicy: Solution for handle the backend server and weights.</summary>
            /// <remarks>
            /// If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backendServersPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackendServersPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The resource metering method for the CLB instance.</summary>
            /// <remarks>
            /// Valid value:
            ///
            /// <list type="bullet">
            /// <description>PayByCLCU: pay-by-data-transfer</description>
            /// </list>
            ///
            ///     As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
            ///     no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerName: The CLB instance name.</summary>
            /// <remarks>
            /// The name must be 1 to 80 characters in length, and can contain digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter.
            /// If you do not specify this parameter, the system automatically assigns a name to
            /// the CLB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerSpec: The specification of the CLB instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>slb.s1.small</description>
            /// <description>slb.s2.small</description>
            /// <description>slb.s2.medium</description>
            /// <description>slb.s3.small</description>
            /// <description>slb.s3.medium</description>
            /// <description>slb.s3.large</description>
            /// </list>
            ///
            ///     <list type="bullet">
            ///     <description>If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
            ///     do not need to specify this parameter.</description>
            ///     <description>As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
            ///     are no longer available for purchase. For more details, see <a href="t2857909.xdita#"></a>.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to slb.</summary>
            /// <remarks>
            /// Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosLoadBalancerClone.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Slb.RosLoadBalancerClone.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.RosLoadBalancerClone.ITagsProperty[]?>();
            }

            /// <summary>Property tagsPolicy: Solution for handle the tags.</summary>
            /// <remarks>
            /// If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
            /// Default is 'empty'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagsPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagsPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.</summary>
            /// <remarks>
            /// If you want to deploy the CLB instance in a VPC, this parameter is required. If
            /// this parameter is specified, AddessType is set to intranet by default.
            ///
            ///     The vSwitch must be in the primary zone.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
