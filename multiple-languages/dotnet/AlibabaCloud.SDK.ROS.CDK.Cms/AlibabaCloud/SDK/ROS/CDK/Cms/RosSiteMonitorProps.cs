using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::SiteMonitor`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosSiteMonitorProps")]
    public class RosSiteMonitorProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosSiteMonitorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: address: The URL or IP address monitored by the monitoring task.
        /// </remarks>
        [JsiiProperty(name: "address", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Address
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
        /// It can contain letters, digits, and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "taskName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TaskName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
        /// UDP, DNS, SMTP, POP3, and FTP.
        /// </remarks>
        [JsiiProperty(name: "taskType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TaskType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: alertIds:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "alertIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? AlertIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
        /// minutes. Default value: 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Interval
        {
            get;
            set;
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
        [JsiiProperty(name: "ispCities", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosSiteMonitor.IspCitiesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? IspCities
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: optionsJson: The extended options of the protocol that is used by the site monitoring task. The
        /// options vary based on the protocol.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "optionsJson", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OptionsJson
        {
            get;
            set;
        }
    }
}
