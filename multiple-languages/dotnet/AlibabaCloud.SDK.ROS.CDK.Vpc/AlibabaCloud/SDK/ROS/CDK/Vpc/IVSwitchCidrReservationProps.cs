using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `VSwitchCidrReservation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVSwitchCidrReservationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VSwitchCidrReservationProps")]
    public interface IVSwitchCidrReservationProps
    {
        /// <summary>Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property ipVersion: The IP version of the reserved CIDR block.</summary>
        /// <remarks>
        /// Valid values:
        /// IPv4 (default)
        /// IPv6
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

        /// <summary>Property tags:.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVSwitchCidrReservation.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosVSwitchCidrReservation.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.</summary>
        /// <remarks>
        /// When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
        /// When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
        /// Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
        /// </remarks>
        [JsiiProperty(name: "vSwitchCidrReservationCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchCidrReservationCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchCidrReservationDescription: The description of the reserved CIDR block.</summary>
        /// <remarks>
        /// This parameter is empty by default.
        /// The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "vSwitchCidrReservationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchCidrReservationDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.</summary>
        /// <remarks>
        /// When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
        /// When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
        /// Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
        /// </remarks>
        [JsiiProperty(name: "vSwitchCidrReservationMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchCidrReservationMask
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchCidrReservationName: The name of the reserved CIDR block.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "vSwitchCidrReservationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchCidrReservationName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchCidrReservationType: The type of reserved CIDR block.</summary>
        /// <remarks>
        /// Set the value to prefix.
        /// Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
        /// </remarks>
        [JsiiProperty(name: "vSwitchCidrReservationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchCidrReservationType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VSwitchCidrReservation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVSwitchCidrReservationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.VSwitchCidrReservationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVSwitchCidrReservationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipVersion: The IP version of the reserved CIDR block.</summary>
            /// <remarks>
            /// Valid values:
            /// IPv4 (default)
            /// IPv6
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosVSwitchCidrReservation.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosVSwitchCidrReservation.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosVSwitchCidrReservation.ITagsProperty[]?>();
            }

            /// <summary>Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.</summary>
            /// <remarks>
            /// When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
            /// When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
            /// Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchCidrReservationCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchCidrReservationCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchCidrReservationDescription: The description of the reserved CIDR block.</summary>
            /// <remarks>
            /// This parameter is empty by default.
            /// The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchCidrReservationDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchCidrReservationDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.</summary>
            /// <remarks>
            /// When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
            /// When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
            /// Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchCidrReservationMask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchCidrReservationMask
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchCidrReservationName: The name of the reserved CIDR block.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchCidrReservationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchCidrReservationName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchCidrReservationType: The type of reserved CIDR block.</summary>
            /// <remarks>
            /// Set the value to prefix.
            /// Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchCidrReservationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchCidrReservationType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
