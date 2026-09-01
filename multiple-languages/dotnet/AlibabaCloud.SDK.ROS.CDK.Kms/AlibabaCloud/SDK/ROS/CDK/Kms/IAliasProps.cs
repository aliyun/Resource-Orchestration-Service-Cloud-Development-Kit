using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `Alias`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.AliasProps")]
    public interface IAliasProps
    {
        /// <summary>Property aliasName: The alias of the CMK.</summary>
        /// <remarks>
        /// The alias must be 1 to 255 characters in length and must contain the prefix
        /// <c>alias\/</c>. The alias cannot be prefixed with the reserved word <c>alias\/acs</c>.
        /// </remarks>
        [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AliasName
        {
            get;
        }

        /// <summary>Property keyId: Globally unique identifier of the CMK.</summary>
        [JsiiProperty(name: "keyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KeyId
        {
            get;
        }

        /// <summary>Properties for defining a `Alias`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.AliasProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IAliasProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aliasName: The alias of the CMK.</summary>
            /// <remarks>
            /// The alias must be 1 to 255 characters in length and must contain the prefix
            /// <c>alias\/</c>. The alias cannot be prefixed with the reserved word <c>alias\/acs</c>.
            /// </remarks>
            [JsiiProperty(name: "aliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AliasName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property keyId: Globally unique identifier of the CMK.</summary>
            [JsiiProperty(name: "keyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KeyId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
