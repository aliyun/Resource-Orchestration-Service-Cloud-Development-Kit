using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.StringSpecializer), fullyQualifiedName: "@alicloud/ros-cdk-core.StringSpecializer", parametersJson: "[{\"name\":\"stack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}},{\"name\":\"qualifier\",\"type\":{\"primitive\":\"string\"}}]")]
    public class StringSpecializer : DeputyBase
    {
        public StringSpecializer(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack, string qualifier): base(_MakeDeputyProps(stack, qualifier))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Stack stack, string qualifier)
        {
            return new DeputyProps(new object?[]{stack, qualifier});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected StringSpecializer(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected StringSpecializer(DeputyProps props): base(props)
        {
        }

        /// <summary>Validate that the given string does not contain tokens.</summary>
        [JsiiMethod(name: "validateNoTokens", parametersJson: "[{\"name\":\"str\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"what\",\"type\":{\"primitive\":\"string\"}}]")]
        public static void ValidateNoTokens(string str, string what)
        {
            InvokeStaticVoidMethod(typeof(AlibabaCloud.SDK.ROS.CDK.Core.StringSpecializer), new System.Type[]{typeof(string), typeof(string)}, new object[]{str, what});
        }

        /// <summary>Specialize only the qualifier.</summary>
        [JsiiMethod(name: "qualifierOnly", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"str\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual string QualifierOnly(string str)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(string)}, new object[]{str})!;
        }

        /// <summary>Function to replace placeholders in the input string as much as possible.</summary>
        /// <remarks>
        /// We replace:
        ///
        /// <list type="bullet">
        /// <description>${Qualifier}: always</description>
        /// <description>${ALIYUN::AccountId}, ${ALIYUN::Region}: only if we have the actual values available</description>
        /// </list>
        /// </remarks>
        [JsiiMethod(name: "specialize", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"str\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual string Specialize(string str)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(string)}, new object[]{str})!;
        }

        /// <summary>Specialize the given string, make sure it doesn't contain tokens.</summary>
        [JsiiMethod(name: "specializeNoTokens", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"str\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"what\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual string SpecializeNoTokens(string str, string what)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(string), typeof(string)}, new object[]{str, what})!;
        }
    }
}
