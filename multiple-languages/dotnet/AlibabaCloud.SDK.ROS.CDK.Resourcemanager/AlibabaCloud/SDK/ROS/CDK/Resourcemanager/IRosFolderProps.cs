using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Folder`.</summary>
    [JsiiInterface(nativeType: typeof(IRosFolderProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosFolderProps")]
    public interface IRosFolderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: folderName: The name of the folder
        /// </remarks>
        [JsiiProperty(name: "folderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FolderName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
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

        /// <summary>Properties for defining a `ALIYUN::ResourceManager::Folder`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosFolderProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosFolderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosFolderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: folderName: The name of the folder
            /// </remarks>
            [JsiiProperty(name: "folderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FolderName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
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
