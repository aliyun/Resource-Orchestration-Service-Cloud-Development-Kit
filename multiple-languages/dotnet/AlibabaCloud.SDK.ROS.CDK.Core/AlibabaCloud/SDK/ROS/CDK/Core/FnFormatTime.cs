using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnFormatTime), fullyQualifiedName: "@alicloud/ros-cdk-core.FnFormatTime", parametersJson: "[{\"name\":\"format\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}},{\"name\":\"timeZone\",\"type\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}}]")]
    public class FnFormatTime : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``FormatTime`` function.</summary>
        public FnFormatTime(object format, object timeZone): base(_MakeDeputyProps(format, timeZone))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(object format, object timeZone)
        {
            if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
            {
                switch (format)
                {
                    case string cast_e904c9:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_e904c9:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_e904c9:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(format)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(format));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(format)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {format.GetType().FullName}", nameof(format));
                }
                switch (timeZone)
                {
                    case string cast_ab9689:
                        break;
                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_ab9689:
                        break;
                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_ab9689:
                        // Not enough information to type-check...
                        break;
                    case null:
                        throw new System.ArgumentException($"Expected argument {nameof(timeZone)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(timeZone));
                    default:
                        throw new System.ArgumentException($"Expected argument {nameof(timeZone)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {timeZone.GetType().FullName}", nameof(timeZone));
                }
            }
            return new DeputyProps(new object?[]{format, timeZone});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnFormatTime(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnFormatTime(DeputyProps props): base(props)
        {
        }
    }
}
