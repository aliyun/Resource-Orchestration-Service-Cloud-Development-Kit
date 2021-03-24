using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface for values that can be resolvable later&#xD; &#xD; Tokens are special objects that participate in synthesis.</summary>
    [JsiiInterface(nativeType: typeof(IResolvable), fullyQualifiedName: "@alicloud/ros-cdk-core.IResolvable")]
    public interface IResolvable
    {
        /// <summary>The creation stack of this resolvable which will be appended to errors&#xD; thrown during resolution.</summary>
        /// <remarks>
        /// If this returns an empty array the stack will not be attached.
        /// </remarks>
        [JsiiProperty(name: "creationStack", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] CreationStack
        {
            get;
        }
        /// <summary>Produce the Token's value at resolution time.</summary>
        [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        object Resolve(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context);
        /// <summary>Return a string representation of this resolvable object.</summary>
        /// <remarks>
        /// Returns a reversible string representation.
        /// </remarks>
        [JsiiMethod(name: "toString", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        string ToString();

        /// <summary>Interface for values that can be resolvable later&#xD; &#xD; Tokens are special objects that participate in synthesis.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResolvable), fullyQualifiedName: "@alicloud/ros-cdk-core.IResolvable")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResolvable
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The creation stack of this resolvable which will be appended to errors&#xD; thrown during resolution.</summary>
            /// <remarks>
            /// If this returns an empty array the stack will not be attached.
            /// </remarks>
            [JsiiProperty(name: "creationStack", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] CreationStack
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <summary>Produce the Token's value at resolution time.</summary>
            [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
            public object Resolve(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
            {
                return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context})!;
            }

            /// <summary>Return a string representation of this resolvable object.</summary>
            /// <remarks>
            /// Returns a reversible string representation.
            /// </remarks>
            [JsiiMethod(name: "toString", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
            public string ToString()
            {
                return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
            }
        }
    }
}
