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
        public FnAnd(params object[] condition): base(new DeputyProps(new object?[]{condition}))
        {
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
