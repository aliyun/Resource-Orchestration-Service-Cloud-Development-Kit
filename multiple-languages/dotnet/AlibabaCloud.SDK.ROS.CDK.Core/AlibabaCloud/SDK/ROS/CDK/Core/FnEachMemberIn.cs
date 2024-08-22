using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnEachMemberIn), fullyQualifiedName: "@alicloud/ros-cdk-core.FnEachMemberIn", parametersJson: "[{\"name\":\"values1\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"name\":\"values2\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
    public class FnEachMemberIn : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``EachMemberIn`` function.</summary>
        public FnEachMemberIn(object values1, object values2): base(_MakeDeputyProps(values1, values2))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object values1, object values2)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (values1)
                {
                    case object[] cast_4ae8e1:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_4ae8e1:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_4ae8e1:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(values1)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(values1));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(values1)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {values1.GetType().FullName}", nameof(values1));
                }
                switch (values2)
                {
                    case object[] cast_b92750:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_b92750:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_b92750:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(values2)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(values2));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(values2)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {values2.GetType().FullName}", nameof(values2));
                }
            }
            return new DeputyProps(new object?[]{values1, values2});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnEachMemberIn(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnEachMemberIn(DeputyProps props): base(props)
        {
        }
    }
}
