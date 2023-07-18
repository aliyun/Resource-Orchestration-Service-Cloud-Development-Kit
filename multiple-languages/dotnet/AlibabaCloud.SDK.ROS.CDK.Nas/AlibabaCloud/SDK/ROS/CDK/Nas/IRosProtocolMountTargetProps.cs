using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ALIYUN::NAS::ProtocolMountTarget`.</summary>
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
        /// <strong>Property</strong>: vSwitchId: Switch ID exported by the protocol service.
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
        /// <strong>Property</strong>: description: Description of the protocol service to export the directory.The console is displayed as the export directory name.
        /// limit:
        /// The length is 2 to 128 English or Chinese characters.
        /// Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
        /// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
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
        /// <strong>Property</strong>: path: The path of the CPFS directory that needs to be exported.
        /// limit:
        /// This directory must be existing directory on CPFS.
        /// The same directory allows only one export.
        /// Fileset and Path can only specify one.
        /// Format:
        /// The length is 1 to 1024 characters.
        /// Use UTF-8 encoding.
        /// It must start with the positive oblique line (/), and the root directory must be/.
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

        /// <summary>Properties for defining a `ALIYUN::NAS::ProtocolMountTarget`.</summary>
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
            /// <strong>Property</strong>: vSwitchId: Switch ID exported by the protocol service.
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
            /// <strong>Property</strong>: description: Description of the protocol service to export the directory.The console is displayed as the export directory name.
            /// limit:
            /// The length is 2 to 128 English or Chinese characters.
            /// Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
            /// It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
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
            /// <strong>Property</strong>: path: The path of the CPFS directory that needs to be exported.
            /// limit:
            /// This directory must be existing directory on CPFS.
            /// The same directory allows only one export.
            /// Fileset and Path can only specify one.
            /// Format:
            /// The length is 1 to 1024 characters.
            /// Use UTF-8 encoding.
            /// It must start with the positive oblique line (/), and the root directory must be/.
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
