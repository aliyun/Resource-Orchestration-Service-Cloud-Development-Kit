using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnMarketplaceImage), fullyQualifiedName: "@alicloud/ros-cdk-core.FnMarketplaceImage", parametersJson: "[{\"name\":\"imageProductCode\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
    public class FnMarketplaceImage : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``MarketplaceImage`` function.</summary>
        public FnMarketplaceImage(object imageProductCode): base(_MakeDeputyProps(imageProductCode))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object imageProductCode)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (imageProductCode)
                {
                    case string cast_48ad40:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_48ad40:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_48ad40:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(imageProductCode)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(imageProductCode));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(imageProductCode)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {imageProductCode.GetType().FullName}", nameof(imageProductCode));
                }
            }
            return new DeputyProps(new object?[]{imageProductCode});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnMarketplaceImage(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnMarketplaceImage(DeputyProps props): base(props)
        {
        }
    }
}
