using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosUrlObservation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosUrlObservationProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosUrlObservationProps")]
    public interface IRosUrlObservationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: sdkType: SDK integration mode. Value:
        /// - **automatic**: automatic integration.
        /// - **manual**: manual integration.
        /// </remarks>
        [JsiiProperty(name: "sdkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SdkType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteId: The site ID.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: url: The URL of the page to monitor.
        /// </remarks>
        [JsiiProperty(name: "url", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Url
        {
            get;
        }

        /// <summary>Properties for defining a `RosUrlObservation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosUrlObservationProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosUrlObservationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosUrlObservationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: sdkType: SDK integration mode. Value:
            /// - **automatic**: automatic integration.
            /// - **manual**: manual integration.
            /// </remarks>
            [JsiiProperty(name: "sdkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SdkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The site ID.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: url: The URL of the page to monitor.
            /// </remarks>
            [JsiiProperty(name: "url", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Url
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
