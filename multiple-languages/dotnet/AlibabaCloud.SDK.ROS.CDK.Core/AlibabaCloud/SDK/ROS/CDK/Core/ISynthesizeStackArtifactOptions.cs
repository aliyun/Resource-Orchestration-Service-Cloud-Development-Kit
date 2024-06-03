using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Stack artifact options.</summary>
    [JsiiInterface(nativeType: typeof(ISynthesizeStackArtifactOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.SynthesizeStackArtifactOptions")]
    public interface ISynthesizeStackArtifactOptions
    {
        /// <summary>Identifiers of additional dependencies.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No additional dependencies
        /// </remarks>
        [JsiiProperty(name: "additionalDependencies", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? AdditionalDependencies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Values for ROS stack parameters that should be passed when the stack is deployed.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No parameters
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, string>? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Stack artifact options.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISynthesizeStackArtifactOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.SynthesizeStackArtifactOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ISynthesizeStackArtifactOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Identifiers of additional dependencies.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - No additional dependencies
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "additionalDependencies", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? AdditionalDependencies
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Values for ROS stack parameters that should be passed when the stack is deployed.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - No parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, string>? Parameters
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }
        }
    }
}
