using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `AccessAssignment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessAssignmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.AccessAssignmentProps")]
    public interface IAccessAssignmentProps
    {
        /// <summary>Property accessConfigurationId: The ID of the access configuration.</summary>
        [JsiiProperty(name: "accessConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessConfigurationId
        {
            get;
        }

        /// <summary>Property directoryId: The ID of the directory.</summary>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <summary>Property principalId: The ID of the CloudSSO identity.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.</description>
        /// <description>If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "principalId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalId
        {
            get;
        }

        /// <summary>Property principalType: The type of the CloudSSO identity.</summary>
        /// <remarks>
        /// Valid values: User, Group
        /// </remarks>
        [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalType
        {
            get;
        }

        /// <summary>Property targetId: The ID of the task object.</summary>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetId
        {
            get;
        }

        /// <summary>Property targetType: The type of the task object.</summary>
        /// <remarks>
        /// Set the value to RD-Account, which specifies the accounts in the resource directory.
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <summary>Properties for defining a `AccessAssignment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessAssignmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.AccessAssignmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IAccessAssignmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessConfigurationId: The ID of the access configuration.</summary>
            [JsiiProperty(name: "accessConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessConfigurationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property directoryId: The ID of the directory.</summary>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property principalId: The ID of the CloudSSO identity.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.</description>
            /// <description>If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "principalId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property principalType: The type of the CloudSSO identity.</summary>
            /// <remarks>
            /// Valid values: User, Group
            /// </remarks>
            [JsiiProperty(name: "principalType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetId: The ID of the task object.</summary>
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetType: The type of the task object.</summary>
            /// <remarks>
            /// Set the value to RD-Account, which specifies the accounts in the resource directory.
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
