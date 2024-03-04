using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `RosUserProvision`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosUserProvisionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosUserProvisionProps")]
    public interface IRosUserProvisionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
        /// - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
        /// - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
        /// </remarks>
        [JsiiProperty(name: "deletionStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeletionStrategy
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: directoryId: The ID of the directory.
        /// </remarks>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
        /// - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
        /// - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
        /// </remarks>
        [JsiiProperty(name: "duplicationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DuplicationStrategy
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: principalId: The ID of the principal. Valid values:
        /// - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
        /// - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
        /// </remarks>
        [JsiiProperty(name: "principalId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: principalType: The type of the principal. Valid values:
        /// - User: The principal is a cloud SSO user.
        /// - Group: The principal is a cloud SSO group.
        /// </remarks>
        [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
        /// </remarks>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the user.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosUserProvision`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosUserProvisionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosUserProvisionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IRosUserProvisionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
            /// - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
            /// - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
            /// </remarks>
            [JsiiProperty(name: "deletionStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeletionStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: directoryId: The ID of the directory.
            /// </remarks>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
            /// - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
            /// - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
            /// </remarks>
            [JsiiProperty(name: "duplicationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DuplicationStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: principalId: The ID of the principal. Valid values:
            /// - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
            /// - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
            /// </remarks>
            [JsiiProperty(name: "principalId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: principalType: The type of the principal. Valid values:
            /// - User: The principal is a cloud SSO user.
            /// - Group: The principal is a cloud SSO group.
            /// </remarks>
            [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
            /// </remarks>
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the user.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
