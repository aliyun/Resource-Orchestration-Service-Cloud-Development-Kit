using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options for assemly synthesis.</summary>
    [JsiiInterface(nativeType: typeof(IStageSynthesisOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.StageSynthesisOptions")]
    public interface IStageSynthesisOptions
    {
        /// <summary>Should we skip construct validation.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - false
        /// </remarks>
        [JsiiProperty(name: "skipValidation", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? SkipValidation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Options for assemly synthesis.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStageSynthesisOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.StageSynthesisOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IStageSynthesisOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Should we skip construct validation.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "skipValidation", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? SkipValidation
            {
                get => GetInstanceProperty<bool?>();
            }
        }
    }
}
