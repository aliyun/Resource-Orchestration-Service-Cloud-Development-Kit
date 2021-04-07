using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Compares if two values are equal.</summary>
    /// <remarks>
    /// Returns true if the two values are equal or false
    /// if they aren't.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnEquals), fullyQualifiedName: "@alicloud/ros-cdk-core.FnEquals", parametersJson: "[{\"docs\":{\"summary\":\"A value of any type that you want to compare.\"},\"name\":\"lhs\",\"type\":{\"primitive\":\"any\"}},{\"docs\":{\"summary\":\"A value of any type that you want to compare.\"},\"name\":\"rhs\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnEquals : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic, AlibabaCloud.SDK.ROS.CDK.Core.IRosConditionExpression
    {
        /// <summary>Creates an ``Fn::Equals`` condition function.</summary>
        /// <param name="lhs">A value of any type that you want to compare.</param>
        /// <param name="rhs">A value of any type that you want to compare.</param>
        public FnEquals(object lhs, object rhs): base(new DeputyProps(new object?[]{lhs, rhs}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnEquals(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnEquals(DeputyProps props): base(props)
        {
        }
    }
}
