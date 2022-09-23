using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnBase64Encode), fullyQualifiedName: "@alicloud/ros-cdk-core.FnBase64Encode", parametersJson: "[{\"docs\":{\"summary\":\"The string value you want to convert to Base64.\"},\"name\":\"data\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnBase64Encode : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Fn::Base64`` function.</summary>
        /// <param name="data">The string value you want to convert to Base64.</param>
        public FnBase64Encode(object data): base(_MakeDeputyProps(data))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object data)
        {
            return new DeputyProps(new object?[]{data});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnBase64Encode(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnBase64Encode(DeputyProps props): base(props)
        {
        }
    }
}
