using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Flink
{
    /// <summary>Properties for defining a `RosMember`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-flink.RosMemberProps")]
    public interface IRosMemberProps
    {
        /// <remarks>
        /// <strong>Property</strong>: member: The user ID of the member.
        /// </remarks>
        [JsiiProperty(name: "member", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Member
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespace: The project space name.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: role: The role of the member.
        /// </remarks>
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Role
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: workspace: The work space ID.
        /// </remarks>
        [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Workspace
        {
            get;
        }

        /// <summary>Properties for defining a `RosMember`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-flink.RosMemberProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Flink.IRosMemberProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: member: The user ID of the member.
            /// </remarks>
            [JsiiProperty(name: "member", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Member
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespace: The project space name.
            /// </remarks>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: role: The role of the member.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Role
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: workspace: The work space ID.
            /// </remarks>
            [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Workspace
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
