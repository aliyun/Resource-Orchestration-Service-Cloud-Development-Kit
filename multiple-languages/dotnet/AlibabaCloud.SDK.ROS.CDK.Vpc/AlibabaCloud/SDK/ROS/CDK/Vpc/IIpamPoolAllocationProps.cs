using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `IpamPoolAllocation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampoolallocation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IIpamPoolAllocationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IpamPoolAllocationProps")]
    public interface IIpamPoolAllocationProps
    {
        /// <summary>Property ipamPoolId: The ID of the IPAM Pool.</summary>
        [JsiiProperty(name: "ipamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpamPoolId
        {
            get;
        }

        /// <summary>Property cidr: The allocated address segment.</summary>
        [JsiiProperty(name: "cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.</summary>
        /// <remarks>
        ///     Enter at least one of <strong>Cidr</strong> or **CidrMask.
        /// </remarks>
        [JsiiProperty(name: "cidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CidrMask
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.</summary>
        /// <remarks>
        /// It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
        /// </remarks>
        [JsiiProperty(name: "ipamPoolAllocationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamPoolAllocationDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipamPoolAllocationName: The name of the ipam pool allocation.</summary>
        /// <remarks>
        /// It must be 1 to 128 characters in length and cannot start with 'http:// 'or 'https.
        /// </remarks>
        [JsiiProperty(name: "ipamPoolAllocationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpamPoolAllocationName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `IpamPoolAllocation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipampoolallocation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IIpamPoolAllocationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IpamPoolAllocationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IIpamPoolAllocationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipamPoolId: The ID of the IPAM Pool.</summary>
            [JsiiProperty(name: "ipamPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpamPoolId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cidr: The allocated address segment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cidrMask: Create a custom reserved network segment from The IPAM address pool by entering a mask.</summary>
            /// <remarks>
            ///     Enter at least one of <strong>Cidr</strong> or **CidrMask.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cidrMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CidrMask
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipamPoolAllocationDescription: The description of the ipam pool alloctaion.</summary>
            /// <remarks>
            /// It must be 1 to 256 characters in length and must start with an English letter or Chinese character, but cannot start with 'http:// 'or 'https. If it is not filled in, it is empty. The default value is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipamPoolAllocationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamPoolAllocationDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipamPoolAllocationName: The name of the ipam pool allocation.</summary>
            /// <remarks>
            /// It must be 1 to 128 characters in length and cannot start with 'http:// 'or 'https.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipamPoolAllocationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpamPoolAllocationName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
