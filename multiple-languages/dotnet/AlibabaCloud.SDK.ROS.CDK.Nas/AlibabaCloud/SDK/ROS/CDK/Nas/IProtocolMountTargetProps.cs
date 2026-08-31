using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ProtocolMountTarget`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProtocolMountTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.ProtocolMountTargetProps")]
    public interface IProtocolMountTargetProps
    {
        /// <summary>Property fileSystemId: File system ID.</summary>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <summary>Property protocolServiceId: Agreement service ID.</summary>
        [JsiiProperty(name: "protocolServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolServiceId
        {
            get;
        }

        /// <summary>Property vpcId: Proper network ID exported by the protocol service.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The vSwitch ID of the export directory.</summary>
        /// <remarks>
        /// If the storage redundancy type of the file system is not zone-redundant (ZRS) and
        /// the VpcId is set, this field is required.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property accessGroupName: The name of the permissions group.</summary>
        /// <remarks>
        /// Default value: DEFAULT_VPC_GROUP_NAME
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the export directory for the protocol service.</summary>
        /// <remarks>
        /// The name of the
        /// export directory appears in the console.
        /// Limits:
        ///
        /// <list type="bullet">
        /// <description>The description must be 2 to 128 characters in length.</description>
        /// <description>The description must start with a letter but cannot start with <c>http:\/\/</c> or
        /// <c>https:\/\/</c>.</description>
        /// <description>The description can contain letters, digits, colons (:), underscores (_), and
        /// hyphens (-).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fsetId: Fileset ID needs to be exported.</summary>
        /// <remarks>
        /// limit:
        /// The Fileset must exist.
        /// A Fileset allows only one export directory.
        /// Fileset and Path can only specify one.
        /// </remarks>
        [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FsetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property path: The path of the CPFS directory that you want to export.</summary>
        /// <remarks>
        /// Limits:
        ///
        /// <list type="bullet">
        /// <description>The directory already exists in the CPFS file system.</description>
        /// <description>You can create only one export directory for a directory.</description>
        /// <description>You can specify either a fileset or a path.
        /// Format:</description>
        /// <description>The path must be 1 to 1,024 characters in length.</description>
        /// <description>The path must be encoded in UTF-8.</description>
        /// <description>The path must start and end with a forward slash (/). The root directory is
        /// <c>\/</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Path
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ProtocolMountTarget`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProtocolMountTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.ProtocolMountTargetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IProtocolMountTargetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fileSystemId: File system ID.</summary>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocolServiceId: Agreement service ID.</summary>
            [JsiiProperty(name: "protocolServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: Proper network ID exported by the protocol service.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The vSwitch ID of the export directory.</summary>
            /// <remarks>
            /// If the storage redundancy type of the file system is not zone-redundant (ZRS) and
            /// the VpcId is set, this field is required.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessGroupName: The name of the permissions group.</summary>
            /// <remarks>
            /// Default value: DEFAULT_VPC_GROUP_NAME
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the export directory for the protocol service.</summary>
            /// <remarks>
            /// The name of the
            /// export directory appears in the console.
            /// Limits:
            ///
            /// <list type="bullet">
            /// <description>The description must be 2 to 128 characters in length.</description>
            /// <description>The description must start with a letter but cannot start with <c>http:\/\/</c> or
            /// <c>https:\/\/</c>.</description>
            /// <description>The description can contain letters, digits, colons (:), underscores (_), and
            /// hyphens (-).</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fsetId: Fileset ID needs to be exported.</summary>
            /// <remarks>
            /// limit:
            /// The Fileset must exist.
            /// A Fileset allows only one export directory.
            /// Fileset and Path can only specify one.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fsetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FsetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property path: The path of the CPFS directory that you want to export.</summary>
            /// <remarks>
            /// Limits:
            ///
            /// <list type="bullet">
            /// <description>The directory already exists in the CPFS file system.</description>
            /// <description>You can create only one export directory for a directory.</description>
            /// <description>You can specify either a fileset or a path.
            /// Format:</description>
            /// <description>The path must be 1 to 1,024 characters in length.</description>
            /// <description>The path must be encoded in UTF-8.</description>
            /// <description>The path must start and end with a forward slash (/). The root directory is
            /// <c>\/</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Path
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
