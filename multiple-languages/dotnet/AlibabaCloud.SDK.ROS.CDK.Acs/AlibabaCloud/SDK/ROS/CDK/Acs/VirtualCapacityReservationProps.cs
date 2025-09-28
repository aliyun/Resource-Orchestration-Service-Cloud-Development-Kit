using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acs
{
    /// <summary>Properties for defining a `VirtualCapacityReservation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-acs.VirtualCapacityReservationProps")]
    public class VirtualCapacityReservationProps : AlibabaCloud.SDK.ROS.CDK.Acs.IVirtualCapacityReservationProps
    {
        private object? _podPostpaidSpec;

        /// <summary>Property podPostpaidSpec: Postpaid pod spec for inquiry.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "podPostpaidSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty\"}]}}", isOptional: true)]
        public object? PodPostpaidSpec
        {
            get => _podPostpaidSpec;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Acs.RosVirtualCapacityReservation.IPodPostpaidSpecProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Acs.RosVirtualCapacityReservation.IPodPostpaidSpecProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _podPostpaidSpec = value;
            }
        }
    }
}
