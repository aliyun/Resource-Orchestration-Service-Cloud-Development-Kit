using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::NLB::LoadBalancers`.</summary>
    [JsiiInterface(nativeType: typeof(ILoadBalancersProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.datasource.LoadBalancersProps")]
    public interface ILoadBalancersProps
    {
        /// <summary>Property addressIpVersion: IP version.</summary>
        [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressIpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property addressType: The address type of the load balancing instance.</summary>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6AddressType: IPv6 address type of network load balancing.</summary>
        [JsiiProperty(name: "ipv6AddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6AddressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerBussinessStatus: Service status of application load balancing.</summary>
        [JsiiProperty(name: "loadBalancerBussinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerBussinessStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerIds: IDs of the load balancer instance.</summary>
        [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerNames: Names of the load balancing instance.</summary>
        [JsiiProperty(name: "loadBalancerNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loadBalancerStatus: The status of SLB.</summary>
        [JsiiProperty(name: "loadBalancerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalancerStatus
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

        /// <summary>Property tags: Tags of Nlb.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nlb.datasource.RosLoadBalancers.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.RosLoadBalancers.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcIds: VPC IDs.</summary>
        [JsiiProperty(name: "vpcIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: ID of the ready-to-use zone of the load balancing instance.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::NLB::LoadBalancers`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancersProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.datasource.LoadBalancersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressIpVersion: IP version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressIpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property addressType: The address type of the load balancing instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6AddressType: IPv6 address type of network load balancing.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6AddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6AddressType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerBussinessStatus: Service status of application load balancing.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerBussinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerBussinessStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerIds: IDs of the load balancer instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LoadBalancerIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerNames: Names of the load balancing instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? LoadBalancerNames
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loadBalancerStatus: The status of SLB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalancerStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalancerStatus
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

            /// <summary>Property tags: Tags of Nlb.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-nlb.datasource.RosLoadBalancers.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.RosLoadBalancers.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.RosLoadBalancers.ITagsProperty[]?>();
            }

            /// <summary>Property vpcIds: VPC IDs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VpcIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: ID of the ready-to-use zone of the load balancing instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
