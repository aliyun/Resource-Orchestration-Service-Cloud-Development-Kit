using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `Folder`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFolderProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.FolderProps")]
    public interface IFolderProps
    {
        /// <summary>Property folderName: The name of the folder.</summary>
        [JsiiProperty(name: "folderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FolderName
        {
            get;
        }

        /// <summary>Property parentFolderId: The ID of the parent folder.</summary>
        /// <remarks>
        /// If not set, the system default value will be used
        /// </remarks>
        [JsiiProperty(name: "parentFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParentFolderId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Folder`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFolderProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.FolderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IFolderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property folderName: The name of the folder.</summary>
            [JsiiProperty(name: "folderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FolderName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property parentFolderId: The ID of the parent folder.</summary>
            /// <remarks>
            /// If not set, the system default value will be used
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parentFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParentFolderId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
