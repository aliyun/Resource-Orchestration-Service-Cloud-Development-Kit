using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Encodes information how a certain Stack should be deployed.</summary>
    [JsiiInterface(nativeType: typeof(IStackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.IStackSynthesizer")]
    public interface IStackSynthesizer
    {
        /// <summary>Register a File Asset.</summary>
        /// <remarks>
        /// Returns the parameters that can be used to refer to the asset inside the template.
        /// </remarks>
        [JsiiMethod(name: "addFileAsset", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetLocation\"}}", parametersJson: "[{\"name\":\"asset\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FileAssetSource\"}}]")]
        AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation AddFileAsset(AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetSource asset);
        /// <summary>Bind to the stack this environment is going to be used on.</summary>
        /// <remarks>
        /// Must be called before any of the other methods are called.
        /// </remarks>
        [JsiiMethod(name: "bind", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}]")]
        void Bind(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack);
        /// <summary>Synthesize the associated stack to the session.</summary>
        [JsiiMethod(name: "synthesize", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
        void Synthesize(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session);

        /// <summary>Encodes information how a certain Stack should be deployed.</summary>
        [JsiiTypeProxy(nativeType: typeof(IStackSynthesizer), fullyQualifiedName: "@alicloud/ros-cdk-core.IStackSynthesizer")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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
