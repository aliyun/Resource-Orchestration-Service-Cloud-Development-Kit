using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `SiteDeliveryTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISiteDeliveryTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.SiteDeliveryTaskProps")]
    public interface ISiteDeliveryTaskProps
    {
        /// <summary>Property businessType: Real-time log type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>dcdn_log_access_l1 (default)</c>: access log.</description>
        /// <description><c>dcdn_log_er</c>: Edge Routine logs.</description>
        /// <description><c>dcdn_log_waf</c>: firewall logs.</description>
        /// <description><c>dcdn_log_ipa</c>: TCP/UDP proxy logs.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "businessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BusinessType
        {
            get;
        }

        /// <summary>Property dataCenter: Data Center.</summary>
        /// <remarks>
        /// Values:
        ///
        /// <list type="bullet">
        /// <description><c>cn</c>: Mainland China.</description>
        /// <description><c>sg</c>: Global (excluding Mainland China).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dataCenter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataCenter
        {
            get;
        }

        /// <summary>Property deliveryType: Delivery Type: - `sls`: Alibaba Cloud Simple Log Service (SLS).</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><c>http</c>: Http service.</description>
        /// <description><c>aws3</c>: Amazon s3 service.</description>
        /// <description><c>oss</c>: Alibaba Cloud Object Storage Service.</description>
        /// <description><c>kafka</c>: Kafka service.</description>
        /// <description><c>aws3cmpt</c>: Amazon s3 Compatible Service.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "deliveryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeliveryType
        {
            get;
        }

        /// <summary>Property fieldName: The list of delivery fields to be modified, separated by commas.</summary>
        [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FieldName
        {
            get;
        }

        /// <summary>Property siteId: The site ID.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property taskName: The name of the delivery task.</summary>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskName
        {
            get;
        }

        /// <summary>Property discardRate: If the discard rate is not filled, the default value is 0.</summary>
        [JsiiProperty(name: "discardRate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiscardRate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpDelivery: HTTP delivery configuration parameters.</summary>
        [JsiiProperty(name: "httpDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.HttpDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kafkaDelivery: Kafka delivery configuration parameters.</summary>
        [JsiiProperty(name: "kafkaDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.KafkaDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KafkaDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossDelivery: OSS delivery configuration.</summary>
        [JsiiProperty(name: "ossDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.OssDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property s3Delivery: S3\/S3 compatible delivery configuration parameters.</summary>
        [JsiiProperty(name: "s3Delivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.S3DeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? S3Delivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsDelivery: SLS delivery configuration.</summary>
        [JsiiProperty(name: "slsDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.SlsDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SiteDeliveryTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISiteDeliveryTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.SiteDeliveryTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.ISiteDeliveryTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property businessType: Real-time log type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>dcdn_log_access_l1 (default)</c>: access log.</description>
            /// <description><c>dcdn_log_er</c>: Edge Routine logs.</description>
            /// <description><c>dcdn_log_waf</c>: firewall logs.</description>
            /// <description><c>dcdn_log_ipa</c>: TCP/UDP proxy logs.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "businessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BusinessType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataCenter: Data Center.</summary>
            /// <remarks>
            /// Values:
            ///
            /// <list type="bullet">
            /// <description><c>cn</c>: Mainland China.</description>
            /// <description><c>sg</c>: Global (excluding Mainland China).</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "dataCenter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataCenter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deliveryType: Delivery Type: - `sls`: Alibaba Cloud Simple Log Service (SLS).</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><c>http</c>: Http service.</description>
            /// <description><c>aws3</c>: Amazon s3 service.</description>
            /// <description><c>oss</c>: Alibaba Cloud Object Storage Service.</description>
            /// <description><c>kafka</c>: Kafka service.</description>
            /// <description><c>aws3cmpt</c>: Amazon s3 Compatible Service.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "deliveryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeliveryType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property fieldName: The list of delivery fields to be modified, separated by commas.</summary>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The site ID.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property taskName: The name of the delivery task.</summary>
            [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property discardRate: If the discard rate is not filled, the default value is 0.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "discardRate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiscardRate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property httpDelivery: HTTP delivery configuration parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.HttpDeliveryProperty\"}]}}", isOptional: true)]
            public object? HttpDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kafkaDelivery: Kafka delivery configuration parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kafkaDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.KafkaDeliveryProperty\"}]}}", isOptional: true)]
            public object? KafkaDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossDelivery: OSS delivery configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ossDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.OssDeliveryProperty\"}]}}", isOptional: true)]
            public object? OssDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property s3Delivery: S3\/S3 compatible delivery configuration parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "s3Delivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.S3DeliveryProperty\"}]}}", isOptional: true)]
            public object? S3Delivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slsDelivery: SLS delivery configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.SlsDeliveryProperty\"}]}}", isOptional: true)]
            public object? SlsDelivery
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
