using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Elasticsearch
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ElasticSearch::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-elasticsearch.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Elasticsearch.IInstanceProps
    {
        /// <summary>Property dataNode: The Elasticsearch cluster's data node setting.</summary>
        [JsiiProperty(name: "dataNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-elasticsearch.RosInstance.DataNodeProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DataNode
        {
            get;
            set;
        }

        /// <summary>Property password: The password of the instance.</summary>
        /// <remarks>
        /// The password can be 8 to 32 characters in length and must contain three of the following conditions: uppercase letters, lowercase letters, numbers, and special characters (!@#$%&amp;*()_+-=).
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Password
        {
            get;
            set;
        }

        /// <summary>Property version: Elasticsearch version.</summary>
        /// <remarks>
        /// Supported values: 5.5.3_with_X-Pack, 6.3_with_X-Pack, 6.7_with_X-Pack, 7.4_with_X-Pack, 6.8, 7.4, 7.7 and so on.
        /// </remarks>
        [JsiiProperty(name: "version", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Version
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The ID of VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property description: The description of instance.</summary>
        /// <remarks>
        /// It a string of 0 to 30 characters. It can contain numbers, letters, underscores, (_) and hyphens (-). It must start with a letter, a number or Chinese character.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property enableKibanaPrivate: Enables or disables intranet access to Kibana.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "enableKibanaPrivate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableKibanaPrivate
        {
            get;
            set;
        }

        /// <summary>Property enableKibanaPublic: Enables or disables Internet access to Kibana.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "enableKibanaPublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableKibanaPublic
        {
            get;
            set;
        }

        /// <summary>Property enablePublic: Whether enable public access.</summary>
        /// <remarks>
        /// If properties is true, will allocate public address.Default: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enablePublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnablePublic
        {
            get;
            set;
        }

        /// <summary>Property instanceChargeType: Valid values are PrePaid, PostPaid, Default to PostPaid.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceChargeType
        {
            get;
            set;
        }

        /// <summary>Property kibanaWhitelist: Set the Kibana's IP whitelist in internet network.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "kibanaWhitelist", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? KibanaWhitelist
        {
            get;
            set;
        }

        /// <summary>Property masterNode: The dedicated master node setting.</summary>
        /// <remarks>
        /// If specified, dedicated master node will be created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterNode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearch.RosInstance.MasterNodeProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? MasterNode
        {
            get;
            set;
        }

        /// <summary>Property period: The duration that you will buy Elasticsearch instance (in month).</summary>
        /// <remarks>
        /// It is valid when instance_charge_type is PrePaid. Valid values: [1~9], 12, 24, 36. Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <summary>Property privateWhitelist: Set the instance's IP whitelist in VPC network.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "privateWhitelist", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PrivateWhitelist
        {
            get;
            set;
        }

        /// <summary>Property publicWhitelist: Set the instance's IP whitelist in Internet.</summary>
        /// <remarks>
        /// The AllocatePublicAddress should be true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "publicWhitelist", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PublicWhitelist
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-elasticsearch.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Elasticsearch.RosInstance.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property ymlConfig: In the YML Configuration section of the Cluster  Configuration page of your Alibaba Cloud Elasticsearch cluster,  you can enable the Auto Indexing, Audit Log Indexing, or Watcher feature.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ymlConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-elasticsearch.RosInstance.YMLConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? YmlConfig
        {
            get;
            set;
        }

        /// <summary>Property zoneCount: undefined.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "zoneCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ZoneCount
        {
            get;
            set;
        }
    }
}
