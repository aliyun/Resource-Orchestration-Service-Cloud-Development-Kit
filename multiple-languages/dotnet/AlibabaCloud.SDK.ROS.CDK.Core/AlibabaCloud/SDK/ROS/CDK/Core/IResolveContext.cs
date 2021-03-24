using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Current resolution context for tokens.</summary>
    [JsiiInterface(nativeType: typeof(IResolveContext), fullyQualifiedName: "@alicloud/ros-cdk-core.IResolveContext")]
    public interface IResolveContext
    {
        /// <summary>True when we are still preparing, false if we're rendering the final output.</summary>
        [JsiiProperty(name: "preparing", typeJson: "{\"primitive\":\"boolean\"}")]
        bool Preparing
        {
            get;
        }

        /// <summary>The scope from which resolution has been initiated.</summary>
        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Scope
        {
            get;
        }
        /// <summary>Use this postprocessor after the entire token structure has been resolved.</summary>
        [JsiiMethod(name: "registerPostProcessor", parametersJson: "[{\"name\":\"postProcessor\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IPostProcessor\"}}]")]
        void RegisterPostProcessor(AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor postProcessor);
        /// <summary>Resolve an inner object.</summary>
        [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"any\"}}]")]
        object Resolve(object x);

        /// <summary>Current resolution context for tokens.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResolveContext), fullyQualifiedName: "@alicloud/ros-cdk-core.IResolveContext")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>True when we are still preparing, false if we're rendering the final output.</summary>
            [JsiiProperty(name: "preparing", typeJson: "{\"primitive\":\"boolean\"}")]
            public bool Preparing
            {
                get => GetInstanceProperty<bool>()!;
            }

            /// <summary>The scope from which resolution has been initiated.</summary>
            [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Scope
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct>()!;
            }

            /// <summary>Use this postprocessor after the entire token structure has been resolved.</summary>
            [JsiiMethod(name: "registerPostProcessor", parametersJson: "[{\"name\":\"postProcessor\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IPostProcessor\"}}]")]
            public void RegisterPostProcessor(AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor postProcessor)
            {
                InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IPostProcessor)}, new object[]{postProcessor});
            }

            /// <summary>Resolve an inner object.</summary>
            [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"any\"}}]")]
            public object Resolve(object x)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(object)}, new object[]{x})!;
            }
        }
    }
}
