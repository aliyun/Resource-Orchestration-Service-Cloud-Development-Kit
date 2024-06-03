using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents the building block of the construct graph.</summary>
    /// <remarks>
    /// All constructs besides the root construct must be created within the scope of
    /// another construct.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Construct), fullyQualifiedName: "@alicloud/ros-cdk-core.Construct", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}}]")]
    public class Construct : Constructs.Construct, AlibabaCloud.SDK.ROS.CDK.Core.IConstruct
    {
        public Construct(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id): base(_MakeDeputyProps(scope, id))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id)
        {
            return new DeputyProps(new object?[]{scope, id});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Construct(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Construct(DeputyProps props): base(props)
        {
        }

        /// <summary>Return whether the given object is a Construct.</summary>
        [JsiiMethod(name: "isConstruct", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsConstruct(object x)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Construct), new System.Type[]{typeof(object)}, new object[]{x})!;
        }

        /// <summary>Perform final modifications before synthesis.</summary>
        /// <remarks>
        /// This method can be implemented by derived constructs in order to perform
        /// final changes before synthesis. prepare() will be called after child
        /// constructs have been prepared.
        ///
        /// This is an advanced framework feature. Only use this if you
        /// understand the implications.
        /// </remarks>
        [JsiiMethod(name: "onPrepare")]
        protected override void OnPrepare()
        {
            InvokeInstanceVoidMethod(new System.Type[]{}, new object[]{});
        }

        /// <summary>Allows this construct to emit artifacts into the cloud assembly during synthesis.</summary>
        /// <param name="session">The synthesis session.</param>
        /// <remarks>
        /// This method is usually implemented by framework-level constructs such as <c>Stack</c> and <c>Asset</c>
        /// as they participate in synthesizing the cloud assembly.
        /// </remarks>
        [JsiiMethod(name: "onSynthesize", parametersJson: "[{\"docs\":{\"summary\":\"The synthesis session.\"},\"name\":\"session\",\"type\":{\"fqn\":\"constructs.ISynthesisSession\"}}]")]
        protected override void OnSynthesize(Constructs.ISynthesisSession session)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(Constructs.ISynthesisSession)}, new object[]{session});
        }

        /// <summary>Validate the current construct.</summary>
        /// <returns>An array of validation error messages, or an empty array if the construct is valid.</returns>
        /// <remarks>
        /// This method can be implemented by derived constructs in order to perform
        /// validation logic. It is called on all constructs before synthesis.
        /// </remarks>
        [JsiiMethod(name: "onValidate", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}")]
        protected override string[] OnValidate()
        {
            return InvokeInstanceMethod<string[]>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>Perform final modifications before synthesis.</summary>
        /// <remarks>
        /// This method can be implemented by derived constructs in order to perform
        /// final changes before synthesis. prepare() will be called after child
        /// constructs have been prepared.
        ///
        /// This is an advanced framework feature. Only use this if you
        /// understand the implications.
        /// </remarks>
        [JsiiMethod(name: "prepare")]
        protected virtual void Prepare()
        {
            InvokeInstanceVoidMethod(new System.Type[]{}, new object[]{});
        }

        /// <summary>Allows this construct to emit artifacts into the cloud assembly during synthesis.</summary>
        /// <param name="session">The synthesis session.</param>
        /// <remarks>
        /// This method is usually implemented by framework-level constructs such as <c>Stack</c> and <c>Asset</c>
        /// as they participate in synthesizing the cloud assembly.
        /// </remarks>
        [JsiiMethod(name: "synthesize", parametersJson: "[{\"docs\":{\"summary\":\"The synthesis session.\"},\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]")]
        public virtual void Synthesize(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session});
        }

        /// <summary>Validate the current construct.</summary>
        /// <returns>An array of validation error messages, or an empty array if the construct is valid.</returns>
        /// <remarks>
        /// This method can be implemented by derived constructs in order to perform
        /// validation logic. It is called on all constructs before synthesis.
        /// </remarks>
        [JsiiMethod(name: "validate", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}")]
        protected virtual string[] Validate()
        {
            return InvokeInstanceMethod<string[]>(new System.Type[]{}, new object[]{})!;
        }

        /// <summary>The construct tree node associated with this construct.</summary>
        [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
        }
    }
}
