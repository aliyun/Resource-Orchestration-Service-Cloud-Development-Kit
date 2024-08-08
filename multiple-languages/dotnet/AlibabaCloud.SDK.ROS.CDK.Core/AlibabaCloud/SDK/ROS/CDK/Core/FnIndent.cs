using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnIndent), fullyQualifiedName: "@alicloud/ros-cdk-core.FnIndent", parametersJson: "[{\"name\":\"str\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"name\":\"level\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"name\":\"indent\",\"optional\":true,\"type\":{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
    public class FnIndent : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Indent`` function.</summary>
        public FnIndent(object str, object level, object? indent = null): base(_MakeDeputyProps(str, level, indent))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object str, object level, object? indent = null)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (str)
                {
                    case string cast_8c25cb:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_8c25cb:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_8c25cb:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(str)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(str));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(str)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {str.GetType().FullName}", nameof(str));
                }
                switch (level)
                {
                    case double cast_008177:
                        break;
                    case byte cast_008177:
                        break;
                    case decimal cast_008177:
                        break;
                    case float cast_008177:
                        break;
                    case int cast_008177:
                        break;
                    case long cast_008177:
                        break;
                    case sbyte cast_008177:
                        break;
                    case short cast_008177:
                        break;
                    case uint cast_008177:
                        break;
                    case ulong cast_008177:
                        break;
                    case ushort cast_008177:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_008177:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_008177:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(level)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(level));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(level)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {level.GetType().FullName}", nameof(level));
                }
                switch (indent)
                {
                    case double cast_7f113a:
                        break;
                    case byte cast_7f113a:
                        break;
                    case decimal cast_7f113a:
                        break;
                    case float cast_7f113a:
                        break;
                    case int cast_7f113a:
                        break;
                    case long cast_7f113a:
                        break;
                    case sbyte cast_7f113a:
                        break;
                    case short cast_7f113a:
                        break;
                    case uint cast_7f113a:
                        break;
                    case ulong cast_7f113a:
                        break;
                    case ushort cast_7f113a:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_7f113a:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_7f113a:
                        // Not enough information to type-check...
                        break;
                    case null:
                        break;
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(indent)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {indent.GetType().FullName}", nameof(indent));
                }
            }
            return new DeputyProps(new object?[]{str, level, indent});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnIndent(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnIndent(DeputyProps props): base(props)
        {
        }
    }
}
