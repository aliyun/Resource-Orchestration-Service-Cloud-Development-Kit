using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::AccessKey`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosAccessKeyProps")]
    public class RosAccessKeyProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosAccessKeyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: userName: Specifies the user name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UserName
        {
            get;
            set;
        }
    }
}
