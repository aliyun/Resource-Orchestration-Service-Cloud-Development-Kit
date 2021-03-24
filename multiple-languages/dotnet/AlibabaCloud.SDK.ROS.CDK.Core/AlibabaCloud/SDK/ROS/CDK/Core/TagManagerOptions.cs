using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options to configure TagManager behavior.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.TagManagerOptions")]
    public class TagManagerOptions : AlibabaCloud.SDK.ROS.CDK.Core.ITagManagerOptions
    {
        /// <summary>The name of the property in ROS for these tags&#xD; &#xD; Normally this is `tags`, but Cognito UserPool uses UserPoolTags.</summary>
        /// <remarks>
        /// <strong>Default</strong>: "tags"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagPropertyName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TagPropertyName
        {
            get;
            set;
        }
    }
}
