using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `ScheduledPreloadJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IScheduledPreloadJobProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.ScheduledPreloadJobProps")]
    public interface IScheduledPreloadJobProps
    {
        /// <summary>Property insertWay: The method to submit the URLs to be prefetched.</summary>
        [JsiiProperty(name: "insertWay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InsertWay
        {
            get;
        }

        /// <summary>Property scheduledPreloadJobName: The name of the scheduled prefetch task.</summary>
        [JsiiProperty(name: "scheduledPreloadJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScheduledPreloadJobName
        {
            get;
        }

        /// <summary>Property siteId: The site ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property ossUrl: Preheat OSS files regularly and fill in the OSS file address.</summary>
        /// <remarks>
        /// Note: The OSS file contains the URL that you need to warm up.
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

        /// <summary>Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.</summary>
        [JsiiProperty(name: "urlList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UrlList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ScheduledPreloadJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IScheduledPreloadJobProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.ScheduledPreloadJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property insertWay: The method to submit the URLs to be prefetched.</summary>
            [JsiiProperty(name: "insertWay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InsertWay
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scheduledPreloadJobName: The name of the scheduled prefetch task.</summary>
            [JsiiProperty(name: "scheduledPreloadJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScheduledPreloadJobName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The site ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ossUrl: Preheat OSS files regularly and fill in the OSS file address.</summary>
            /// <remarks>
            /// Note: The OSS file contains the URL that you need to warm up.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OssUrl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "urlList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? UrlList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
