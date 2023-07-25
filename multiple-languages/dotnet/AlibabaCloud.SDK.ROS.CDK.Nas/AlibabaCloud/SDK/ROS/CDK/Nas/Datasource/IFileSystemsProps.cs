using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::NAS::FileSystems`.</summary>
    [JsiiInterface(nativeType: typeof(IFileSystemsProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.FileSystemsProps")]
    public interface IFileSystemsProps
    {
        /// <summary>Property fileSystemId: The ID of the file system to be created.</summary>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileSystemId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fileSystemType: File system type.</summary>
        /// <remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IFileSystemsProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.FileSystemsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IFileSystemsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property fileSystemId: The ID of the file system to be created.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fileSystemType: File system type.</summary>
            /// <remarks>
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
