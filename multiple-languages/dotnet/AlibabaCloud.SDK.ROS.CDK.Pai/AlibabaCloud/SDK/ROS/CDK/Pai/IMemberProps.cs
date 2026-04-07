using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `Member`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.MemberProps")]
    public interface IMemberProps
    {
        /// <summary>Property roles: The list of roles.</summary>
        [JsiiProperty(name: "roles", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Roles
        {
            get;
        }

        /// <summary>Property userId: User ID.</summary>
        [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserId
        {
            get;
        }

        /// <summary>Property workspaceId: Workspace ID.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Properties for defining a `Member`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-member
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMemberProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.MemberProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IMemberProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property roles: The list of roles.</summary>
            [JsiiProperty(name: "roles", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Roles
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userId: User ID.</summary>
            [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceId: Workspace ID.</summary>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
