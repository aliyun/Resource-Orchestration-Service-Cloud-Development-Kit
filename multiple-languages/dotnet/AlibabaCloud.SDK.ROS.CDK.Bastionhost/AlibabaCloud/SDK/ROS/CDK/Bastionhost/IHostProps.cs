using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `ALIYUN::BastionHost::Host`.</summary>
    [JsiiInterface(nativeType: typeof(IHostProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.HostProps")]
    public interface IHostProps
    {
        /// <summary>Property activeAddressType: The endpoint type of the host that you want to create.</summary>
        /// <remarks>
        /// Valid values:
        /// Public: a public endpoint
        /// Private: an internal endpoint
        /// </remarks>
        [JsiiProperty(name: "activeAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ActiveAddressType
        {
            get;
        }

        /// <summary>Property hostName: The name of the host that you want to create.</summary>
        /// <remarks>
        /// The name can be up to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HostName
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the Bastionhost instance where you want to create the host.</summary>
        /// <remarks>
        /// Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property osType: The operating system of the host that you want to create.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Linux</description>
        /// <description>Windows</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "osType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OsType
        {
            get;
        }

        /// <summary>Property source: The source of the host that you want to create.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Local: an on-premises host</description>
        /// <description>Ecs: an Elastic Compute Service (ECS) instance</description>
        /// <description>Rds: a host in a dedicated cluster</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Source
        {
            get;
        }

        /// <summary>Property comment: The description of the host that you want to create.</summary>
        /// <remarks>
        /// The value can be up to 500 characters.
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

        /// <summary>Property hostPrivateAddress: The internal endpoint of the host that you want to create.</summary>
        /// <remarks>
        /// You can set this parameter to a domain name or an IP address.
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

        /// <summary>Property hostPublicAddress: The public endpoint of the host that you want to create.</summary>
        /// <remarks>
        /// You can set this parameter to a domain name or an IP address.
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

        /// <summary>Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.</summary>
        /// <remarks>
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

        /// <summary>Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.</summary>
        /// <remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IHostProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.HostProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IHostProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property activeAddressType: The endpoint type of the host that you want to create.</summary>
            /// <remarks>
            /// Valid values:
            /// Public: a public endpoint
            /// Private: an internal endpoint
            /// </remarks>
            [JsiiProperty(name: "activeAddressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ActiveAddressType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property hostName: The name of the host that you want to create.</summary>
            /// <remarks>
            /// The name can be up to 128 characters in length.
            /// </remarks>
            [JsiiProperty(name: "hostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HostName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the Bastionhost instance where you want to create the host.</summary>
            /// <remarks>
            /// Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property osType: The operating system of the host that you want to create.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Linux</description>
            /// <description>Windows</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "osType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OsType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property source: The source of the host that you want to create.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Local: an on-premises host</description>
            /// <description>Ecs: an Elastic Compute Service (ECS) instance</description>
            /// <description>Rds: a host in a dedicated cluster</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Source
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property comment: The description of the host that you want to create.</summary>
            /// <remarks>
            /// The value can be up to 500 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostPrivateAddress: The internal endpoint of the host that you want to create.</summary>
            /// <remarks>
            /// You can set this parameter to a domain name or an IP address.
            /// Note: This parameter is required if the ActiveAddressType parameter is set to Private.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostPrivateAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostPrivateAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hostPublicAddress: The public endpoint of the host that you want to create.</summary>
            /// <remarks>
            /// You can set this parameter to a domain name or an IP address.
            /// Note: This parameter is required if the ActiveAddressType parameter is set to Public.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostPublicAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HostPublicAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.</summary>
            /// <remarks>
            /// Note: This parameter is required if the Source parameter is set to Ecs or Rds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.</summary>
            /// <remarks>
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
