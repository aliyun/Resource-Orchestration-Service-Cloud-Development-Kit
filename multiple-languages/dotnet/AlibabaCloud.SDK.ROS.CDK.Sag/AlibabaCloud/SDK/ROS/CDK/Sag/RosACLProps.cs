using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::ACL`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosACLProps")]
    public class RosACLProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosACLProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: Access control name.
        /// The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Name
        {
            get;
            set;
        }
    }
}
