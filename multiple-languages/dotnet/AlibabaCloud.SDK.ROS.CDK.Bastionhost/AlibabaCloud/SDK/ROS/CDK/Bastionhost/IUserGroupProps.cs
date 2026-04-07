using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `UserGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.UserGroupProps")]
    public interface IUserGroupProps
    {
        /// <summary>Property instanceId: The ID of the BastionHost instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property userGroupName: The name of the user group.</summary>
        [JsiiProperty(name: "userGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserGroupName
        {
            get;
        }

        /// <summary>Property comment: The comment of the user group.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `UserGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-usergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.UserGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IUserGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the BastionHost instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userGroupName: The name of the user group.</summary>
            [JsiiProperty(name: "userGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property comment: The comment of the user group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comment
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
