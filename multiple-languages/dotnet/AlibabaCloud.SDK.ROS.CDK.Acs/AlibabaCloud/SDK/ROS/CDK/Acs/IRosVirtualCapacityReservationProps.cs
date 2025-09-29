using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acs
{
    /// <summary>Properties for defining a `RosVirtualCapacityReservation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVirtualCapacityReservationProps), fullyQualifiedName: "@alicloud/ros-cdk-acs.RosVirtualCapacityReservationProps")]
    public interface IRosVirtualCapacityReservationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: podPostpaidSpec: Postpaid pod spec for inquiry.
        /// </remarks>
        [JsiiProperty(name: "podPostpaidSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PodPostpaidSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVirtualCapacityReservation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVirtualCapacityReservationProps), fullyQualifiedName: "@alicloud/ros-cdk-acs.RosVirtualCapacityReservationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acs.IRosVirtualCapacityReservationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: podPostpaidSpec: Postpaid pod spec for inquiry.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "podPostpaidSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty\"}]}}", isOptional: true)]
            public object? PodPostpaidSpec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
