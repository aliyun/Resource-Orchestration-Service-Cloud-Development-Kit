using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `ALIYUN::KMS::Alias`.</summary>
    [JsiiInterface(nativeType: typeof(IAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.AliasProps")]
    public interface IAliasProps
    {
        /// <summary>Property aliasName: - The display name of the key.</summary>
        /// <remarks>
        /// You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        /// </remarks>
        [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}")]
        string AliasName
        {
            get;
        }

        /// <summary>Property keyId: Globally unique identifier of the CMK.</summary>
        [JsiiProperty(name: "keyId", typeJson: "{\"primitive\":\"string\"}")]
        string KeyId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::KMS::Alias`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.AliasProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IAliasProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aliasName: - The display name of the key.</summary>
            /// <remarks>
            /// You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
            /// </remarks>
            [JsiiProperty(name: "aliasName", typeJson: "{\"primitive\":\"string\"}")]
            public string AliasName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property keyId: Globally unique identifier of the CMK.</summary>
            [JsiiProperty(name: "keyId", typeJson: "{\"primitive\":\"string\"}")]
            public string KeyId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
