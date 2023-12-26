using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `RosTrailLogging`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrailLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.RosTrailLoggingProps")]
    public interface IRosTrailLoggingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: enable: Whether to enable the trail logging.
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Enable
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the trail to be enabled.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Properties for defining a `RosTrailLogging`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrailLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.RosTrailLoggingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.IRosTrailLoggingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: enable: Whether to enable the trail logging.
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the trail to be enabled.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
