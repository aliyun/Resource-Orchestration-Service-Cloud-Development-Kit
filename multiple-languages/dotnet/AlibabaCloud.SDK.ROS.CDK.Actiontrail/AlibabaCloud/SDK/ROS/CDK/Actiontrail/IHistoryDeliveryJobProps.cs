using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `HistoryDeliveryJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHistoryDeliveryJobProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.HistoryDeliveryJobProps")]
    public interface IHistoryDeliveryJobProps
    {
        /// <summary>Property trailName: The name of the trail.</summary>
        [JsiiProperty(name: "trailName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrailName
        {
            get;
        }

        /// <summary>Properties for defining a `HistoryDeliveryJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-historydeliveryjob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHistoryDeliveryJobProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.HistoryDeliveryJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.IHistoryDeliveryJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property trailName: The name of the trail.</summary>
            [JsiiProperty(name: "trailName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrailName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
