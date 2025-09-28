using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosScheduledPreloadJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosScheduledPreloadJobProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosScheduledPreloadJobProps")]
    public interface IRosScheduledPreloadJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: insertWay: The method to submit the URLs to be prefetched.
        /// </remarks>
        [JsiiProperty(name: "insertWay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InsertWay
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduledPreloadJobName: The name of the scheduled prefetch task.
        /// </remarks>
        [JsiiProperty(name: "scheduledPreloadJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScheduledPreloadJobName
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
        /// <strong>Property</strong>: ossUrl: Preheat OSS files regularly and fill in the OSS file address. Note: The OSS file contains the URL that you need to warm up.
        /// </remarks>
        [JsiiProperty(name: "ossUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssUrl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
        /// </remarks>
        [JsiiProperty(name: "urlList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UrlList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosScheduledPreloadJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosScheduledPreloadJobProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosScheduledPreloadJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosScheduledPreloadJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: insertWay: The method to submit the URLs to be prefetched.
            /// </remarks>
            [JsiiProperty(name: "insertWay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InsertWay
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scheduledPreloadJobName: The name of the scheduled prefetch task.
            /// </remarks>
            [JsiiProperty(name: "scheduledPreloadJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScheduledPreloadJobName
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
            /// <strong>Property</strong>: ossUrl: Preheat OSS files regularly and fill in the OSS file address. Note: The OSS file contains the URL that you need to warm up.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "urlList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? UrlList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
