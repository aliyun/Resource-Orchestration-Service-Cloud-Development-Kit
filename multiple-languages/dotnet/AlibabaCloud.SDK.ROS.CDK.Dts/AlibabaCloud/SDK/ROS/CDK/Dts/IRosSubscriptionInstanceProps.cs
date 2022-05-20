using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSubscriptionInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps")]
    public interface IRosSubscriptionInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configuration: Subscription configuration.
        /// </remarks>
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Configuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: Payment type. Valid value:
        /// PostPaid: Pay-as-you-go, which is default value.
        /// PrePaid: subscription.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The unit of the subscription length. Valid values: Year and Month.
        /// Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
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
        [JsiiProperty(name: "sourceEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceEndpointInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Dts.RosSubscriptionInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: usedTime: The subscription length.
        /// Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
        /// You can set the Period parameter to specify the unit of the subscription length.
        /// </remarks>
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UsedTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSubscriptionInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosSubscriptionInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: configuration: Subscription configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty\"}]}}", isOptional: true)]
            public object? Configuration
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The unit of the subscription length. Valid values: Year and Month.
            /// Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Dts.RosSubscriptionInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.RosSubscriptionInstance.ITagsProperty[]?>();
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
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
