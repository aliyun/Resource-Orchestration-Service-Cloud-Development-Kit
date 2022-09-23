using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Returns true if all the specified conditions evaluate to true, or returns false if any one   of the conditions evaluates to false.</summary>
    /// <remarks>
    /// <c>Fn::And</c> acts as an AND operator. The minimum number of
    /// conditions that you can include is 2, and the maximum is 10.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnAnd), fullyQualifiedName: "@alicloud/ros-cdk-core.FnAnd", parametersJson: "[{\"name\":\"condition\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}]}},\"variadic\":true}]")]
    public class FnAnd : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression
    {
        public FnAnd(params object[] condition): base(_MakeDeputyProps(condition))
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
        protected FnAnd(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnAnd(DeputyProps props): base(props)
        {
        }
    }
}
