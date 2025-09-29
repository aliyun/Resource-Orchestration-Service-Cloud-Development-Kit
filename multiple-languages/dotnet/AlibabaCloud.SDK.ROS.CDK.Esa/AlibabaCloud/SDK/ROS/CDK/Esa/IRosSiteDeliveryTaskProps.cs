using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosSiteDeliveryTask`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSiteDeliveryTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosSiteDeliveryTaskProps")]
    public interface IRosSiteDeliveryTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: businessType: Real-time log type. Valid values:
        /// - `dcdn_log_access_l1 (default)`: access log.
        /// - `dcdn_log_er`: Edge Routine logs.
        /// - `dcdn_log_waf`: firewall logs.
        /// - `dcdn_log_ipa`: TCP\/UDP proxy logs.
        /// </remarks>
        [JsiiProperty(name: "businessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BusinessType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataCenter: Data Center. Values:
        /// - `cn`: Mainland China.
        /// - `sg`: Global (excluding Mainland China).
        /// </remarks>
        [JsiiProperty(name: "dataCenter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataCenter
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryType: Delivery Type:
        /// - `sls`: Alibaba Cloud Simple Log Service (SLS).
        /// - `http`: Http service.
        /// - `aws3`: Amazon s3 service.
        /// - `oss`: Alibaba Cloud Object Storage Service.
        /// - `kafka`: Kafka service.
        /// - `aws3cmpt`: Amazon s3 Compatible Service.
        /// </remarks>
        [JsiiProperty(name: "deliveryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DeliveryType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: fieldName: The list of delivery fields to be modified, separated by commas.
        /// </remarks>
        [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FieldName
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
        /// <strong>Property</strong>: taskName: The name of the delivery task.
        /// </remarks>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: discardRate: If the discard rate is not filled, the default value is 0.
        /// </remarks>
        [JsiiProperty(name: "discardRate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiscardRate
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpDelivery: HTTP delivery configuration parameters.
        /// </remarks>
        [JsiiProperty(name: "httpDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.HttpDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpDelivery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: kafkaDelivery: Kafka delivery configuration parameters.
        /// </remarks>
        [JsiiProperty(name: "kafkaDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.KafkaDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KafkaDelivery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ossDelivery: OSS delivery configuration.
        /// </remarks>
        [JsiiProperty(name: "ossDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.OssDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssDelivery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: s3Delivery: S3\/S3 compatible delivery configuration parameters.
        /// </remarks>
        [JsiiProperty(name: "s3Delivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.S3DeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? S3Delivery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: slsDelivery: SLS delivery configuration.
        /// </remarks>
        [JsiiProperty(name: "slsDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.SlsDeliveryProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsDelivery
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSiteDeliveryTask`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSiteDeliveryTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosSiteDeliveryTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosSiteDeliveryTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: businessType: Real-time log type. Valid values:
            /// - `dcdn_log_access_l1 (default)`: access log.
            /// - `dcdn_log_er`: Edge Routine logs.
            /// - `dcdn_log_waf`: firewall logs.
            /// - `dcdn_log_ipa`: TCP\/UDP proxy logs.
            /// </remarks>
            [JsiiProperty(name: "businessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BusinessType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataCenter: Data Center. Values:
            /// - `cn`: Mainland China.
            /// - `sg`: Global (excluding Mainland China).
            /// </remarks>
            [JsiiProperty(name: "dataCenter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataCenter
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryType: Delivery Type:
            /// - `sls`: Alibaba Cloud Simple Log Service (SLS).
            /// - `http`: Http service.
            /// - `aws3`: Amazon s3 service.
            /// - `oss`: Alibaba Cloud Object Storage Service.
            /// - `kafka`: Kafka service.
            /// - `aws3cmpt`: Amazon s3 Compatible Service.
            /// </remarks>
            [JsiiProperty(name: "deliveryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DeliveryType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: fieldName: The list of delivery fields to be modified, separated by commas.
            /// </remarks>
            [JsiiProperty(name: "fieldName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FieldName
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
            /// <strong>Property</strong>: taskName: The name of the delivery task.
            /// </remarks>
            [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: discardRate: If the discard rate is not filled, the default value is 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "discardRate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiscardRate
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpDelivery: HTTP delivery configuration parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.HttpDeliveryProperty\"}]}}", isOptional: true)]
            public object? HttpDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kafkaDelivery: Kafka delivery configuration parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kafkaDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.KafkaDeliveryProperty\"}]}}", isOptional: true)]
            public object? KafkaDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ossDelivery: OSS delivery configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ossDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.OssDeliveryProperty\"}]}}", isOptional: true)]
            public object? OssDelivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: s3Delivery: S3\/S3 compatible delivery configuration parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "s3Delivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.S3DeliveryProperty\"}]}}", isOptional: true)]
            public object? S3Delivery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: slsDelivery: SLS delivery configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsDelivery", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosSiteDeliveryTask.SlsDeliveryProperty\"}]}}", isOptional: true)]
            public object? SlsDelivery
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
