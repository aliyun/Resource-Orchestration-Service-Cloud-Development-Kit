using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>(deprecated) Options for synthesis.</summary>
    /// <remarks>
    /// <strong>Stability</strong>: Deprecated
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISynthesisOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.SynthesisOptions")]
    [System.Obsolete("use `app.synth()` or `stage.synth()` instead")]
    public interface ISynthesisOptions : AlibabaCloud.SDK.ROS.CDK.Cxapi.IAssemblyBuildOptions
    {
        /// <summary>(deprecated) The output directory into which to synthesize the cloud assembly.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - creates a temporary directory
        /// 
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [System.Obsolete()]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Outdir
        {
            get
            {
                return null;
            }
        }

        /// <summary>(deprecated) Whether synthesis should skip the validation phase.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// 
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiProperty(name: "skipValidation", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [System.Obsolete()]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? SkipValidation
        {
            get
            {
                return null;
            }
        }

        /// <summary>(deprecated) Options for synthesis.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISynthesisOptions), fullyQualifiedName: "@alicloud/ros-cdk-core.SynthesisOptions")]
        [System.Obsolete("use `app.synth()` or `stage.synth()` instead")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>(deprecated) The output directory into which to synthesize the cloud assembly.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - creates a temporary directory
            /// 
            /// <strong>Stability</strong>: Deprecated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [System.Obsolete()]
            public string? Outdir
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>(deprecated) Whether synthesis should skip the validation phase.</summary>
            /// <remarks>
            /// <strong>Default</strong>: false
            /// 
            /// <strong>Stability</strong>: Deprecated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "skipValidation", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            [System.Obsolete()]
            public bool? SkipValidation
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>Include the specified runtime information (module versions) in manifest.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - if this option is not specified, runtime info will not be included
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "runtimeInfo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.RuntimeInfo\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo? RuntimeInfo
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo?>();
            }
        }
    }
}
