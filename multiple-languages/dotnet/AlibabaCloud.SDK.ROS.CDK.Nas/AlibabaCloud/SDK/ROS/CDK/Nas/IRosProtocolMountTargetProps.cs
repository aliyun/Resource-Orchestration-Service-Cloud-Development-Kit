using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `RosProtocolMountTarget`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProtocolMountTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosProtocolMountTargetProps")]
    public interface IRosProtocolMountTargetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fileSystemId: File system ID.
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocolServiceId: Agreement service ID.
        /// </remarks>
        [JsiiProperty(name: "protocolServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProtocolServiceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: Proper network ID exported by the protocol service.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch ID of the export directory.
        /// If the storage redundancy type of the file system is not zone-redundant (ZRS) and
        /// the VpcId is set, this field is required.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessGroupName: The name of the permissions group.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the export directory for the protocol service. The name of the
        /// export directory appears in the console.
        /// Limits:
        /// *   The description must be 2 to 128 characters in length.
        /// *   The description must start with a letter but cannot start with `http:\/\/` or
        /// `https:\/\/`.
        /// *   The description can contain letters, digits, colons (:), underscores (_), and
        /// hyphens (-).
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

        /// <remarks>
        /// <strong>Property</strong>: fsetId: Fileset ID needs to be exported.
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

        /// <remarks>
        /// <strong>Property</strong>: path: The path of the CPFS directory that you want to export.
        /// Limits:
        /// *   The directory already exists in the CPFS file system.
        /// *   You can create only one export directory for a directory.
        /// *   You can specify either a fileset or a path.
        /// Format:
        /// *   The path must be 1 to 1,024 characters in length.
        /// *   The path must be encoded in UTF-8.
        /// *   The path must start and end with a forward slash (\/). The root directory is
        /// `\/`.
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

        /// <summary>Properties for defining a `RosProtocolMountTarget`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProtocolMountTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosProtocolMountTargetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IRosProtocolMountTargetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemId: File system ID.
            /// </remarks>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocolServiceId: Agreement service ID.
            /// </remarks>
            [JsiiProperty(name: "protocolServiceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProtocolServiceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: Proper network ID exported by the protocol service.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The vSwitch ID of the export directory.
            /// If the storage redundancy type of the file system is not zone-redundant (ZRS) and
            /// the VpcId is set, this field is required.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessGroupName: The name of the permissions group.
            /// Default value: DEFAULT_VPC_GROUP_NAME
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the export directory for the protocol service. The name of the
            /// export directory appears in the console.
            /// Limits:
            /// *   The description must be 2 to 128 characters in length.
            /// *   The description must start with a letter but cannot start with `http:\/\/` or
            /// `https:\/\/`.
            /// *   The description can contain letters, digits, colons (:), underscores (_), and
            /// hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fsetId: Fileset ID needs to be exported.
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

            /// <remarks>
            /// <strong>Property</strong>: path: The path of the CPFS directory that you want to export.
            /// Limits:
            /// *   The directory already exists in the CPFS file system.
            /// *   You can create only one export directory for a directory.
            /// *   You can specify either a fileset or a path.
            /// Format:
            /// *   The path must be 1 to 1,024 characters in length.
            /// *   The path must be encoded in UTF-8.
            /// *   The path must start and end with a forward slash (\/). The root directory is
            /// `\/`.
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
