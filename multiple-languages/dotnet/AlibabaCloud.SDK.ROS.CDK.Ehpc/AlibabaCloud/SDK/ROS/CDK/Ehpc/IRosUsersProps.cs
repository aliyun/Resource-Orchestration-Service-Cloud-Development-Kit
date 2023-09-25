using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ehpc
{
    /// <summary>Properties for defining a `ALIYUN::EHPC::Users`.</summary>
    [JsiiInterface(nativeType: typeof(IRosUsersProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosUsersProps")]
    public interface IRosUsersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: The cluster ID.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: users: The information about the users.
        /// </remarks>
        [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosUsers.UsersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Users
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::EHPC::Users`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosUsersProps), fullyQualifiedName: "@alicloud/ros-cdk-ehpc.RosUsersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ehpc.IRosUsersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: The cluster ID.
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: users: The information about the users.
            /// </remarks>
            [JsiiProperty(name: "users", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ehpc.RosUsers.UsersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Users
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
