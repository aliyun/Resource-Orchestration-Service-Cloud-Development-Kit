using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `ALIYUN::BastionHost::Host`.</summary>
    [JsiiInterface(nativeType: typeof(IRosHostProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.RosHostProps")]
    public interface IRosHostProps
    {
        /// <remarks>
        /// <strong>Property</strong>: activeAddressType: The endpoint type of the host that you want to create. Valid values:
        /// Public: a public endpoint
        /// Private: an internal endpoint
        /// </remarks>
        [JsiiProperty(name: "activeAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ActiveAddressType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the Bastionhost instance where you want to create the host.
        /// Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: osType: The operating system of the host that you want to create. Valid values:
        /// - Linux
        /// - Windows
        /// </remarks>
        [JsiiProperty(name: "osType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OsType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: source: The source of the host that you want to create. Valid values:
        /// - Local: an on-premises host
        /// - Ecs: an Elastic Compute Service (ECS) instance
        /// - Rds: a host in a dedicated cluster
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: comment: The description of the host that you want to create. The value can be up to 500 characters.
        /// </remarks>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comment
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        /// Note: This parameter is required if the ActiveAddressType parameter is set to Private.
        /// </remarks>
        [JsiiProperty(name: "hostPrivateAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostPrivateAddress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
        /// Note: This parameter is required if the ActiveAddressType parameter is set to Public.
        /// </remarks>
        [JsiiProperty(name: "hostPublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HostPublicAddress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
        /// Note: This parameter is required if the Source parameter is set to Ecs or Rds.
        /// </remarks>
        [JsiiProperty(name: "instanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
        /// Note This parameter is required if the Source parameter is set to Ecs or Rds.
        /// </remarks>
        [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::BastionHost::Host`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosHostProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.RosHostProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IRosHostProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: activeAddressType: The endpoint type of the host that you want to create. Valid values:
            /// Public: a public endpoint
            /// Private: an internal endpoint
            /// </remarks>
            [JsiiProperty(name: "activeAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ActiveAddressType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostName: The name of the host that you want to create. The name can be up to 128 characters in length.
            /// </remarks>
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the Bastionhost instance where you want to create the host.
            /// Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: osType: The operating system of the host that you want to create. Valid values:
            /// - Linux
            /// - Windows
            /// </remarks>
            [JsiiProperty(name: "osType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OsType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: source: The source of the host that you want to create. Valid values:
            /// - Local: an on-premises host
            /// - Ecs: an Elastic Compute Service (ECS) instance
            /// - Rds: a host in a dedicated cluster
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: comment: The description of the host that you want to create. The value can be up to 500 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostPrivateAddress: The internal endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
            /// Note: This parameter is required if the ActiveAddressType parameter is set to Private.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostPrivateAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostPrivateAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: hostPublicAddress: The public endpoint of the host that you want to create. You can set this parameter to a domain name or an IP address.
            /// Note: This parameter is required if the ActiveAddressType parameter is set to Public.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostPublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostPublicAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
            /// Note: This parameter is required if the Source parameter is set to Ecs or Rds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
            /// Note This parameter is required if the Source parameter is set to Ecs or Rds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
