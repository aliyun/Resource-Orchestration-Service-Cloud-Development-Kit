using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `UserToGroupAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserToGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.UserToGroupAdditionProps")]
    public interface IUserToGroupAdditionProps
    {
        /// <summary>Property directoryId: The ID of the directory.</summary>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <summary>Property groupId: The ID of the group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property userId: The ID of the user.</summary>
        [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserId
        {
            get;
        }

        /// <summary>Properties for defining a `UserToGroupAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserToGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.UserToGroupAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IUserToGroupAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property directoryId: The ID of the directory.</summary>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The ID of the group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userId: The ID of the user.</summary>
            [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
