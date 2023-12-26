using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `UserToGroupAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserToGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.UserToGroupAdditionProps")]
    public interface IUserToGroupAdditionProps
    {
        /// <summary>Property groupName: Specifies the group name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Property users: list name of a users to which you want to add the group.</summary>
        [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Users
        {
            get;
        }

        /// <summary>Properties for defining a `UserToGroupAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserToGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.UserToGroupAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IUserToGroupAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: Specifies the group name, containing up to 64 characters.</summary>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property users: list name of a users to which you want to add the group.</summary>
            [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Users
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
