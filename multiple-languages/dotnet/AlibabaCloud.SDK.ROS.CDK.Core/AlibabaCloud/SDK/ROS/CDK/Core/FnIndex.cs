using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnIndex), fullyQualifiedName: "@alicloud/ros-cdk-core.FnIndex", parametersJson: "[{\"name\":\"itemToFindIndex\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"itemList\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
    public class FnIndex : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Index`` function.</summary>
        public FnIndex(object itemToFindIndex, object itemList): base(_MakeDeputyProps(itemToFindIndex, itemList))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object itemToFindIndex, object itemList)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (itemList)
                {
                    case object[] cast_9dda49:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_9dda49:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_9dda49:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(itemList)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(itemList));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(itemList)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {itemList.GetType().FullName}", nameof(itemList));
                }
            }
            return new DeputyProps(new object?[]{itemToFindIndex, itemList});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnIndex(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnIndex(DeputyProps props): base(props)
        {
        }
    }
}
