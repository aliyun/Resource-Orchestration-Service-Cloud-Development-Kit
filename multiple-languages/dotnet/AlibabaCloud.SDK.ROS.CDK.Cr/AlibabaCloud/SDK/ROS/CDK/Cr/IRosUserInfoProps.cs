using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ALIYUN::CR::UserInfo`.</summary>
    [JsiiInterface(nativeType: typeof(IRosUserInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosUserInfoProps")]
    public interface IRosUserInfoProps
    {
        /// <remarks>
        /// <strong>Property</strong>: user: User info. If user exists, will update user info.
        /// </remarks>
        [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosUserInfo.UserProperty\"}]}}")]
        object User
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CR::UserInfo`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosUserInfoProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosUserInfoProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosUserInfoProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: user: User info. If user exists, will update user info.
            /// </remarks>
            [JsiiProperty(name: "user", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosUserInfo.UserProperty\"}]}}")]
            public object User
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
