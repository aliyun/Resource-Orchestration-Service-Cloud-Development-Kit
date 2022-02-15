using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Folder`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.FolderProps")]
    public class FolderProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IFolderProps
    {
        /// <summary>Property folderName: The name of the folder.</summary>
        [JsiiProperty(name: "folderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object FolderName
        {
            get;
            set;
        }

        /// <summary>Property parentFolderId: The ID of the parent folder.</summary>
        /// <remarks>
        /// If not set, the system default value will be used
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parentFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ParentFolderId
        {
            get;
            set;
        }
    }
}
