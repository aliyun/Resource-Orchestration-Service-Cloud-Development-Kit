using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `SecretParameter`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecretParameterProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.SecretParameterProps")]
    public interface ISecretParameterProps
    {
        /// <summary>Property secretParameterName: The name of the encryption parameter.</summary>
        /// <remarks>
        /// The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        /// </remarks>
        [JsiiProperty(name: "secretParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretParameterName
        {
            get;
        }

        /// <summary>Property value: The value of the encryption parameter.</summary>
        /// <remarks>
        /// The value must be 1 to 4096 characters in length.
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Value
        {
            get;
        }

        /// <summary>Property constraints: The constraints of the encryption parameter.</summary>
        [JsiiProperty(name: "constraints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Constraints
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the encryption parameter.</summary>
        /// <remarks>
        /// The description must be 1 to 200 characters in length.
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

        /// <summary>Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.</summary>
        [JsiiProperty(name: "keyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of encryption parameter.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-oos.RosSecretParameter.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Oos.RosSecretParameter.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SecretParameter`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecretParameterProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.SecretParameterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.ISecretParameterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property secretParameterName: The name of the encryption parameter.</summary>
            /// <remarks>
            /// The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
            /// </remarks>
            [JsiiProperty(name: "secretParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretParameterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property value: The value of the encryption parameter.</summary>
            /// <remarks>
            /// The value must be 1 to 4096 characters in length.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Value
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property constraints: The constraints of the encryption parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "constraints", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Constraints
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the encryption parameter.</summary>
            /// <remarks>
            /// The description must be 1 to 200 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of encryption parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-oos.RosSecretParameter.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Oos.RosSecretParameter.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oos.RosSecretParameter.ITagsProperty[]?>();
            }
        }
    }
}
