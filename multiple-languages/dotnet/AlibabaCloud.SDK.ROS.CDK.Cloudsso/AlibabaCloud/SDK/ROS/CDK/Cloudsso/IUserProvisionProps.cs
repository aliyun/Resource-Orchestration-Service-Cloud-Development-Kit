using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `UserProvision`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserProvisionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.UserProvisionProps")]
    public interface IUserProvisionProps
    {
        /// <summary>Property deletionStrategy: Delete policy.</summary>
        /// <remarks>
        /// The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
        ///
        /// <list type="bullet">
        /// <description>Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.</description>
        /// <description>Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "deletionStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeletionStrategy
        {
            get;
        }

        /// <summary>Property directoryId: The ID of the directory.</summary>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <summary>Property duplicationStrategy: Conflict policy.</summary>
        /// <remarks>
        /// When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
        ///
        /// <list type="bullet">
        /// <description>KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.</description>
        /// <description>TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "duplicationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DuplicationStrategy
        {
            get;
        }

        /// <summary>Property principalId: The ID of the principal.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).</description>
        /// <description>When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "principalId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalId
        {
            get;
        }

        /// <summary>Property principalType: The type of the principal.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>User: The principal is a cloud SSO user.</description>
        /// <description>Group: The principal is a cloud SSO group.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalType
        {
            get;
        }

        /// <summary>Property targetId: Target ID for RAM user synchronization.</summary>
        /// <remarks>
        /// Currently, it is the RD account ID.
        /// </remarks>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetId
        {
            get;
        }

        /// <summary>Property targetType: Target type for RAM user synchronization.</summary>
        /// <remarks>
        /// Currently, it is RD-Account.
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <summary>Property description: The description of the user.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `UserProvision`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserProvisionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.UserProvisionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IUserProvisionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deletionStrategy: Delete policy.</summary>
            /// <remarks>
            /// The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
            ///
            /// <list type="bullet">
            /// <description>Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.</description>
            /// <description>Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "deletionStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeletionStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property directoryId: The ID of the directory.</summary>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property duplicationStrategy: Conflict policy.</summary>
            /// <remarks>
            /// When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
            ///
            /// <list type="bullet">
            /// <description>KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.</description>
            /// <description>TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "duplicationStrategy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DuplicationStrategy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property principalId: The ID of the principal.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).</description>
            /// <description>When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "principalId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property principalType: The type of the principal.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>User: The principal is a cloud SSO user.</description>
            /// <description>Group: The principal is a cloud SSO group.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetId: Target ID for RAM user synchronization.</summary>
            /// <remarks>
            /// Currently, it is the RD account ID.
            /// </remarks>
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetType: Target type for RAM user synchronization.</summary>
            /// <remarks>
            /// Currently, it is RD-Account.
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
