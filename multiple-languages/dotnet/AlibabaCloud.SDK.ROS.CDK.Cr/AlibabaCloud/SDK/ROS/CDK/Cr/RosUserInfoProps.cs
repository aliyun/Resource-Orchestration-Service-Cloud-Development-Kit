using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::UserInfo`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.RosUserInfoProps")]
    public class RosUserInfoProps : AlibabaCloud.SDK.ROS.CDK.Cr.IRosUserInfoProps
    {
        /// <remarks>
        /// <strong>Property</strong>: user: User info. If user exists, will update user info.
        /// </remarks>
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosUserInfo.UserProperty\"}]}}")]
        public object User
        {
            get;
            set;
        }
    }
}
