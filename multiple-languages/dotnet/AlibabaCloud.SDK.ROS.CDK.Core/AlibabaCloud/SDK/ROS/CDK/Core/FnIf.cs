using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnIf), fullyQualifiedName: "@alicloud/ros-cdk-core.FnIf", parametersJson: "[{\"docs\":{\"remarks\":\"Use the condition's name to reference it.\",\"summary\":\"A reference to a condition in the Conditions section.\"},\"name\":\"condition\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IRosConditionExpression\"}]}}},{\"docs\":{\"summary\":\"A value to be returned if the specified condition evaluates to true.\"},\"name\":\"valueIfTrue\",\"type\":{\"primitive\":\"any\"}},{\"docs\":{\"summary\":\"A value to be returned if the specified condition evaluates to false.\"},\"name\":\"valueIfFalse\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnIf : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression
    {
        /// <summary>Creates an ``Fn::If`` condition function.</summary>
        /// <param name="condition">A reference to a condition in the Conditions section.</param>
        /// <param name="valueIfTrue">A value to be returned if the specified condition evaluates to true.</param>
        /// <param name="valueIfFalse">A value to be returned if the specified condition evaluates to false.</param>
        public FnIf(object condition, object valueIfTrue, object valueIfFalse): base(_MakeDeputyProps(condition, valueIfTrue, valueIfFalse))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object condition, object valueIfTrue, object valueIfFalse)
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
            return new DeputyProps(new object?[]{condition, valueIfTrue, valueIfFalse});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnIf(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnIf(DeputyProps props): base(props)
        {
        }
    }
}
