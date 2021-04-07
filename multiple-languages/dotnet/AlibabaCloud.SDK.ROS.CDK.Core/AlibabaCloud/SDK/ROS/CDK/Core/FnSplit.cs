using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.</summary>
    /// <remarks>
    /// Specify the location of splits
    /// with a delimiter, such as , (a comma). After you split a string, use the <c>Fn::Select</c> function
    /// to pick a specific element.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnSplit), fullyQualifiedName: "@alicloud/ros-cdk-core.FnSplit", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnSplit : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Create an ``Fn::Split`` function.</summary>
        /// <remarks>
        /// param delimiter A string value that determines where the source string is divided.
        /// param source The string value that you want to split.
        /// </remarks>
        public FnSplit(object @value): base(new DeputyProps(new object?[]{@value}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnSplit(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnSplit(DeputyProps props): base(props)
        {
        }
    }
}
