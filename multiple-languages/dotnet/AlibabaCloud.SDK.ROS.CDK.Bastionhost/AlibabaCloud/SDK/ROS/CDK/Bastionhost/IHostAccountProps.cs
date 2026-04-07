using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `HostAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHostAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.HostAccountProps")]
    public interface IHostAccountProps
    {
        /// <summary>Property hostAccountName: The name of the host account.</summary>
        [JsiiProperty(name: "hostAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostAccountName
        {
            get;
        }

        /// <summary>Property hostId: The ID of the host.</summary>
        [JsiiProperty(name: "hostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostId
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the bastion host instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property protocolName: The protocol name of the host account.</summary>
        /// <remarks>
        /// Valid values: SSH, RDP.
        /// </remarks>
        [JsiiProperty(name: "protocolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolName
        {
            get;
        }

        /// <summary>Property hostShareKeyId: The ID of the host share key.</summary>
        /// <remarks>
        /// This parameter is required when the protocol is SSH.
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

        /// <summary>Property passPhrase: The passphrase of the host account.</summary>
        /// <remarks>
        /// This parameter is required when the protocol is SSH and the private key is encrypted.
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

        /// <summary>Property password: The password of the host account.</summary>
        /// <remarks>
        /// This parameter is required when the protocol is SSH or RDP.
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

        /// <summary>Property privateKey: The private key of the host account.</summary>
        /// <remarks>
        /// This parameter is required when the protocol is SSH.
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

        /// <summary>Property privilegeType: The privilege type of the host account.</summary>
        /// <remarks>
        /// Valid values: Normal, Administrator.
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

        /// <summary>Property rotationMode: The rotation mode of the host account.</summary>
        /// <remarks>
        /// Valid values: Manual, Automatic.
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

        /// <summary>Properties for defining a `HostAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHostAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.HostAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IHostAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property hostAccountName: The name of the host account.</summary>
            [JsiiProperty(name: "hostAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostId: The ID of the host.</summary>
            [JsiiProperty(name: "hostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the bastion host instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocolName: The protocol name of the host account.</summary>
            /// <remarks>
            /// Valid values: SSH, RDP.
            /// </remarks>
            [JsiiProperty(name: "protocolName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostShareKeyId: The ID of the host share key.</summary>
            /// <remarks>
            /// This parameter is required when the protocol is SSH.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostShareKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostShareKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property passPhrase: The passphrase of the host account.</summary>
            /// <remarks>
            /// This parameter is required when the protocol is SSH and the private key is encrypted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passPhrase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PassPhrase
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property password: The password of the host account.</summary>
            /// <remarks>
            /// This parameter is required when the protocol is SSH or RDP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateKey: The private key of the host account.</summary>
            /// <remarks>
            /// This parameter is required when the protocol is SSH.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privilegeType: The privilege type of the host account.</summary>
            /// <remarks>
            /// Valid values: Normal, Administrator.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privilegeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivilegeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rotationMode: The rotation mode of the host account.</summary>
            /// <remarks>
            /// Valid values: Manual, Automatic.
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
