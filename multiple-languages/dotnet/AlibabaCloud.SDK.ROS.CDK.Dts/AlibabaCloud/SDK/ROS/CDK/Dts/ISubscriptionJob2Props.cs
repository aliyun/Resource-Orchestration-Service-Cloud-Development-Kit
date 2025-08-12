using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `SubscriptionJob2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISubscriptionJob2Props), fullyQualifiedName: "@alicloud/ros-cdk-dts.SubscriptionJob2Props")]
    public interface ISubscriptionJob2Props
    {
        /// <summary>Property dbList: The objects for which you want to track data changes.</summary>
        [JsiiProperty(name: "dbList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object DbList
        {
            get;
        }

        /// <summary>Property dtsJobName: The name of the DTS instance.</summary>
        [JsiiProperty(name: "dtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DtsJobName
        {
            get;
        }

        /// <summary>Property sourceEndpoint: Source instance configuration.</summary>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SourceEndpointProperty\"}]}}")]
        object SourceEndpoint
        {
            get;
        }

        /// <summary>Property subscriptionInstance: Subscription instance configuration.</summary>
        [JsiiProperty(name: "subscriptionInstance", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionInstanceProperty\"}]}}")]
        object SubscriptionInstance
        {
            get;
        }

        /// <summary>Property checkpoint: The start offset of incremental data migration or synchronization.</summary>
        /// <remarks>
        /// This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        /// </remarks>
        [JsiiProperty(name: "checkpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Checkpoint
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.</summary>
        [JsiiProperty(name: "dedicatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property delayNotice: Specifies whether to monitor the task latency.</summary>
        /// <remarks>
        /// Valid values: <strong>true</strong> and <strong>false</strong>
        /// </remarks>
        [JsiiProperty(name: "delayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DelayNotice
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property delayPhone: The mobile numbers that receive latency-related alerts.</summary>
        /// <remarks>
        /// Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
        /// <strong>Note</strong>: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
        /// </remarks>
        [JsiiProperty(name: "delayPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DelayPhone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property delayRuleTime: The threshold for latency alerts.</summary>
        /// <remarks>
        /// Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        /// </remarks>
        [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DelayRuleTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.</summary>
        [JsiiProperty(name: "destPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestPrimaryVswId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.</summary>
        [JsiiProperty(name: "destSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestSecondaryVswId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dtsBisLabel: The environment tag of the DTS instance.</summary>
        /// <remarks>
        /// Valid values: <strong>normal</strong> and <strong>online</strong>.
        /// </remarks>
        [JsiiProperty(name: "dtsBisLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsBisLabel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dtsInstanceId: The ID of the DTS instance.</summary>
        [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dtsJobId: The ID of the DTS task.</summary>
        [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsJobId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property errorNotice: Specifies whether to monitor the task status.</summary>
        /// <remarks>
        /// Valid values: <strong>true</strong> and <strong>false</strong>.
        /// </remarks>
        [JsiiProperty(name: "errorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorNotice
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property errorPhone: The mobile numbers that receive status-related alerts.</summary>
        /// <remarks>
        /// Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
        /// <strong>Note</strong>: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
        /// </remarks>
        [JsiiProperty(name: "errorPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorPhone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxDu: The upper limit of DU.</summary>
        /// <remarks>
        /// This parameter is supported only for serverless instances.
        /// </remarks>
        [JsiiProperty(name: "maxDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxDu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property minDu: The lower limit of DU.</summary>
        /// <remarks>
        /// This parameter is supported only for serverless instances.
        /// </remarks>
        [JsiiProperty(name: "minDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinDu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property reserve: The reserved parameter of DTS.</summary>
        /// <remarks>
        /// You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "reserve", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Reserve
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.</summary>
        [JsiiProperty(name: "srcPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SrcPrimaryVswId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.</summary>
        [JsiiProperty(name: "srcSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SrcSecondaryVswId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of the resource.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>Subscribing</strong>: Start the task.</description>
        /// <description><strong>Suspending</strong>: Suspend the task.</description>
        /// <description><strong>Stopping</strong>: Stop the task.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property subscriptionDataType: Subscription data type.</summary>
        [JsiiProperty(name: "subscriptionDataType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionDataTypeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SubscriptionDataType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SubscriptionJob2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISubscriptionJob2Props), fullyQualifiedName: "@alicloud/ros-cdk-dts.SubscriptionJob2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.ISubscriptionJob2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbList: The objects for which you want to track data changes.</summary>
            [JsiiProperty(name: "dbList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object DbList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dtsJobName: The name of the DTS instance.</summary>
            [JsiiProperty(name: "dtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DtsJobName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceEndpoint: Source instance configuration.</summary>
            [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SourceEndpointProperty\"}]}}")]
            public object SourceEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property subscriptionInstance: Subscription instance configuration.</summary>
            [JsiiProperty(name: "subscriptionInstance", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionInstanceProperty\"}]}}")]
            public object SubscriptionInstance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property checkpoint: The start offset of incremental data migration or synchronization.</summary>
            /// <remarks>
            /// This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Checkpoint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property delayNotice: Specifies whether to monitor the task latency.</summary>
            /// <remarks>
            /// Valid values: <strong>true</strong> and <strong>false</strong>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayNotice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property delayPhone: The mobile numbers that receive latency-related alerts.</summary>
            /// <remarks>
            /// Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
            /// <strong>Note</strong>: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayPhone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property delayRuleTime: The threshold for latency alerts.</summary>
            /// <remarks>
            /// Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayRuleTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPrimaryVswId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestSecondaryVswId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dtsBisLabel: The environment tag of the DTS instance.</summary>
            /// <remarks>
            /// Valid values: <strong>normal</strong> and <strong>online</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsBisLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsBisLabel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dtsInstanceId: The ID of the DTS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dtsJobId: The ID of the DTS task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsJobId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property errorNotice: Specifies whether to monitor the task status.</summary>
            /// <remarks>
            /// Valid values: <strong>true</strong> and <strong>false</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ErrorNotice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property errorPhone: The mobile numbers that receive status-related alerts.</summary>
            /// <remarks>
            /// Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
            /// <strong>Note</strong>: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ErrorPhone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxDu: The upper limit of DU.</summary>
            /// <remarks>
            /// This parameter is supported only for serverless instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxDu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minDu: The lower limit of DU.</summary>
            /// <remarks>
            /// This parameter is supported only for serverless instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinDu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property reserve: The reserved parameter of DTS.</summary>
            /// <remarks>
            /// You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reserve", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Reserve
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "srcPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SrcPrimaryVswId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "srcSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SrcSecondaryVswId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of the resource.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>Subscribing</strong>: Start the task.</description>
            /// <description><strong>Suspending</strong>: Suspend the task.</description>
            /// <description><strong>Stopping</strong>: Stop the task.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property subscriptionDataType: Subscription data type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "subscriptionDataType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionDataTypeProperty\"}]}}", isOptional: true)]
            public object? SubscriptionDataType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
