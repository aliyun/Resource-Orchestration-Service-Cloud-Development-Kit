using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::AccessKey`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.AccessKeyProps")]
    public class AccessKeyProps : AlibabaCloud.SDK.ROS.CDK.Ram.IAccessKeyProps
    {
        /// <summary>Property userName: Specifies the user name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string UserName
        {
            get;
            set;
        }
    }
}
