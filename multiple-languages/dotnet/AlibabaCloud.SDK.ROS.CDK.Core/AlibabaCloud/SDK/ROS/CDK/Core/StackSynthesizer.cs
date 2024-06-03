using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Base class for implementing an IStackSynthesizer.</summary>
    /// <remarks>
    /// This class needs to exist to provide public surface area for external
    /// implementations of stack synthesizers. The protected methods give
    /// access to functions that are otherwise @_internal to the framework
    /// and could not be accessed by external implementors.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.StackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.StackSynthesizer")]
    public abstract class StackSynthesizer : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer
    {
        protected StackSynthesizer(): base(_MakeDeputyProps())
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps()
        {
            return new DeputyProps(System.Array.Empty<object?>());
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected StackSynthesizer(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected StackSynthesizer(DeputyProps props): base(props)
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
        public abstract AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation AddFileAsset(AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource asset);


        /// <summary>Bind to the stack this environment is going to be used on.</summary>
        /// <remarks>
        /// Must be called before any of the other methods are called.
        /// </remarks>
        [JsiiMethod(name: "bind", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
        public virtual void Bind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack)}, new object[]{stack});
        }

        /// <summary>Write the ROS stack artifact to the session.</summary>
        /// <remarks>
        /// Use default settings to add a ROSStackArtifact artifact to
        /// the given synthesis session. The Stack artifact will control the settings for the
        /// ROS deployment.
        /// </remarks>
        [JsiiMethod(name: "emitArtifact", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}},{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.SynthesizeStackArtifactOptions\"}}]")]
        protected virtual void EmitArtifact(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session, AlibabaCloud.SDK.ROS.CDK.Core.ISynthesizeStackArtifactOptions? options = null)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession), typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesizeStackArtifactOptions)}, new object?[]{session, options});
        }

        /// <summary>Turn a file asset location into a ROS representation of that location.</summary>
        /// <remarks>
        /// If any of the fields contain placeholders, the result will be wrapped in a <c>Fn.sub</c>.
        /// </remarks>
        [JsiiMethod(name: "rosLocationFromFileAsset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetLocation\"}}", parametersJson: "[{\"name\":\"location\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileDestination\"}}]")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation RosLocationFromFileAsset(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination location)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination)}, new object[]{location})!;
        }

        /// <summary>Synthesize the associated stack to the session.</summary>
        [JsiiMethod(name: "synthesize", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
        public abstract void Synthesize(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session);


        /// <summary>Write the stack template to the given session.</summary>
        /// <remarks>
        /// Return a descriptor that represents the stack template as a file asset
        /// source, for adding to an asset manifest (if desired). This can be used to
        /// have the asset manifest system (<c>cdk-assets</c>) upload the template to OSS
        /// using the appropriate role, so that afterwards only a ROS
        /// deployment is necessary.
        ///
        /// If the template is uploaded as an asset, the <c>stackTemplateAssetObjectUrl</c>
        /// property should be set when calling <c>emitArtifact.</c>
        ///
        /// If the template is <em>NOT</em> uploaded as an asset first and the template turns
        /// out to be &gt;50KB, it will need to be uploaded to OSS anyway. At that point
        /// the credentials will be the same identity that is doing the <c>UpdateStack</c>
        /// call, which may not have the right permissions to write to OSS.
        /// </remarks>
        [JsiiMethod(name: "synthesizeTemplate", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetSource\"}}", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource SynthesizeTemplate(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session})!;
        }

        /// <summary>Retrieve the bound stack.</summary>
        /// <remarks>
        /// Fails if the stack hasn't been bound yet.
        /// </remarks>
        [JsiiProperty(name: "boundStack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Stack BoundStack
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
        }

        /// <summary>Base class for implementing an IStackSynthesizer.</summary>
        /// <remarks>
        /// This class needs to exist to provide public surface area for external
        /// implementations of stack synthesizers. The protected methods give
        /// access to functions that are otherwise @_internal to the framework
        /// and could not be accessed by external implementors.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.StackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.StackSynthesizer")]
        internal sealed class _Proxy : AlibabaCloud.SDK.ROS.CDK.Core.StackSynthesizer
        {
            private _Proxy(ByRefValue reference): base(reference)
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

            /// <summary>Synthesize the associated stack to the session.</summary>
            [JsiiMethod(name: "synthesize", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
            public override void Synthesize(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
            {
                InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session});
            }
        }
    }
}
