using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas.Datasource
{
    /// <summary>Properties for defining a `RosFileSystem`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.RosFileSystemProps")]
    public interface IRosFileSystemProps
    {
        /// <remarks>
        /// <strong>Property</strong>: fileSystemId: The ID of the file system to be created.
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <summary>Properties for defining a `RosFileSystem`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFileSystemProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.RosFileSystemProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IRosFileSystemProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemId: The ID of the file system to be created.
            /// </remarks>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
