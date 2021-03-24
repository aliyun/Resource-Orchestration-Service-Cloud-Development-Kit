using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options for creating a lazy string token.</summary>
    [JsiiInterface(nativeType: typeof(ILazyStringValueOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.LazyStringValueOptions")]
    public interface ILazyStringValueOptions
    {
        /// <summary>Use the given name as a display hint.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No hint
        /// </remarks>
        [JsiiProperty(name: "displayHint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DisplayHint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Options for creating a lazy string token.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILazyStringValueOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.LazyStringValueOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ILazyStringValueOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Use the given name as a display hint.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - No hint
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "displayHint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DisplayHint
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
