using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Uses conventionally named roles and reify asset storage locations.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.DefaultStackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.DefaultStackSynthesizer")]
    public class DefaultStackSynthesizer : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer
    {
        public DefaultStackSynthesizer(): base(new DeputyProps(System.Array.Empty<object?>()))
        {
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

        /// <summary>Bind to the stack this environment is going to be used on.</summary>
        /// <remarks>
        /// Must be called before any of the other methods are called.
        /// </remarks>
        [JsiiMethod(name: "bind", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]", isOverride: true)]
        public virtual void Bind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack)}, new object[]{stack});
        }

        /// <summary>Synthesize all artifacts required for the stack into the session.</summary>
        [JsiiMethod(name: "synthesizeStackArtifacts", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]", isOverride: true)]
        public virtual void SynthesizeStackArtifacts(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session});
        }

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
