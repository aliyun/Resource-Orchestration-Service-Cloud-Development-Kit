using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents a RosTemplate element that can be used within a Condition.</summary>
    /// <remarks>
    /// You can use intrinsic functions, such as <c>Fn.conditionIf</c>,
    /// <c>Fn.conditionEquals</c>, and <c>Fn.conditionNot</c>, to conditionally create
    /// stack resources. These conditions are evaluated based on input parameters
    /// that you declare when you create or update a stack. After you define all your
    /// conditions, you can associate them with resources or resource properties in
    /// the Resources and Outputs sections of a template.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosConditionExpression), fullyQualifiedName: "@alicloud/ros-cdk-core.IRosConditionExpression")]
    public interface IRosConditionExpression : AlibabaCloud.SDK.ROS.CDK.Core.IResolvable
    {

        /// <summary>Represents a RosTemplate element that can be used within a Condition.</summary>
        /// <remarks>
        /// You can use intrinsic functions, such as <c>Fn.conditionIf</c>,
        /// <c>Fn.conditionEquals</c>, and <c>Fn.conditionNot</c>, to conditionally create
        /// stack resources. These conditions are evaluated based on input parameters
        /// that you declare when you create or update a stack. After you define all your
        /// conditions, you can associate them with resources or resource properties in
        /// the Resources and Outputs sections of a template.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosConditionExpression), fullyQualifiedName: "@alicloud/ros-cdk-core.IRosConditionExpression")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression
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
