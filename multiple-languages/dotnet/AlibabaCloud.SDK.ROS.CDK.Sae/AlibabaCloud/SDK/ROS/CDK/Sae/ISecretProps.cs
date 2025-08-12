using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `Secret`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecretProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.SecretProps")]
    public interface ISecretProps
    {
        /// <summary>Property namespaceId: The namespace ID where the Secret instance resides.</summary>
        /// <remarks>
        /// If the namespace you are in is the default namespace, you just need to fill in the RegionId.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceId
        {
            get;
        }

        /// <summary>Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value.</summary>
        [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object SecretData
        {
            get;
        }

        /// <summary>Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.</summary>
        [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretName
        {
            get;
        }

        /// <summary>Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io\/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.</summary>
        [JsiiProperty(name: "secretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretType
        {
            get;
        }

        /// <summary>Properties for defining a `Secret`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-secret
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecretProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.SecretProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.ISecretProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property namespaceId: The namespace ID where the Secret instance resides.</summary>
            /// <remarks>
            /// If the namespace you are in is the default namespace, you just need to fill in the RegionId.
            /// </remarks>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secretData: Secret key-value pair data, required.The format is as follows: {"Data":"{"k1":"v1", "k2":"v2"}"} k represents the key and v represents the value.</summary>
            [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object SecretData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secretName: Secret instance name.Allows combinations of numbers, letters, en dash (-) and underscores (_) and only start with letters.</summary>
            [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secretType: The currently supported Secret instance type.The values are as follows: kubernetes.io\/dockerconfigjson: A confidential dictionary that stores the username and password of the mirror repository, used to pull mirror authentication during deployment.</summary>
            [JsiiProperty(name: "secretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
