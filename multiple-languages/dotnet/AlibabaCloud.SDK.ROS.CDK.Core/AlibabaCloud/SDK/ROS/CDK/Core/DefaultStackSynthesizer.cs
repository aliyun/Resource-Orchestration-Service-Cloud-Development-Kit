using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Uses conventionally named roles and reify asset storage locations.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.DefaultStackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.DefaultStackSynthesizer", parametersJson: "[{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DefaultStackSynthesizerProps\"}}]")]
    public class DefaultStackSynthesizer : AlibabaCloud.SDK.ROS.CDK.Core.StackSynthesizer, AlibabaCloud.SDK.ROS.CDK.Core.IReusableStackSynthesizer, AlibabaCloud.SDK.ROS.CDK.Core.IBoundStackSynthesizer
    {
        public DefaultStackSynthesizer(AlibabaCloud.SDK.ROS.CDK.Core.IDefaultStackSynthesizerProps? props = null): base(_MakeDeputyProps(props))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.IDefaultStackSynthesizerProps? props = null)
        {
            return new DeputyProps(new object?[]{props});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DefaultStackSynthesizer(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DefaultStackSynthesizer(DeputyProps props): base(props)
        {
        }

        /// <summary>Register a File Asset.</summary>
        /// <remarks>
        /// Returns the parameters that can be used to refer to the asset inside the template.
        ///
        /// The synthesizer must rely on some out-of-band mechanism to make sure the given files
        /// are actually placed in the returned location before the deployment happens. This can
        /// be by writing the instructions to the asset manifest (for use by the <c>cdk-assets</c> tool),
        /// by relying on the CLI to upload files (legacy behavior), or some other operator controlled
        /// mechanism.
        /// </remarks>
        [JsiiMethod(name: "addFileAsset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetLocation\"}}", parametersJson: "[{\"name\":\"asset\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetSource\"}}]")]
        public override AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation AddFileAsset(AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource asset)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource)}, new object[]{asset})!;
        }

        /// <summary>Bind to the stack this environment is going to be used on.</summary>
        /// <remarks>
        /// Must be called before any of the other methods are called.
        /// </remarks>
        [JsiiMethod(name: "bind", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
        public override void Bind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack)}, new object[]{stack});
        }

        /// <summary>Produce a bound Stack Synthesizer for the given stack.</summary>
        /// <remarks>
        /// This method may be called more than once on the same object.
        /// </remarks>
        [JsiiMethod(name: "reusableBind", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IBoundStackSynthesizer\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IBoundStackSynthesizer ReusableBind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IBoundStackSynthesizer>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack)}, new object[]{stack})!;
        }

        /// <summary>Synthesize the associated stack to the session.</summary>
        [JsiiMethod(name: "synthesize", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
        public override void Synthesize(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session});
        }

        [JsiiMethod(name: "synthesizeStackArtifacts", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
        public virtual void SynthesizeStackArtifacts(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session});
        }

        /// <summary>Default file asset prefix.</summary>
        [JsiiProperty(name: "DEFAULT_FILE_ASSET_PREFIX", typeJson: "{\"primitive\":\"string\"}")]
        public static string DEFAULT_FILE_ASSET_PREFIX
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.DefaultStackSynthesizer))!;

        /// <summary>Default file assets bucket name.</summary>
        [JsiiProperty(name: "DEFAULT_FILE_ASSETS_BUCKET_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string DEFAULT_FILE_ASSETS_BUCKET_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.DefaultStackSynthesizer))!;

        /// <summary>Default ARN qualifier.</summary>
        [JsiiProperty(name: "DEFAULT_QUALIFIER", typeJson: "{\"primitive\":\"string\"}")]
        public static string DEFAULT_QUALIFIER
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.DefaultStackSynthesizer))!;

        [JsiiOptional]
        [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}", isOptional: true)]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Stack? Stack
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack?>();
        }
    }
}
