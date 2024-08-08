using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnContains), fullyQualifiedName: "@alicloud/ros-cdk-core.FnContains", parametersJson: "[{\"name\":\"values\",\"type\":{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
    public class FnContains : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Contains`` function.</summary>
        public FnContains(object values, object @value): base(_MakeDeputyProps(values, @value))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object values, object @value)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (values)
                {
                    case object[] cast_89445e:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_89445e:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_89445e:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(values)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(values));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(values)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {values.GetType().FullName}", nameof(values));
                }
            }
            return new DeputyProps(new object?[]{values, @value});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnContains(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnContains(DeputyProps props): base(props)
        {
        }
    }
}
