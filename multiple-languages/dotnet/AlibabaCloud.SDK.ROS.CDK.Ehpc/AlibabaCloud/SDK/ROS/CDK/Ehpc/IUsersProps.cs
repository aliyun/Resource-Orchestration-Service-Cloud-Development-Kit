using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>Properties for defining a `Users`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUsersProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.UsersProps")]
    public interface IUsersProps
    {
        /// <summary>Property clusterId: The cluster ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property users: The information about the users.</summary>
        [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosUsers.UsersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Users
        {
            get;
        }

        /// <summary>Properties for defining a `Users`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUsersProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.UsersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.IUsersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: The cluster ID.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property users: The information about the users.</summary>
            [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosUsers.UsersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Users
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
