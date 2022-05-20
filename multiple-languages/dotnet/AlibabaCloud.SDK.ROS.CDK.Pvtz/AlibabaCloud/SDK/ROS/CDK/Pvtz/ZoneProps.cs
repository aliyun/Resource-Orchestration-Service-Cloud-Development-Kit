using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PVTZ::Zone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.ZoneProps")]
    public class ZoneProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.IZoneProps
    {
        /// <summary>Property zoneName: Zone name.</summary>
        [JsiiProperty(name: "zoneName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ZoneName
        {
            get;
            set;
        }

        /// <summary>Property proxyPattern: ZONE: completely hijack the entire zone.</summary>
        /// <remarks>
        /// RECORD: Incomplete hijacking, recursive resolution agent.
        /// Default to ZONE.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "proxyPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProxyPattern
        {
            get;
            set;
        }

        /// <summary>Property remark: 50 characters at most.</summary>
        /// <remarks>
        /// It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Remark
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZone.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZone.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property zoneTag: Zone label.</summary>
        /// <remarks>
        /// It will be ignored when ZoneType is AUTH_ZONE.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneTag
        {
            get;
            set;
        }

        /// <summary>Property zoneType: Zone type.</summary>
        /// <remarks>
        /// For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ZoneType
        {
            get;
            set;
        }
    }
}
