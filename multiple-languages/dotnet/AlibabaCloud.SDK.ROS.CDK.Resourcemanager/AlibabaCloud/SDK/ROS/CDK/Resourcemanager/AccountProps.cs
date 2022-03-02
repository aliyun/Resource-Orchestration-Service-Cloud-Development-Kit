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
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DisplayName
        {
            get;
            set;
        }

        /// <summary>Property folderId: The ID of the parent folder.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "folderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FolderId
        {
            get;
            set;
        }

        /// <summary>Property payerAccountId:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "payerAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PayerAccountId
        {
            get;
            set;
        }
    }
}
