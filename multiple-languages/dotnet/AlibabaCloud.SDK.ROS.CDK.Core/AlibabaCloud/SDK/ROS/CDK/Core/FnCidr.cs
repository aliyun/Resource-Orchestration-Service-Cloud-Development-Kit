using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnCidr), fullyQualifiedName: "@alicloud/ros-cdk-core.FnCidr", parametersJson: "[{\"name\":\"ipBlock\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"name\":\"count\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"name\":\"cidrBits\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
    public class FnCidr : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Cidr`` function.</summary>
        public FnCidr(object ipBlock, object count, object cidrBits): base(_MakeDeputyProps(ipBlock, count, cidrBits))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object ipBlock, object count, object cidrBits)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (ipBlock)
                {
                    case string cast_d22625:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_d22625:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_d22625:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(ipBlock)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(ipBlock));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(ipBlock)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {ipBlock.GetType().FullName}", nameof(ipBlock));
                }
                switch (count)
                {
                    case double cast_6c3549:
                        break;
                    case byte cast_6c3549:
                        break;
                    case decimal cast_6c3549:
                        break;
                    case float cast_6c3549:
                        break;
                    case int cast_6c3549:
                        break;
                    case long cast_6c3549:
                        break;
                    case sbyte cast_6c3549:
                        break;
                    case short cast_6c3549:
                        break;
                    case uint cast_6c3549:
                        break;
                    case ulong cast_6c3549:
                        break;
                    case ushort cast_6c3549:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_6c3549:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_6c3549:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(count)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(count));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(count)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {count.GetType().FullName}", nameof(count));
                }
                switch (cidrBits)
                {
                    case double cast_de6f23:
                        break;
                    case byte cast_de6f23:
                        break;
                    case decimal cast_de6f23:
                        break;
                    case float cast_de6f23:
                        break;
                    case int cast_de6f23:
                        break;
                    case long cast_de6f23:
                        break;
                    case sbyte cast_de6f23:
                        break;
                    case short cast_de6f23:
                        break;
                    case uint cast_de6f23:
                        break;
                    case ulong cast_de6f23:
                        break;
                    case ushort cast_de6f23:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_de6f23:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_de6f23:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(cidrBits)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(cidrBits));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(cidrBits)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cidrBits.GetType().FullName}", nameof(cidrBits));
                }
            }
            return new DeputyProps(new object?[]{ipBlock, count, cidrBits});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnCidr(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnCidr(DeputyProps props): base(props)
        {
        }
    }
}
