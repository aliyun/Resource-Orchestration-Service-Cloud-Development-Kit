using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::UserInfo`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.UserInfoProps")]
    public class UserInfoProps : AlibabaCloud.SDK.ROS.CDK.Cr.IUserInfoProps
    {
        private object _user;

        /// <summary>Property user: User info.</summary>
        /// <remarks>
        /// If user exists, will update user info.
        /// </remarks>
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosUserInfo.UserProperty\"}]}}")]
        public object User
        {
            get => _user;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Cr.RosUserInfo.IUserProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cr.RosUserInfo.IUserProperty).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Cr.RosUserInfo.IUserProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _user = value;
            }
        }
    }
}
