using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>An abstract application modeling unit consisting of Stacks that should be deployed together.</summary>
    /// <remarks>
    /// Derive a subclass of 'Stage' and use it to model a single instance of your
    /// application.
    ///
    /// You can then instantiate your subclass multiple times to model multiple
    /// copies of your application which should be be deployed to different
    /// environments.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stage), fullyQualifiedName: "@alicloud/ros-cdk-core.Stage", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.StageProps\"}}]")]
    public class Stage : AlibabaCloud.SDK.ROS.CDK.Core.Construct
    {
        public Stage(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IStageProps? props = null): base(_MakeDeputyProps(scope, id, props))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IStageProps? props = null)
        {
            return new DeputyProps(new object?[]{scope, id, props});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Stage(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Stage(DeputyProps props): base(props)
        {
        }

        /// <summary>(experimental) Test whether the given construct is a stage.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "isStage", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsStage(object x)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stage), new System.Type[]{typeof(object)}, new object[]{x})!;
        }

        /// <summary>(experimental) Return the stage this construct is contained with, if available.</summary>
        /// <remarks>
        /// If called
        /// on a nested stage, returns its parent.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "of", returnsJson: "{\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stage\"}}", parametersJson: "[{\"name\":\"construct\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.Stage? Of(AlibabaCloud.SDK.ROS.CDK.Core.IConstruct construct)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.Stage?>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stage), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IConstruct)}, new object[]{construct});
        }

        /// <summary>Synthesize this stage into a cloud assembly.</summary>
        /// <remarks>
        /// Once an assembly has been synthesized, it cannot be modified. Subsequent
        /// calls will return the same assembly.
        /// </remarks>
        [JsiiMethod(name: "synth", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}}", parametersJson: "[{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.StageSynthesisOptions\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly Synth(AlibabaCloud.SDK.ROS.CDK.Core.IStageSynthesisOptions? options = null)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IStageSynthesisOptions)}, new object?[]{options})!;
        }

        /// <summary>(experimental) Artifact ID of the assembly if it is a nested stage. The root stage app will return an empty string.</summary>
        /// <remarks>
        /// Derived from the construct path.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiProperty(name: "artifactId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ArtifactId
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The cloud assembly asset output directory.</summary>
        [JsiiProperty(name: "assetOutdir", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string AssetOutdir
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The cloud assembly output directory.</summary>
        [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Outdir
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>(experimental) The name of the stage.</summary>
        /// <remarks>
        /// Based on names of the parent stages separated by
        /// hypens.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string StageName
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The default account for all resources defined within this stage.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Account
        {
            get => GetInstanceProperty<string?>();
        }

        /// <summary>(experimental) The parent stage or 'undefined' if this is the app.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description></description>
        /// </list>
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parentStage", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stage\"}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.Stage? ParentStage
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stage?>();
        }

        /// <summary>The default region for all resources defined within this stage.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Region
        {
            get => GetInstanceProperty<string?>();
        }
    }
}
