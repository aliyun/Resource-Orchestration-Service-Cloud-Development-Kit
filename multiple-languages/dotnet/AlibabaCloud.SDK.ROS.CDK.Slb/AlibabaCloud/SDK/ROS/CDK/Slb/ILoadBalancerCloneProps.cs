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

        /// <summary>Property instanceChargeType: Instance billing method.</summary>
        /// <remarks>
        /// Value:PayBySpec: Pay by spec.
        /// PayByCLCU: billed by usage.
        /// If not specified, it is same with the source load balancer.
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

        /// <summary>Property loadBalancerName: Name of created load balancer.</summary>
        /// <remarks>
        /// Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
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

        /// <summary>Property loadBalancerSpec: The specification of the load balancer.</summary>
        /// <remarks>
        /// If not specified, it is same with the source load balancer.
        /// Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
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

        /// <summary>Property vSwitchId: The new VSwitch ID to create load balancer instance.</summary>
        /// <remarks>
        /// For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
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

            /// <summary>Property instanceChargeType: Instance billing method.</summary>
            /// <remarks>
            /// Value:PayBySpec: Pay by spec.
            /// PayByCLCU: billed by usage.
            /// If not specified, it is same with the source load balancer.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerName: Name of created load balancer.</summary>
            /// <remarks>
            /// Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerSpec: The specification of the load balancer.</summary>
            /// <remarks>
            /// If not specified, it is same with the source load balancer.
            /// Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
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

            /// <summary>Property vSwitchId: The new VSwitch ID to create load balancer instance.</summary>
            /// <remarks>
            /// For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
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
