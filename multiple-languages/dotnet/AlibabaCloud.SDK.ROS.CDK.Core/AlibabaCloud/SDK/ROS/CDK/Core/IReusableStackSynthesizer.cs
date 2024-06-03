using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface for Stack Synthesizers that can be used for more than one stack.</summary>
    /// <remarks>
    /// Regular <c>IStackSynthesizer</c> instances can only be bound to a Stack once.
    /// <c>IReusableStackSynthesizer</c> instances.
    ///
    /// For backwards compatibility reasons, this class inherits from
    /// <c>IStackSynthesizer</c>, but if an object implements <c>IReusableStackSynthesizer</c>,
    /// no other methods than <c>reusableBind()</c> will be called.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IReusableStackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.IReusableStackSynthesizer")]
    public interface IReusableStackSynthesizer : AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer
    {
        /// <summary>Produce a bound Stack Synthesizer for the given stack.</summary>
        /// <remarks>
        /// This method may be called more than once on the same object.
        /// </remarks>
        [JsiiMethod(name: "reusableBind", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IBoundStackSynthesizer\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
        AlibabaCloud.SDK.ROS.CDK.Core.IBoundStackSynthesizer ReusableBind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack);

        /// <summary>Interface for Stack Synthesizers that can be used for more than one stack.</summary>
        /// <remarks>
        /// Regular <c>IStackSynthesizer</c> instances can only be bound to a Stack once.
        /// <c>IReusableStackSynthesizer</c> instances.
        ///
        /// For backwards compatibility reasons, this class inherits from
        /// <c>IStackSynthesizer</c>, but if an object implements <c>IReusableStackSynthesizer</c>,
        /// no other methods than <c>reusableBind()</c> will be called.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IReusableStackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.IReusableStackSynthesizer")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IReusableStackSynthesizer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Produce a bound Stack Synthesizer for the given stack.</summary>
            /// <remarks>
            /// This method may be called more than once on the same object.
            /// </remarks>
            [JsiiMethod(name: "reusableBind", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IBoundStackSynthesizer\"}}", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IBoundStackSynthesizer ReusableBind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack)
            {
                return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IBoundStackSynthesizer>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack)}, new object[]{stack})!;
            }

            /// <summary>Register a File Asset.</summary>
            /// <remarks>
            /// Returns the parameters that can be used to refer to the asset inside the template.
            /// </remarks>
            [JsiiMethod(name: "addFileAsset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetLocation\"}}", parametersJson: "[{\"name\":\"asset\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetSource\"}}]")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation AddFileAsset(AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource asset)
            {
                return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource)}, new object[]{asset})!;
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

            /// <summary>Synthesize the associated stack to the session.</summary>
            [JsiiMethod(name: "synthesize", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
            public void Synthesize(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
            {
                InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session});
            }
        }
    }
}
