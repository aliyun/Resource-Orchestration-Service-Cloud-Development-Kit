using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnBase64Decode), fullyQualifiedName: "@alicloud/ros-cdk-core.FnBase64Decode", parametersJson: "[{\"name\":\"data\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnBase64Decode : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        public FnBase64Decode(object data): base(new DeputyProps(new object?[]{data}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnBase64Decode(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnBase64Decode(DeputyProps props): base(props)
        {
        }
    }
}
