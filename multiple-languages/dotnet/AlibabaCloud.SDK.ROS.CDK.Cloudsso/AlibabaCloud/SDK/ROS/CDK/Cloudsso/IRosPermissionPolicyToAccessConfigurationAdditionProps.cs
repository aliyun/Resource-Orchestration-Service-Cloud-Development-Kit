using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `RosPermissionPolicyToAccessConfigurationAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPermissionPolicyToAccessConfigurationAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosPermissionPolicyToAccessConfigurationAdditionProps")]
    public interface IRosPermissionPolicyToAccessConfigurationAdditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessConfigurationId: The ID of the access configuration.
        /// </remarks>
        [JsiiProperty(name: "accessConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessConfigurationId
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
        /// <strong>Property</strong>: permissionPolicyName: The name of the permission policy.
        /// - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
        /// - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
        /// </remarks>
        [JsiiProperty(name: "permissionPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PermissionPolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: permissionPolicyType: The type of the permission policy. Valid values:
        /// - System: system policy. Resource Access Management (RAM) system policies are reused.
        /// - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
        /// </remarks>
        [JsiiProperty(name: "permissionPolicyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PermissionPolicyType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: inlinePolicyDocument: The configurations of the inline policy.
        /// The value can be up to 4,096 characters in length.
        /// If you set PermissionPolicyType to Inline, you must specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "inlinePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InlinePolicyDocument
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPermissionPolicyToAccessConfigurationAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPermissionPolicyToAccessConfigurationAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosPermissionPolicyToAccessConfigurationAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IRosPermissionPolicyToAccessConfigurationAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessConfigurationId: The ID of the access configuration.
            /// </remarks>
            [JsiiProperty(name: "accessConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessConfigurationId
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
            /// <strong>Property</strong>: permissionPolicyName: The name of the permission policy.
            /// - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
            /// - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
            /// </remarks>
            [JsiiProperty(name: "permissionPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PermissionPolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: permissionPolicyType: The type of the permission policy. Valid values:
            /// - System: system policy. Resource Access Management (RAM) system policies are reused.
            /// - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
            /// </remarks>
            [JsiiProperty(name: "permissionPolicyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PermissionPolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: inlinePolicyDocument: The configurations of the inline policy.
            /// The value can be up to 4,096 characters in length.
            /// If you set PermissionPolicyType to Inline, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "inlinePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? InlinePolicyDocument
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
