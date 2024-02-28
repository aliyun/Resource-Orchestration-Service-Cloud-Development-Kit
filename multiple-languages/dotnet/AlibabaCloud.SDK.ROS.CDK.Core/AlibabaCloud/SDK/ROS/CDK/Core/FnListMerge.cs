using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Returns true if a specified string matches all values in a list.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnListMerge), fullyQualifiedName: "@alicloud/ros-cdk-core.FnListMerge", parametersJson: "[{\"name\":\"listOfValues\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}}]")]
    public class FnListMerge : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResolvable
    {
        /// <summary>Creates an ``ListMerge`` function.</summary>
        public FnListMerge(object[] listOfValues): base(_MakeDeputyProps(listOfValues))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object[] listOfValues)
        {
            return new DeputyProps(new object?[]{listOfValues});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnListMerge(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnListMerge(DeputyProps props): base(props)
        {
        }

        /// <summary>Produce the Token's value at resolution time.</summary>
        [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"context\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolveContext\"}}]")]
        public virtual object Resolve(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext context)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolveContext)}, new object[]{context})!;
        }

        [JsiiMethod(name: "toJSON", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        public virtual string ToJSON()
        {
            return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>Return a string representation of this resolvable object.</summary>
        /// <remarks>
        /// Returns a reversible string representation.
        /// </remarks>
        [JsiiMethod(name: "toString", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        public override string ToString()
        {
            return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>The creation stack of this resolvable which will be appended to errors thrown during resolution.</summary>
        /// <remarks>
        /// If this returns an empty array the stack will not be attached.
        /// </remarks>
        [JsiiProperty(name: "creationStack", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        public virtual string[] CreationStack
        {
            get => GetInstanceProperty<string[]>()!;
        }
    }
}
