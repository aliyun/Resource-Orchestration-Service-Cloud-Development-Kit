using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `UserInfo`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.UserInfoProps")]
    public interface IUserInfoProps
    {
        /// <summary>Property user: User info.</summary>
        /// <remarks>
        /// If user exists, will update user info.
        /// </remarks>
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosUserInfo.UserProperty\"}]}}")]
        object User
        {
            get;
        }

        /// <summary>Properties for defining a `UserInfo`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-userinfo
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.UserInfoProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IUserInfoProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property user: User info.</summary>
            /// <remarks>
            /// If user exists, will update user info.
            /// </remarks>
            [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosUserInfo.UserProperty\"}]}}")]
            public object User
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
