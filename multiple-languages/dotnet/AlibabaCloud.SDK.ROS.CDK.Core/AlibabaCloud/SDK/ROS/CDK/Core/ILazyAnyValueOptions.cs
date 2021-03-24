using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options for creating lazy untyped tokens.</summary>
    [JsiiInterface(nativeType: typeof(ILazyAnyValueOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.LazyAnyValueOptions")]
    public interface ILazyAnyValueOptions
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

        /// <summary>If the produced value is an array and it is empty, return 'undefined' instead.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiProperty(name: "omitEmptyArray", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? OmitEmptyArray
        {
            get
            {
                return null;
            }
        }

        /// <summary>Options for creating lazy untyped tokens.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILazyAnyValueOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.LazyAnyValueOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ILazyAnyValueOptions
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

            /// <summary>If the produced value is an array and it is empty, return 'undefined' instead.</summary>
            /// <remarks>
            /// <strong>Default</strong>: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "omitEmptyArray", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? OmitEmptyArray
            {
                get => GetInstanceProperty<bool?>();
            }
        }
    }
}
