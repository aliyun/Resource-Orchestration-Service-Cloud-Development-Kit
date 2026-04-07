using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `UrlObservation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUrlObservationProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.UrlObservationProps")]
    public interface IUrlObservationProps
    {
        /// <summary>Property sdkType: SDK integration mode.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><strong>automatic</strong>: automatic integration.</description>
        /// <description><strong>manual</strong>: manual integration.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "sdkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SdkType
        {
            get;
        }

        /// <summary>Property siteId: The site ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property url: The URL of the page to monitor.</summary>
        [JsiiProperty(name: "url", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Url
        {
            get;
        }

        /// <summary>Properties for defining a `UrlObservation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUrlObservationProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.UrlObservationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IUrlObservationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sdkType: SDK integration mode.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><strong>automatic</strong>: automatic integration.</description>
            /// <description><strong>manual</strong>: manual integration.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "sdkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SdkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The site ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property url: The URL of the page to monitor.</summary>
            [JsiiProperty(name: "url", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Url
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
