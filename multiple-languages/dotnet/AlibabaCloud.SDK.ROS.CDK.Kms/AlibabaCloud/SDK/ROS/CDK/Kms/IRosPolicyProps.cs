using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `RosPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosPolicyProps")]
    public interface IRosPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessControlRules: Network Rules info.
        /// </remarks>
        [JsiiProperty(name: "accessControlRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kms.RosPolicy.AccessControlRulesProperty\"}]}}")]
        object AccessControlRules
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: kmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
        /// </remarks>
        [JsiiProperty(name: "kmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KmsInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: permissions: The operations that can be performed. Valid values:
        /// RbacPermission\/Template\/CryptoServiceKeyUser: allows you to perform cryptographic operations.
        /// RbacPermission\/Template\/CryptoServiceSecretUser: allows you to perform secret-related operations.
        /// </remarks>
        [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Permissions
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: policyName: The name of the permission policy.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resources: The key and secret that are allowed to access. Supports a maximum of 30 key and secret.
        /// Key: Enter a key in the key\/${KeyId} format. To allow access to all keys of a KMS instance, enter key\/*.
        /// Secret: Enter a secret in the secret\/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret\/*.
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Resources
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the permission policy.
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

        /// <summary>Properties for defining a `RosPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IRosPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessControlRules: Network Rules info.
            /// </remarks>
            [JsiiProperty(name: "accessControlRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kms.RosPolicy.AccessControlRulesProperty\"}]}}")]
            public object AccessControlRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
            /// </remarks>
            [JsiiProperty(name: "kmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KmsInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: permissions: The operations that can be performed. Valid values:
            /// RbacPermission\/Template\/CryptoServiceKeyUser: allows you to perform cryptographic operations.
            /// RbacPermission\/Template\/CryptoServiceSecretUser: allows you to perform secret-related operations.
            /// </remarks>
            [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Permissions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: policyName: The name of the permission policy.
            /// </remarks>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resources: The key and secret that are allowed to access. Supports a maximum of 30 key and secret.
            /// Key: Enter a key in the key\/${KeyId} format. To allow access to all keys of a KMS instance, enter key\/*.
            /// Secret: Enter a secret in the secret\/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret\/*.
            /// </remarks>
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Resources
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the permission policy.
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
