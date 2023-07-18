using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ALIYUN::NAS::ProtocolMountTarget`.</summary>
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

        /// <summary>Property vSwitchId: Switch ID exported by the protocol service.</summary>
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

        /// <summary>Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).</summary>
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

        /// <summary>Property path: The path of the CPFS directory that needs to be exported.</summary>
        /// <remarks>
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

            /// <summary>Property vSwitchId: Switch ID exported by the protocol service.</summary>
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

            /// <summary>Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).</summary>
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

            /// <summary>Property path: The path of the CPFS directory that needs to be exported.</summary>
            /// <remarks>
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
