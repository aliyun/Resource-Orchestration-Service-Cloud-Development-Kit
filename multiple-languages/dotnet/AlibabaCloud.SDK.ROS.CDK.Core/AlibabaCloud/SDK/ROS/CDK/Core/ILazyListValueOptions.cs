using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options for creating a lazy list token.</summary>
    [JsiiInterface(nativeType: typeof(ILazyListValueOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.LazyListValueOptions")]
    public interface ILazyListValueOptions
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

        /// <summary>If the produced list is empty, return 'undefined' instead.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiProperty(name: "omitEmpty", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? OmitEmpty
        {
            get
            {
                return null;
            }
        }

        /// <summary>Options for creating a lazy list token.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILazyListValueOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.LazyListValueOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ILazyListValueOptions
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

            /// <summary>If the produced list is empty, return 'undefined' instead.</summary>
            /// <remarks>
            /// <strong>Default</strong>: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "omitEmpty", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? OmitEmpty
            {
                get => GetInstanceProperty<bool?>();
            }
        }
    }
}
