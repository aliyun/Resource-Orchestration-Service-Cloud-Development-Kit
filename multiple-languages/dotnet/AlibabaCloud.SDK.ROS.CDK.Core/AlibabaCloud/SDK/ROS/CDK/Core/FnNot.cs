using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.</summary>
    /// <remarks>
    /// <c>Fn::Not</c> acts as a NOT operator.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnNot), fullyQualifiedName: "@alicloud/ros-cdk-core.FnNot", parametersJson: "[{\"docs\":{\"summary\":\"A condition such as ``Fn::Equals`` that evaluates to true or false.\"},\"name\":\"condition\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}]}}}]")]
    public class FnNot : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression
    {
        /// <summary>Creates an ``Fn::Not`` condition function.</summary>
        /// <param name="condition">A condition such as ``Fn::Equals`` that evaluates to true or false.</param>
        public FnNot(object condition): base(_MakeDeputyProps(condition))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object condition)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (condition)
                {
                    case string cast_596d40:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression cast_596d40:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_596d40:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(condition)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received null", nameof(condition));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(condition)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression).FullName}; received {condition.GetType().FullName}", nameof(condition));
                }
            }
            return new DeputyProps(new object?[]{condition});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnNot(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnNot(DeputyProps props): base(props)
        {
        }
    }
}
