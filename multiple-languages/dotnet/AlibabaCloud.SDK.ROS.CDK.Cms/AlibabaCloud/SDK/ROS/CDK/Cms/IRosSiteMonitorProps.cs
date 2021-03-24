using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::SiteMonitor`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSiteMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosSiteMonitorProps")]
    public interface IRosSiteMonitorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: address: The URL or IP address monitored by the monitoring task.
        /// </remarks>
        [JsiiProperty(name: "address", typeJson: "{\"primitive\":\"string\"}")]
        string Address
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
        /// It can contain letters, digits, and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "taskName", typeJson: "{\"primitive\":\"string\"}")]
        string TaskName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
        /// UDP, DNS, SMTP, POP3, and FTP.
        /// </remarks>
        [JsiiProperty(name: "taskType", typeJson: "{\"primitive\":\"string\"}")]
        string TaskType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: alertIds:
        /// </remarks>
        [JsiiProperty(name: "alertIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? AlertIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
        /// minutes. Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Interval
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ispCities: The information about detection points, which is specified in a JSON array. Example:
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

        /// <remarks>
        /// <strong>Property</strong>: optionsJson: The extended options of the protocol that is used by the site monitoring task. The
        /// options vary based on the protocol.
        /// </remarks>
        [JsiiProperty(name: "optionsJson", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OptionsJson
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::SiteMonitor`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSiteMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosSiteMonitorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosSiteMonitorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: address: The URL or IP address monitored by the monitoring task.
            /// </remarks>
            [JsiiProperty(name: "address", typeJson: "{\"primitive\":\"string\"}")]
            public string Address
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
            /// It can contain letters, digits, and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "taskName", typeJson: "{\"primitive\":\"string\"}")]
            public string TaskName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
            /// UDP, DNS, SMTP, POP3, and FTP.
            /// </remarks>
            [JsiiProperty(name: "taskType", typeJson: "{\"primitive\":\"string\"}")]
            public string TaskType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: alertIds:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alertIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? AlertIds
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
            /// minutes. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Interval
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ispCities: The information about detection points, which is specified in a JSON array. Example:
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

            /// <remarks>
            /// <strong>Property</strong>: optionsJson: The extended options of the protocol that is used by the site monitoring task. The
            /// options vary based on the protocol.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "optionsJson", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OptionsJson
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
