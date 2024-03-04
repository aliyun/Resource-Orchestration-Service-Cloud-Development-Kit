using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `FullNatEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFullNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.FullNatEntryProps")]
    public interface IFullNatEntryProps
    {
        /// <summary>Property accessIp: The backend IP address to be modified in FULLNAT address translation.</summary>
        [JsiiProperty(name: "accessIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessIp
        {
            get;
        }

        /// <summary>Property accessPort: The backend port to be modified in the mapping of FULLNAT port.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "accessPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessPort
        {
            get;
        }

        /// <summary>Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.</summary>
        [JsiiProperty(name: "fullNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FullNatTableId
        {
            get;
        }

        /// <summary>Property ipProtocol: The protocol of the packets that are forwarded by the port.</summary>
        /// <remarks>
        /// Valid values:
        /// TCP
        /// UDP
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpProtocol
        {
            get;
        }

        /// <summary>Property natIp: The NAT IP address that provides address translation.</summary>
        [JsiiProperty(name: "natIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIp
        {
            get;
        }

        /// <summary>Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "natIpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpPort
        {
            get;
        }

        /// <summary>Property networkInterfaceId: The elastic network interface (ENI) ID.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <summary>Property fullNatEntryDescription: The description of the FULLNAT entry.</summary>
        /// <remarks>
        /// This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "fullNatEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FullNatEntryDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fullNatEntryName: The FULLNAT entry name.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "fullNatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FullNatEntryName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `FullNatEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFullNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.FullNatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IFullNatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessIp: The backend IP address to be modified in FULLNAT address translation.</summary>
            [JsiiProperty(name: "accessIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessPort: The backend port to be modified in the mapping of FULLNAT port.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "accessPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.</summary>
            [JsiiProperty(name: "fullNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FullNatTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipProtocol: The protocol of the packets that are forwarded by the port.</summary>
            /// <remarks>
            /// Valid values:
            /// TCP
            /// UDP
            /// </remarks>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIp: The NAT IP address that provides address translation.</summary>
            [JsiiProperty(name: "natIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property natIpPort: The frontend port to be modified in the mapping of FULLNAT port.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "natIpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkInterfaceId: The elastic network interface (ENI) ID.</summary>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property fullNatEntryDescription: The description of the FULLNAT entry.</summary>
            /// <remarks>
            /// This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullNatEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullNatEntryDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fullNatEntryName: The FULLNAT entry name.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullNatEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullNatEntryName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
