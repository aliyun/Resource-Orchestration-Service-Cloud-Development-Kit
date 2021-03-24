using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::SnatEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSnatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosSnatEntryProps")]
    public interface IRosSnatEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: snatIp: The public IP address. Separate multiple EIPs with commas.
        /// </remarks>
        [JsiiProperty(name: "snatIp", typeJson: "{\"primitive\":\"string\"}")]
        string SnatIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: snatTableId: The ID of the SNAT table.
        /// </remarks>
        [JsiiProperty(name: "snatTableId", typeJson: "{\"primitive\":\"string\"}")]
        string SnatTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        /// </remarks>
        [JsiiProperty(name: "snatEntryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SnatEntryName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        /// </remarks>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceCidr
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        /// </remarks>
        [JsiiProperty(name: "sourceVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceVSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::SnatEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSnatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosSnatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosSnatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: snatIp: The public IP address. Separate multiple EIPs with commas.
            /// </remarks>
            [JsiiProperty(name: "snatIp", typeJson: "{\"primitive\":\"string\"}")]
            public string SnatIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: snatTableId: The ID of the SNAT table.
            /// </remarks>
            [JsiiProperty(name: "snatTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string SnatTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "snatEntryName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SnatEntryName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceCidr
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceVSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
