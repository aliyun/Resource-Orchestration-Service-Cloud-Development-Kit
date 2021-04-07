using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `ALIYUN::KMS::Alias`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosAliasProps")]
    public interface IRosAliasProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        /// </remarks>
        [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AliasName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyId: Globally unique identifier of the CMK.
        /// </remarks>
        [JsiiProperty(name: "keyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KeyId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::KMS::Alias`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosAliasProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IRosAliasProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
            /// </remarks>
            [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AliasName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: keyId: Globally unique identifier of the CMK.
            /// </remarks>
            [JsiiProperty(name: "keyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KeyId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
