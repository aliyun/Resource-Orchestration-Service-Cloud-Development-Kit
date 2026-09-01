using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `RosHostAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHostAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.RosHostAccountProps")]
    public interface IRosHostAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: hostAccountName: The name of the new host account. The name can be up to 128 characters long.
        /// </remarks>
        [JsiiProperty(name: "hostAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostAccountName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostId: The ID of the host.
        /// </remarks>
        [JsiiProperty(name: "hostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the bastion host instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocolName: The protocol name of the host account. Valid values: SSH, RDP.
        /// </remarks>
        [JsiiProperty(name: "protocolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
        /// </remarks>
        [JsiiProperty(name: "hostShareKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostShareKeyId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
        /// </remarks>
        [JsiiProperty(name: "passPhrase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PassPhrase
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: privateKey: The private key of the new host account. The value is a Base64-encoded string.
        /// > This parameter is used only when ProtocolName is set to SSH. You do not need to
        /// set this parameter if ProtocolName is set to RDP. You can set both a password and
        /// a private key for the host account. When connecting to the asset, Bastionhost
        /// prioritizes the private key for the connection.
        /// </remarks>
        [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: privilegeType: The permission type of the account. If you do not set this parameter, the default
        /// value is Normal.
        /// - Privileged: privileged account
        /// - Normal: normal account
        /// > This parameter is supported only in Bastionhost V3.2.47 and later.
        /// </remarks>
        [JsiiProperty(name: "privilegeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivilegeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rotationMode: The password change mode for the account. If you do not set this parameter, the
        /// default value is Self.
        /// - Privileged: Use a privileged account to change the password.
        /// - Self: Do not use a privileged account to change the password.
        /// > This parameter is supported only in Bastionhost V3.2.47 and later.
        /// </remarks>
        [JsiiProperty(name: "rotationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RotationMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosHostAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHostAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.RosHostAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IRosHostAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: hostAccountName: The name of the new host account. The name can be up to 128 characters long.
            /// </remarks>
            [JsiiProperty(name: "hostAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostId: The ID of the host.
            /// </remarks>
            [JsiiProperty(name: "hostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the bastion host instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocolName: The protocol name of the host account. Valid values: SSH, RDP.
            /// </remarks>
            [JsiiProperty(name: "protocolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostShareKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostShareKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passPhrase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PassPhrase
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privateKey: The private key of the new host account. The value is a Base64-encoded string.
            /// > This parameter is used only when ProtocolName is set to SSH. You do not need to
            /// set this parameter if ProtocolName is set to RDP. You can set both a password and
            /// a private key for the host account. When connecting to the asset, Bastionhost
            /// prioritizes the private key for the connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: privilegeType: The permission type of the account. If you do not set this parameter, the default
            /// value is Normal.
            /// - Privileged: privileged account
            /// - Normal: normal account
            /// > This parameter is supported only in Bastionhost V3.2.47 and later.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privilegeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivilegeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rotationMode: The password change mode for the account. If you do not set this parameter, the
            /// default value is Self.
            /// - Privileged: Use a privileged account to change the password.
            /// - Self: Do not use a privileged account to change the password.
            /// > This parameter is supported only in Bastionhost V3.2.47 and later.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rotationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RotationMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
