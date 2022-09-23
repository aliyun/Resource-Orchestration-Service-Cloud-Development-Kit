using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnMax), fullyQualifiedName: "@alicloud/ros-cdk-core.FnMax", parametersJson: "[{\"name\":\"values\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnMax : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Max`` function.</summary>
        public FnMax(object values): base(_MakeDeputyProps(values))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object values)
        {
            return new DeputyProps(new object?[]{values});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnMax(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnMax(DeputyProps props): base(props)
        {
        }
    }
}
