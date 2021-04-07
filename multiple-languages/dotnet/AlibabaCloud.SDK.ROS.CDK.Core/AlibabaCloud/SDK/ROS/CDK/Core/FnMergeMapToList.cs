using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnMergeMapToList), fullyQualifiedName: "@alicloud/ros-cdk-core.FnMergeMapToList", parametersJson: "[{\"name\":\"mapList\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnMergeMapToList : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``FnMergeMapToList`` function.</summary>
        public FnMergeMapToList(object mapList): base(new DeputyProps(new object?[]{mapList}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnMergeMapToList(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnMergeMapToList(DeputyProps props): base(props)
        {
        }
    }
}
