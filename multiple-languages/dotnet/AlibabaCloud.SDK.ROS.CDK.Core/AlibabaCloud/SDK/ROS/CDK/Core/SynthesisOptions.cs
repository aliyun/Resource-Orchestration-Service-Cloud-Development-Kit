using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>(deprecated) Options for synthesis.</summary>
    /// <remarks>
    /// <strong>Stability</strong>: Deprecated
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.SynthesisOptions")]
    public class SynthesisOptions : AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisOptions
    {
        /// <summary>(deprecated) The output directory into which to synthesize the cloud assembly.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - creates a temporary directory
        ///
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        [System.Obsolete()]
        public string? Outdir
        {
            get;
            set;
        }

        /// <summary>(deprecated) Whether synthesis should skip the validation phase.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        ///
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "skipValidation", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        [System.Obsolete()]
        public bool? SkipValidation
        {
            get;
            set;
        }

        /// <summary>Include the specified runtime information (module versions) in manifest.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - if this option is not specified, runtime info will not be included
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "runtimeInfo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.RuntimeInfo\"}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo? RuntimeInfo
        {
            get;
            set;
        }
    }
}
