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
        public FnNot(object condition): base(new DeputyProps(new object?[]{condition}))
        {
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
