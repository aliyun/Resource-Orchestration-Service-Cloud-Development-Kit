using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosSnatEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSnatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosSnatEntryProps")]
    public interface IRosSnatEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: snatIp: The public IP address. Separate multiple EIPs with commas.
        /// </remarks>
        [JsiiProperty(name: "snatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SnatIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: snatTableId: The ID of the SNAT table.
        /// </remarks>
        [JsiiProperty(name: "snatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SnatTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: eipAffinity: Specifies whether to enable EIP affinity. Valid values:
        /// 0: no
        /// 1: yes
        /// If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
        /// </remarks>
        [JsiiProperty(name: "eipAffinity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipAffinity
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SnatEntryName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        /// </remarks>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceCidr
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        /// </remarks>
        [JsiiProperty(name: "sourceVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceVSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSnatEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-snatentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSnatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosSnatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosSnatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: snatIp: The public IP address. Separate multiple EIPs with commas.
            /// </remarks>
            [JsiiProperty(name: "snatIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SnatIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: snatTableId: The ID of the SNAT table.
            /// </remarks>
            [JsiiProperty(name: "snatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SnatTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: eipAffinity: Specifies whether to enable EIP affinity. Valid values:
            /// 0: no
            /// 1: yes
            /// If EIP affinity is enabled and the SNAT entry is associated with multiple EIPs, a client uses the same EIP to access the Internet. Otherwise, the client uses an EIP selected from the associated EIPs to access the Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eipAffinity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EipAffinity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SnatEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SourceVSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
