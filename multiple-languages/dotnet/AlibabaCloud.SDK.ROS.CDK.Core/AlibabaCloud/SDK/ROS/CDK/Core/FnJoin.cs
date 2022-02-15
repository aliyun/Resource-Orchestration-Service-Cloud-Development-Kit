using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.</summary>
    /// <remarks>
    /// If a delimiter is the empty string, the set of values are concatenated
    /// with no delimiter.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnJoin), fullyQualifiedName: "@alicloud/ros-cdk-core.FnJoin", parametersJson: "[{\"docs\":{\"remarks\":\"The delimiter will occur between fragments only.\nIt will not terminate the final value.\",\"summary\":\"The value you want to occur between fragments.\"},\"name\":\"delimiter\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The list of values you want combined.\"},\"name\":\"listOfValues\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}}]")]
    public class FnJoin : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResolvable
    {
        /// <summary>Creates an ``Fn::Join`` function.</summary>
        /// <param name="delimiter">The value you want to occur between fragments.</param>
        /// <param name="listOfValues">The list of values you want combined.</param>
        public FnJoin(string delimiter, object[] listOfValues): base(new DeputyProps(new object?[]{delimiter, listOfValues}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnJoin(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnJoin(DeputyProps props): base(props)
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
