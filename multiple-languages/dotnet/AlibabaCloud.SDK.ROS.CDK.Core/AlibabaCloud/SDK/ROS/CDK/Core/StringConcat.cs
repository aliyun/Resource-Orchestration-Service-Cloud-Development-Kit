using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Converts all fragments to strings and concats those.</summary>
    /// <remarks>
    /// Drops 'undefined's.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.StringConcat), fullyQualifiedName: "@alicloud/ros-cdk-core.StringConcat")]
    public class StringConcat : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IFragmentConcatenator
    {
        public StringConcat(): base(new DeputyProps(System.Array.Empty<object?>()))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected StringConcat(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected StringConcat(DeputyProps props): base(props)
        {
        }

        /// <summary>Join the fragment on the left and on the right.</summary>
        [JsiiMethod(name: "join", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"left\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"right\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual object Join(object left, object right)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(object), typeof(object)}, new object[]{left, right})!;
        }
    }
}
