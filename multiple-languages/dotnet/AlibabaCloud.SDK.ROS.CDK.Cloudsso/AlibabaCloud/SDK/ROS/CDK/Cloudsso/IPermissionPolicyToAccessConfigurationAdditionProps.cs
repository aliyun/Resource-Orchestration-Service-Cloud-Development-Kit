using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `PermissionPolicyToAccessConfigurationAddition`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPermissionPolicyToAccessConfigurationAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.PermissionPolicyToAccessConfigurationAdditionProps")]
    public interface IPermissionPolicyToAccessConfigurationAdditionProps
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

        /// <summary>Property permissionPolicyName: The name of the permission policy.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.</description>
        /// <description>If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "permissionPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PermissionPolicyName
        {
            get;
        }

        /// <summary>Property permissionPolicyType: The type of the permission policy.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>System: system policy. Resource Access Management (RAM) system policies are reused.</description>
        /// <description>Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "permissionPolicyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PermissionPolicyType
        {
            get;
        }

        /// <summary>Property inlinePolicyDocument: The configurations of the inline policy.</summary>
        /// <remarks>
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

        /// <summary>Properties for defining a `PermissionPolicyToAccessConfigurationAddition`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPermissionPolicyToAccessConfigurationAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.PermissionPolicyToAccessConfigurationAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IPermissionPolicyToAccessConfigurationAdditionProps
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

            /// <summary>Property permissionPolicyName: The name of the permission policy.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.</description>
            /// <description>If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "permissionPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PermissionPolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property permissionPolicyType: The type of the permission policy.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>System: system policy. Resource Access Management (RAM) system policies are reused.</description>
            /// <description>Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "permissionPolicyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PermissionPolicyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property inlinePolicyDocument: The configurations of the inline policy.</summary>
            /// <remarks>
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
