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
        [JsiiProperty(name: "folderName", typeJson: "{\"primitive\":\"string\"}")]
        string FolderName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        /// </remarks>
        [JsiiProperty(name: "parentFolderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ParentFolderId
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
            [JsiiProperty(name: "folderName", typeJson: "{\"primitive\":\"string\"}")]
            public string FolderName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parentFolderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ParentFolderId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
