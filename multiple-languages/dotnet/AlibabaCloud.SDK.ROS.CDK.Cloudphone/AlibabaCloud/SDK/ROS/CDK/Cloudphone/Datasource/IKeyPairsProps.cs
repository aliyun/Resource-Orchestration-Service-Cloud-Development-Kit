using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CloudPhone::KeyPairs`.</summary>
    [JsiiInterface(nativeType: typeof(IKeyPairsProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.KeyPairsProps")]
    public interface IKeyPairsProps
    {
        /// <summary>Property keyPairFingerPrint: The Private Key of the Fingerprint.</summary>
        [JsiiProperty(name: "keyPairFingerPrint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyPairFingerPrint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairName: The Key Name.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IKeyPairsProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudphone.datasource.KeyPairsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudphone.Datasource.IKeyPairsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property keyPairFingerPrint: The Private Key of the Fingerprint.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairFingerPrint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairFingerPrint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyPairName: The Key Name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
