using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps")]
    public class RosSubscriptionInstanceProps : AlibabaCloud.SDK.ROS.CDK.Dts.IRosSubscriptionInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configuration: Subscription configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty\"}]}}", isOptional: true)]
        public object? Configuration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: Payment type. Valid value:
        /// PostPaid: Pay-as-you-go, which is default value.
        /// PrePaid: subscription.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PayType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The unit of the subscription length. Valid values: Year and Month.
        /// Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
        /// PolarDB: PolarDB for MySQL cluster.
        /// polardb_o: PolarDB O Edition cluster.
        /// polardb_pg: PolarDB for PostgreSQL cluster.
        /// DRDS: PolarDB-X instance V1.0 or V2.0.
        /// PostgreSQL: self-managed PostgreSQL database.
        /// Oracle: self-managed Oracle database.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SourceEndpointInstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Dts.RosSubscriptionInstance.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: usedTime: The subscription length.
        /// Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        /// You can set the Period parameter to specify the unit of the subscription length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UsedTime
        {
            get;
            set;
        }
    }
}
