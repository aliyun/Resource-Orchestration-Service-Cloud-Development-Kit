using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `RosHistoryDeliveryJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHistoryDeliveryJobProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.RosHistoryDeliveryJobProps")]
    public interface IRosHistoryDeliveryJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: trailName: The name of the trail.
        /// </remarks>
        [JsiiProperty(name: "trailName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrailName
        {
            get;
        }

        /// <summary>Properties for defining a `RosHistoryDeliveryJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHistoryDeliveryJobProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.RosHistoryDeliveryJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.IRosHistoryDeliveryJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: trailName: The name of the trail.
            /// </remarks>
            [JsiiProperty(name: "trailName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrailName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
