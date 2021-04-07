using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Encodes information how a certain Stack should be deployed.</summary>
    [JsiiInterface(nativeType: typeof(IStackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.IStackSynthesizer")]
    public interface IStackSynthesizer
    {
        /// <summary>Bind to the stack this environment is going to be used on.</summary>
        /// <remarks>
        /// Must be called before any of the other methods are called.
        /// </remarks>
        [JsiiMethod(name: "bind", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
        void Bind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack);
        /// <summary>(experimental) Synthesize all artifacts required for the stack into the session.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "synthesizeStackArtifacts", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
        void SynthesizeStackArtifacts(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session);

        /// <summary>Encodes information how a certain Stack should be deployed.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.IStackSynthesizer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Bind to the stack this environment is going to be used on.</summary>
            /// <remarks>
            /// Must be called before any of the other methods are called.
            /// </remarks>
            [JsiiMethod(name: "bind", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
            public void Bind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack)
            {
                InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack)}, new object[]{stack});
            }

            /// <summary>(experimental) Synthesize all artifacts required for the stack into the session.</summary>
            /// <remarks>
            /// <strong>Stability</strong>: Experimental
            /// </remarks>
            [JsiiMethod(name: "synthesizeStackArtifacts", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
            public void SynthesizeStackArtifacts(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
            {
                InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session});
            }
        }
    }
}
