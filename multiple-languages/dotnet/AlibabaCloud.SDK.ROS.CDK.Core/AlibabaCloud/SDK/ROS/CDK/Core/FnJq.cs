using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnJq), fullyQualifiedName: "@alicloud/ros-cdk-core.FnJq", parametersJson: "[{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnJq : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Jq`` function.</summary>
        public FnJq(object @value): base(_MakeDeputyProps(@value))
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
        protected FnJq(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnJq(DeputyProps props): base(props)
        {
        }
    }
}
