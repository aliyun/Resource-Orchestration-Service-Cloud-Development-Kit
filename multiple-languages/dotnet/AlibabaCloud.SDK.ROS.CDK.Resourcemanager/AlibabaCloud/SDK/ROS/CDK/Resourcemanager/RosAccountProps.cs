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
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DisplayName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: folderId: The ID of the parent folder
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "folderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? FolderId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payerAccountId:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payerAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PayerAccountId
        {
            get;
            set;
        }
    }
}
