using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Account`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosAccountProps")]
    public class RosAccountProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: displayName: Member name
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DisplayName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: folderId: The ID of the parent folder
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "folderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? FolderId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payerAccountId:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payerAccountId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PayerAccountId
        {
            get;
            set;
        }
    }
}
