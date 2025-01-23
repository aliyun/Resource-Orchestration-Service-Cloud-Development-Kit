using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.ResourceEnvironment")]
    public class ResourceEnvironment : AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment
    {
        /// <summary>The Alibaba Cloud account ID that this resource belongs to.</summary>
        /// <remarks>
        /// Since this can be a Token
        /// (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
        /// make sure to use Token.compareStrings()
        /// instead of just comparing the values for equality.
        /// </remarks>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        public string Account
        {
            get;
            set;
        }

        /// <summary>The Alibaba Cloud region that this resource belongs to.</summary>
        /// <remarks>
        /// Since this can be a Token
        /// (for example, when the region is ROS's ALIYUN::Region intrinsic),
        /// make sure to use Token.compareStrings()
        /// instead of just comparing the values for equality.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        public string Region
        {
            get;
            set;
        }
    }
}
