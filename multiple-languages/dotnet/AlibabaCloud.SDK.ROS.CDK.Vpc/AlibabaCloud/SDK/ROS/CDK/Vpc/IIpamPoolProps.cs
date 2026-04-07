using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `IpamPool`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampool
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIpamPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IpamPoolProps")]
    public interface IIpamPoolProps
    {
        /// <summary>Property ipamScopeId: The ID of the IPAM scope.</summary>
        /// <remarks>
        /// This parameter is required.
        /// </remarks>
        [JsiiProperty(name: "ipamScopeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpamScopeId
        {
            get;
        }

        /// <summary>Property allocationDefaultCidrMask: The default CIDR mask for allocation.</summary>
        [JsiiProperty(name: "allocationDefaultCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocationDefaultCidrMask
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property allocationMaxCidrMask: The maximum CIDR mask for allocation.</summary>
        [JsiiProperty(name: "allocationMaxCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocationMaxCidrMask
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property allocationMinCidrMask: The minimum CIDR mask for allocation.</summary>
        [JsiiProperty(name: "allocationMinCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocationMinCidrMask
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoImport: Whether to automatically import the IPAM pool.</summary>
        [JsiiProperty(name: "autoImport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoImport
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipamPoolDescription: The description of the IPAM pool.</summary>
        [JsiiProperty(name: "ipamPoolDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamPoolDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipamPoolName: The name of the IPAM pool.</summary>
        [JsiiProperty(name: "ipamPoolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamPoolName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6Isp: The IPv6 ISP for the IPAM pool.</summary>
        [JsiiProperty(name: "ipv6Isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Isp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipVersion: The IP version of the IPAM pool.</summary>
        /// <remarks>
        /// Valid values: IPv4, IPv6.
        /// </remarks>
        [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property poolRegionId: The ID of the region where the IPAM pool is located.</summary>
        [JsiiProperty(name: "poolRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PoolRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the IPAM pool belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceIpamPoolId: The ID of the source IPAM pool.</summary>
        [JsiiProperty(name: "sourceIpamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceIpamPoolId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The tags of the IPAM pool.</summary>
        /// <remarks>
        /// The maximum length is 21.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpamPool.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamPool.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `IpamPool`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampool
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIpamPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IpamPoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamPoolProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipamScopeId: The ID of the IPAM scope.</summary>
            /// <remarks>
            /// This parameter is required.
            /// </remarks>
            [JsiiProperty(name: "ipamScopeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpamScopeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allocationDefaultCidrMask: The default CIDR mask for allocation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allocationDefaultCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationDefaultCidrMask
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property allocationMaxCidrMask: The maximum CIDR mask for allocation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allocationMaxCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationMaxCidrMask
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property allocationMinCidrMask: The minimum CIDR mask for allocation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allocationMinCidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationMinCidrMask
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoImport: Whether to automatically import the IPAM pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoImport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoImport
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipamPoolDescription: The description of the IPAM pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipamPoolDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamPoolDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipamPoolName: The name of the IPAM pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipamPoolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamPoolName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6Isp: The IPv6 ISP for the IPAM pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipVersion: The IP version of the IPAM pool.</summary>
            /// <remarks>
            /// Valid values: IPv4, IPv6.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property poolRegionId: The ID of the region where the IPAM pool is located.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "poolRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PoolRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the IPAM pool belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceIpamPoolId: The ID of the source IPAM pool.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceIpamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceIpamPoolId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The tags of the IPAM pool.</summary>
            /// <remarks>
            /// The maximum length is 21.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosIpamPool.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamPool.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosIpamPool.ITagsProperty[]?>();
            }
        }
    }
}
