using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Flink
{
    /// <summary>Properties for defining a `Member`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-flink.MemberProps")]
    public interface IMemberProps
    {
        /// <summary>Property member: The user ID of the member.</summary>
        [JsiiProperty(name: "member", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Member
        {
            get;
        }

        /// <summary>Property namespace: The project space name.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Namespace
        {
            get;
        }

        /// <summary>Property role: The role of the member.</summary>
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Role
        {
            get;
        }

        /// <summary>Property workspace: The work space ID.</summary>
        [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Workspace
        {
            get;
        }

        /// <summary>Properties for defining a `Member`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-flink.MemberProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Flink.IMemberProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property member: The user ID of the member.</summary>
            [JsiiProperty(name: "member", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Member
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespace: The project space name.</summary>
            [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Namespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property role: The role of the member.</summary>
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Role
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspace: The work space ID.</summary>
            [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Workspace
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
