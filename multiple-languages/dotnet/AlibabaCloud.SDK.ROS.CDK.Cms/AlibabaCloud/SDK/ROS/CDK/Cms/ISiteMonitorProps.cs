using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `SiteMonitor`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-sitemonitor
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISiteMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.SiteMonitorProps")]
    public interface ISiteMonitorProps
    {
        /// <summary>Property address: The URL or IP address monitored by the monitoring task.</summary>
        [JsiiProperty(name: "address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Address
        {
            get;
        }

        /// <summary>Property taskName: The name of the site monitoring task.</summary>
        /// <remarks>
        /// The name must be 4 to 100 characters in length.
        /// It can contain letters, digits, and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskName
        {
            get;
        }

        /// <summary>Property taskType: The protocol used by the site monitoring task.</summary>
        /// <remarks>
        /// Valid values: HTTP, HTTPS, PING, TCP,
        /// UDP, DNS, SMTP, POP3, and FTP.
        /// </remarks>
        [JsiiProperty(name: "taskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskType
        {
            get;
        }

        /// <summary>Property alertIds:.</summary>
        [JsiiProperty(name: "alertIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlertIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property interval: The interval at which detection requests are sent.</summary>
        /// <remarks>
        /// Valid values: 1, 5, and 15. Unit:
        /// minutes. Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Interval
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ispCities: The information about detection points, which is specified in a JSON array.</summary>
        /// <remarks>
        /// Example:
        /// [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
        /// Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
        /// points that can be used to create site monitoring tasks. For more information, see
        /// DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
        /// points for site monitoring.
        /// </remarks>
        [JsiiProperty(name: "ispCities", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IspCities
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property optionsJson: The extended options of the protocol that is used by the site monitoring task.</summary>
        /// <remarks>
        /// The
        /// options vary based on the protocol.
        /// </remarks>
        [JsiiProperty(name: "optionsJson", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OptionsJson
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SiteMonitor`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-sitemonitor
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISiteMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.SiteMonitorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.ISiteMonitorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property address: The URL or IP address monitored by the monitoring task.</summary>
            [JsiiProperty(name: "address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Address
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property taskName: The name of the site monitoring task.</summary>
            /// <remarks>
            /// The name must be 4 to 100 characters in length.
            /// It can contain letters, digits, and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property taskType: The protocol used by the site monitoring task.</summary>
            /// <remarks>
            /// Valid values: HTTP, HTTPS, PING, TCP,
            /// UDP, DNS, SMTP, POP3, and FTP.
            /// </remarks>
            [JsiiProperty(name: "taskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property alertIds:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "alertIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AlertIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property interval: The interval at which detection requests are sent.</summary>
            /// <remarks>
            /// Valid values: 1, 5, and 15. Unit:
            /// minutes. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Interval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ispCities: The information about detection points, which is specified in a JSON array.</summary>
            /// <remarks>
            /// Example:
            /// [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
            /// Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
            /// points that can be used to create site monitoring tasks. For more information, see
            /// DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
            /// points for site monitoring.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ispCities", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IspCities
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property optionsJson: The extended options of the protocol that is used by the site monitoring task.</summary>
            /// <remarks>
            /// The
            /// options vary based on the protocol.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "optionsJson", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OptionsJson
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
