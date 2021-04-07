using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Uis
{
    /// <summary>Properties for defining a `ALIYUN::UIS::Uis`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-uis.UisProps")]
    public class UisProps : AlibabaCloud.SDK.ROS.CDK.Uis.IUisProps
    {
        /// <summary>Property description: Description of the instance.</summary>
        /// <remarks>
        /// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the instance.</summary>
        /// <remarks>
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Name
        {
            get;
            set;
        }
    }
}
