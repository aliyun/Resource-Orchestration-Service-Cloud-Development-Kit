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
        public FnIf(object condition, object valueIfTrue, object valueIfFalse): base(new DeputyProps(new object?[]{condition, valueIfTrue, valueIfFalse}))
        {
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
