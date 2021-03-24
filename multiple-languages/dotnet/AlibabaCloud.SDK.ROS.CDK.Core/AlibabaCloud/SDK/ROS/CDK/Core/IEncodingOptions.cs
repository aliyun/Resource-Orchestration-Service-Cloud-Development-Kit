using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Properties to string encodings.</summary>
    [JsiiInterface(nativeType: typeof(IEncodingOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.EncodingOptions")]
    public interface IEncodingOptions
    {
        /// <summary>A hint for the Token's purpose when stringifying it.</summary>
        [JsiiProperty(name: "displayHint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DisplayHint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties to string encodings.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEncodingOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.EncodingOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IEncodingOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>A hint for the Token's purpose when stringifying it.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "displayHint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DisplayHint
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
