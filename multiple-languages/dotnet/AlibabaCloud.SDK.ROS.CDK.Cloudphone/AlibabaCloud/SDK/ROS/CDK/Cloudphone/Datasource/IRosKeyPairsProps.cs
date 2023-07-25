using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CloudPhone::KeyPairs`.</summary>
    [JsiiInterface(nativeType: typeof(IRosKeyPairsProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.RosKeyPairsProps")]
    public interface IRosKeyPairsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: keyPairFingerPrint: The Private Key of the Fingerprint.
        /// </remarks>
        [JsiiProperty(name: "keyPairFingerPrint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyPairFingerPrint
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: The Key Name.
        /// </remarks>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyPairName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CloudPhone::KeyPairs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosKeyPairsProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.RosKeyPairsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource.IRosKeyPairsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPairFingerPrint: The Private Key of the Fingerprint.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairFingerPrint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairFingerPrint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPairName: The Key Name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
