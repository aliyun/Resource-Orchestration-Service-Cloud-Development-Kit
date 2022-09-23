using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.NestedStack), fullyQualifiedName: "@alicloud/ros-cdk-core.NestedStack", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.NestedStackProps\"}}]")]
    public class NestedStack : AlibabaCloud.SDK.ROS.CDK.Core.Stack
    {
        public NestedStack(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.INestedStackProps? props = null): base(_MakeDeputyProps(scope, id, props))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.INestedStackProps? props = null)
        {
            return new DeputyProps(new object?[]{scope, id, props});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected NestedStack(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected NestedStack(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "isNestedStack", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsNestedStack(object x)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.NestedStack), new System.Type[]{typeof(object)}, new object[]{x})!;
        }

        [JsiiMethod(name: "getAtt", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"attributeName\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual string GetAtt(string attributeName)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(string)}, new object[]{attributeName})!;
        }

        [JsiiMethod(name: "setParameter", parametersJson: "[{\"name\":\"name\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void SetParameter(string name, object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(object)}, new object[]{name, @value});
        }

        /// <summary>The ID of the stack.</summary>
        [JsiiProperty(name: "stackId", typeJson: "{\"primitive\":\"string\"}")]
        public override string StackId
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The concrete ROS physical stack name.</summary>
        /// <remarks>
        /// This is either the name defined explicitly in the <c>stackName</c> prop or
        /// allocated based on the stack's location in the construct tree. Stacks that
        /// are directly defined under the app use their construct <c>id</c> as their stack
        /// name. Stacks that are defined deeper within the tree will use a hashed naming
        /// scheme based on the construct path to ensure uniqueness.
        /// </remarks>
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}")]
        public override string StackName
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
