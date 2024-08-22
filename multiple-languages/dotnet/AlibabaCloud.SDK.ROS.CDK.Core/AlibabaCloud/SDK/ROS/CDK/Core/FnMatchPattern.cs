using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnMatchPattern), fullyQualifiedName: "@alicloud/ros-cdk-core.FnMatchPattern", parametersJson: "[{\"name\":\"pattern\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"name\":\"value\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
    public class FnMatchPattern : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``MatchPattern`` function.</summary>
        public FnMatchPattern(object pattern, object @value): base(_MakeDeputyProps(pattern, @value))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object pattern, object @value)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (pattern)
                {
                    case string cast_1fd38d:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_1fd38d:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_1fd38d:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(pattern)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(pattern));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(pattern)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {pattern.GetType().FullName}", nameof(pattern));
                }
                switch (@value)
                {
                    case string cast_2ed7d7:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_2ed7d7:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_2ed7d7:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(@value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(@value));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(@value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {@value.GetType().FullName}", nameof(@value));
                }
            }
            return new DeputyProps(new object?[]{pattern, @value});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnMatchPattern(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnMatchPattern(DeputyProps props): base(props)
        {
        }
    }
}
