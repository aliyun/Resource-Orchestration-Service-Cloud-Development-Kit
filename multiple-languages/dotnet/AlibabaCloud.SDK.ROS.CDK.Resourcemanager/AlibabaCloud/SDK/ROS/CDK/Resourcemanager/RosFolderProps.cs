using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Folder`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosFolderProps")]
    public class RosFolderProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosFolderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: folderName: The name of the folder
        /// </remarks>
        [JsiiProperty(name: "folderName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string FolderName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parentFolderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ParentFolderId
        {
            get;
            set;
        }
    }
}
