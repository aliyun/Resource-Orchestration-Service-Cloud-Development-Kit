using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosFullNatEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFullNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosFullNatEntryProps")]
    public interface IRosFullNatEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessIp: The backend IP address to be modified in FULLNAT address translation.
        /// </remarks>
        [JsiiProperty(name: "accessIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessPort: The backend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "accessPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
        /// </remarks>
        [JsiiProperty(name: "fullNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FullNatTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: The protocol of the packets that are forwarded by the port. Valid values:
        /// TCP
        /// UDP
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: natIp: The NAT IP address that provides address translation.
        /// </remarks>
        [JsiiProperty(name: "natIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: natIpPort: The frontend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "natIpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NatIpPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: The elastic network interface (ENI) ID.
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: fullNatEntryDescription: The description of the FULLNAT entry.
        /// This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
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

        /// <remarks>
        /// <strong>Property</strong>: fullNatEntryName: The FULLNAT entry name. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
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

        /// <summary>Properties for defining a `RosFullNatEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-fullnatentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFullNatEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosFullNatEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosFullNatEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessIp: The backend IP address to be modified in FULLNAT address translation.
            /// </remarks>
            [JsiiProperty(name: "accessIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessPort: The backend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "accessPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: fullNatTableId: The ID of the FULLNAT table to which the FULLNAT entry belongs.
            /// </remarks>
            [JsiiProperty(name: "fullNatTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FullNatTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipProtocol: The protocol of the packets that are forwarded by the port. Valid values:
            /// TCP
            /// UDP
            /// </remarks>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: natIp: The NAT IP address that provides address translation.
            /// </remarks>
            [JsiiProperty(name: "natIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: natIpPort: The frontend port to be modified in the mapping of FULLNAT port. Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "natIpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NatIpPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceId: The elastic network interface (ENI) ID.
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: fullNatEntryDescription: The description of the FULLNAT entry.
            /// This parameter is optional. If you enter a description, the description must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fullNatEntryDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FullNatEntryDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fullNatEntryName: The FULLNAT entry name. The name must be 2 to 128 characters in length. It must start with a letter but cannot start with http:\/\/ or https:\/\/.
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
