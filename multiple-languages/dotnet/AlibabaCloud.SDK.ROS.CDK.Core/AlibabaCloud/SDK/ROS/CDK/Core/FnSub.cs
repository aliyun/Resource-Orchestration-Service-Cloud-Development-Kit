using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.</summary>
    /// <remarks>
    /// In your templates, you can use this function to construct commands or outputs
    /// that include values that aren't available until you create or update a stack.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnSub), fullyQualifiedName: "@alicloud/ros-cdk-core.FnSub", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnSub : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Fn::Sub`` function.</summary>
        /// <remarks>
        /// param body A string with variables that Ros Template substitutes with their
        /// associated values at runtime. Write variables as ${MyVarName}. Variables
        /// can be template parameter names, resource logical IDs, resource attributes,
        /// or a variable in a key-value map. If you specify only template parameter names,
        /// resource logical IDs, and resource attributes, don't specify a key-value map.
        /// param variables The name of a variable that you included in the String parameter.
        /// The value that Ros Template substitutes for the associated variable name at runtime.
        /// </remarks>
        public FnSub(object @value): base(_MakeDeputyProps(@value))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object @value)
        {
            return new DeputyProps(new object?[]{@value});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnSub(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnSub(DeputyProps props): base(props)
        {
        }
    }
}
