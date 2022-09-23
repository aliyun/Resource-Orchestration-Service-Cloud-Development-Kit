using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.</summary>
    /// <remarks>
    /// <c>Fn::Or</c> acts as an OR operator. The minimum number
    /// of conditions that you can include is 2, and the maximum is 10.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnOr), fullyQualifiedName: "@alicloud/ros-cdk-core.FnOr", parametersJson: "[{\"docs\":{\"summary\":\"A condition that evaluates to true or false.\"},\"name\":\"condition\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}]}},\"variadic\":true}]")]
    public class FnOr : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression
    {
        /// <summary>Creates an ``Fn::Or`` condition function.</summary>
        /// <param name="condition">A condition that evaluates to true or false.</param>
        public FnOr(params object[] condition): base(_MakeDeputyProps(condition))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(params object[] condition)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                for (var __idx_596d40 = 0 ; __idx_596d40 < condition.Length ; __idx_596d40++)
                {
                    switch (condition[__idx_596d40])
                    {
                        case string cast_223119:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression cast_223119:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_223119:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected argument {nameof(condition)}[{__idx_596d40}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received null", nameof(condition));
                        default:
                            throw new System.ArgumentException($"Expected argument {nameof(condition)}[{__idx_596d40}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received {condition[__idx_596d40].GetType().FullName}", nameof(condition));
                    }
                }
            }
            return new DeputyProps(new object?[]{condition});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnOr(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnOr(DeputyProps props): base(props)
        {
        }
    }
}
