using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Initialization props for a stage.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.StageProps")]
    public class StageProps : AlibabaCloud.SDK.ROS.CDK.Core.IStageProps
    {
        /// <summary>The output directory into which to emit synthesized artifacts.</summary>
        /// <remarks>
        /// Can only be specified if this stage is the root stage the app. If this is
        /// specified and this stage is nested within another stage, an error will be
        /// thrown.
        /// 
        /// Default - for nested stages, outdir will be determined as a relative
        /// directory to the outdir of the app. For apps, if outdir is not specified, a
        /// temporary directory will be created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Outdir
        {
            get;
            set;
        }
    }
}
