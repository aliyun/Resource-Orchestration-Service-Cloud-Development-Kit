using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.</summary>
    /// <remarks>
    /// Because customers have access to different Availability Zones, the intrinsic
    /// function <c>Fn::GetAZs</c> enables template authors to write templates that adapt to the calling
    /// user's access. That way you don't have to hard-code a full list of Availability Zones for a
    /// specified region.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnGetAZs), fullyQualifiedName: "@alicloud/ros-cdk-core.FnGetAZs", parametersJson: "[{\"docs\":{\"summary\":\"The name of the region for which you want to get the Availability Zones.\"},\"name\":\"region\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnGetAZs : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Fn::GetAZs`` function.</summary>
        /// <param name="region">The name of the region for which you want to get the Availability Zones.</param>
        public FnGetAZs(object region): base(_MakeDeputyProps(region))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object region)
        {
            return new DeputyProps(new object?[]{region});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnGetAZs(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnGetAZs(DeputyProps props): base(props)
        {
        }
    }
}
