using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acs
{
    /// <summary>Properties for defining a `VirtualCapacityReservation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVirtualCapacityReservationProps), fullyQualifiedName: "@alicloud/ros-cdk-acs.VirtualCapacityReservationProps")]
    public interface IVirtualCapacityReservationProps
    {
        /// <summary>Property podPostpaidSpec: Postpaid pod spec for inquiry.</summary>
        [JsiiProperty(name: "podPostpaidSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PodPostpaidSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VirtualCapacityReservation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVirtualCapacityReservationProps), fullyQualifiedName: "@alicloud/ros-cdk-acs.VirtualCapacityReservationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acs.IVirtualCapacityReservationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property podPostpaidSpec: Postpaid pod spec for inquiry.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "podPostpaidSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosVirtualCapacityReservation.PodPostpaidSpecProperty\"}]}}", isOptional: true)]
            public object? PodPostpaidSpec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
