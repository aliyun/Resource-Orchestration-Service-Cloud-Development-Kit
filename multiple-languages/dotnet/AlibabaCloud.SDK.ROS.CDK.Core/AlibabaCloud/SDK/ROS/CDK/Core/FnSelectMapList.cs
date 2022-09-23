using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnSelectMapList), fullyQualifiedName: "@alicloud/ros-cdk-core.FnSelectMapList", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnSelectMapList : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``FnMergeMapToList`` function.</summary>
        public FnSelectMapList(object @value): base(_MakeDeputyProps(@value))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object @value)
        {
            return new DeputyProps(new object?[]{@value});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnSelectMapList(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnSelectMapList(DeputyProps props): base(props)
        {
        }
    }
}
