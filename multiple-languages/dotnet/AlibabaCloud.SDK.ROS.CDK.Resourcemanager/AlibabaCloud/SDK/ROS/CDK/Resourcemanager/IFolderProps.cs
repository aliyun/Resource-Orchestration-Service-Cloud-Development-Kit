using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Folder`.</summary>
    [JsiiInterface(nativeType: typeof(IFolderProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.FolderProps")]
    public interface IFolderProps
    {
        /// <summary>Property folderName: The name of the folder.</summary>
        [JsiiProperty(name: "folderName", typeJson: "{\"primitive\":\"string\"}")]
        string FolderName
        {
            get;
        }

        /// <summary>Property parentFolderId: The ID of the parent folder.</summary>
        /// <remarks>
        /// If not set, the system default value will be used
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
        [JsiiTypeProxy(nativeType: typeof(IFolderProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.FolderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IFolderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property folderName: The name of the folder.</summary>
            [JsiiProperty(name: "folderName", typeJson: "{\"primitive\":\"string\"}")]
            public string FolderName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property parentFolderId: The ID of the parent folder.</summary>
            /// <remarks>
            /// If not set, the system default value will be used
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
