using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::Account`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.AccountProps")]
    public class AccountProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IAccountProps
    {
        /// <summary>Property displayName: Member name.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DisplayName
        {
            get;
            set;
        }

        /// <summary>Property folderId: The ID of the parent folder.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "folderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? FolderId
        {
            get;
            set;
        }

        /// <summary>Property payerAccountId:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "payerAccountId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PayerAccountId
        {
            get;
            set;
        }
    }
}
