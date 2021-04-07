using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>(experimental) Token subclass that represents values intrinsic to the target document language.</summary>
    /// <remarks>
    /// This class will disappear in a future release and should not be used.
    ///
    /// <strong>Stability</strong>: Experimental
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic), fullyQualifiedName: "@alicloud/ros-cdk-core.Intrinsic", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
    public class Intrinsic : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResolvable
    {
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        public Intrinsic(object @value): base(new DeputyProps(new object?[]{@value}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Intrinsic(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Intrinsic(DeputyProps props): base(props)
        {
        }

        /// <summary>(experimental) Creates a throwable Error object that contains the token creation stack trace.</summary>
        /// <param name="message">Error message.</param>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "newError", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"docs\":{\"summary\":\"Error message.\"},\"name\":\"message\",\"type\":{\"primitive\":\"string\"}}]")]
        protected virtual object NewError(string message)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(string)}, new object[]{message})!;
        }

        /// <summary>(experimental) Produce the Token's value at resolution time.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"_context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]", isOverride: true)]
        public virtual object Resolve(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context})!;
        }

        /// <summary>(experimental) Turn this Token into JSON.</summary>
        /// <remarks>
        /// Called automatically when JSON.stringify() is called on a Token.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "toJSON", returnsJson: "{\"type\":{\"primitive\":\"any\"}}")]
        public virtual object ToJSON()
        {
            return InvokeInstanceMethod<object>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>(experimental) Convert an instance of this Token to a string.</summary>
        /// <remarks>
        /// This method will be called implicitly by language runtimes if the object
        /// is embedded into a string. We treat it the same as an explicit
        /// stringification.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "toString", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", isOverride: true)]
        public override string ToString()
        {
            return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>(experimental) The captured stack trace which represents the location in which this token was created.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiProperty(name: "creationStack", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        public virtual string[] CreationStack
        {
            get => GetInstanceProperty<string[]>()!;
        }
    }
}
