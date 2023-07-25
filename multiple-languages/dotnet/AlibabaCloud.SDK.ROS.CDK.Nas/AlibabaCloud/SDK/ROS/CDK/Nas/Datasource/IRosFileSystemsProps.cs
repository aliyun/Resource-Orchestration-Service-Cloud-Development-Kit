using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::NAS::FileSystems`.</summary>
    [JsiiInterface(nativeType: typeof(IRosFileSystemsProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.RosFileSystemsProps")]
    public interface IRosFileSystemsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fileSystemId: The ID of the file system to be created.
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileSystemId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fileSystemType: File system type.
        /// Value:
        /// -standard (default): Universal NAS
        /// -extreme: extreme NAS
        /// -cpfs: file storage CPFS
        /// </remarks>
        [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileSystemType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::NAS::FileSystems`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosFileSystemsProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.RosFileSystemsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IRosFileSystemsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemId: The ID of the file system to be created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemType: File system type.
            /// Value:
            /// -standard (default): Universal NAS
            /// -extreme: extreme NAS
            /// -cpfs: file storage CPFS
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
