using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `Policy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.PolicyProps")]
    public interface IPolicyProps
    {
        /// <summary>Property accessControlRules: Network Rules info.</summary>
        [JsiiProperty(name: "accessControlRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kms.RosPolicy.AccessControlRulesProperty\"}]}}")]
        object AccessControlRules
        {
            get;
        }

        /// <summary>Property kmsInstanceId: The scope of the permission policy.</summary>
        /// <remarks>
        /// You need to specify the KMS instance that you want to access.
        /// </remarks>
        [JsiiProperty(name: "kmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KmsInstanceId
        {
            get;
        }

        /// <summary>Property permissions: The operations that can be performed.</summary>
        /// <remarks>
        /// Valid values:
        /// RbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.
        /// RbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations.
        /// </remarks>
        [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Permissions
        {
            get;
        }

        /// <summary>Property policyName: The name of the permission policy.</summary>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PolicyName
        {
            get;
        }

        /// <summary>Property resources: The key and secret that are allowed to access.</summary>
        /// <remarks>
        /// Supports a maximum of 30 key and secret.
        /// Key: Enter a key in the key/${KeyId} format. To allow access to all keys of a KMS instance, enter key/<em>.
        /// Secret: Enter a secret in the secret/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret/</em>.
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Resources
        {
            get;
        }

        /// <summary>Property description: The description of the permission policy.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Policy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.PolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessControlRules: Network Rules info.</summary>
            [JsiiProperty(name: "accessControlRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kms.RosPolicy.AccessControlRulesProperty\"}]}}")]
            public object AccessControlRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property kmsInstanceId: The scope of the permission policy.</summary>
            /// <remarks>
            /// You need to specify the KMS instance that you want to access.
            /// </remarks>
            [JsiiProperty(name: "kmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KmsInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property permissions: The operations that can be performed.</summary>
            /// <remarks>
            /// Valid values:
            /// RbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.
            /// RbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations.
            /// </remarks>
            [JsiiProperty(name: "permissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Permissions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property policyName: The name of the permission policy.</summary>
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resources: The key and secret that are allowed to access.</summary>
            /// <remarks>
            /// Supports a maximum of 30 key and secret.
            /// Key: Enter a key in the key/${KeyId} format. To allow access to all keys of a KMS instance, enter key/<em>.
            /// Secret: Enter a secret in the secret/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret/</em>.
            /// </remarks>
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Resources
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the permission policy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
