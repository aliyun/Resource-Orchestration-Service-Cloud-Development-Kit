using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::UserInfo`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.UserInfoProps")]
    public class UserInfoProps : AlibabaCloud.SDK.ROS.CDK.Cr.IUserInfoProps
    {
        /// <summary>Property user: User info.</summary>
        /// <remarks>
        /// If user exists, will update user info.
        /// </remarks>
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosUserInfo.UserProperty\"}]}}", isOverride: true)]
        public object User
        {
            get;
            set;
        }
    }
}
