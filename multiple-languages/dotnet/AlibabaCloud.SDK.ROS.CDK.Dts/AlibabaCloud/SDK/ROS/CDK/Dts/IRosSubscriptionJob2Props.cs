using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `RosSubscriptionJob2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSubscriptionJob2Props), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSubscriptionJob2Props")]
    public interface IRosSubscriptionJob2Props
    {
        /// <remarks>
        /// <strong>Property</strong>: dbList: The objects for which you want to track data changes.
        /// </remarks>
        [JsiiProperty(name: "dbList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object DbList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsJobName: The name of the DTS instance.
        /// </remarks>
        [JsiiProperty(name: "dtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DtsJobName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpoint: Source instance configuration.
        /// </remarks>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SourceEndpointProperty\"}]}}")]
        object SourceEndpoint
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionInstance: Subscription instance configuration.
        /// </remarks>
        [JsiiProperty(name: "subscriptionInstance", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionInstanceProperty\"}]}}")]
        object SubscriptionInstance
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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

        /// <remarks>
        /// <strong>Property</strong>: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        /// </remarks>
        [JsiiProperty(name: "dedicatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedClusterId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
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

        /// <remarks>
        /// <strong>Property</strong>: delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
        /// **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
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

        /// <remarks>
        /// <strong>Property</strong>: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
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

        /// <remarks>
        /// <strong>Property</strong>: destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
        /// </remarks>
        [JsiiProperty(name: "destPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestPrimaryVswId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
        /// </remarks>
        [JsiiProperty(name: "destSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DestSecondaryVswId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
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

        /// <remarks>
        /// <strong>Property</strong>: dtsInstanceId: The ID of the DTS instance.
        /// </remarks>
        [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dtsJobId: The ID of the DTS task.
        /// </remarks>
        [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DtsJobId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
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

        /// <remarks>
        /// <strong>Property</strong>: errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
        /// **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
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

        /// <remarks>
        /// <strong>Property</strong>: maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
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

        /// <remarks>
        /// <strong>Property</strong>: minDu: The lower limit of DU. This parameter is supported only for serverless instances.
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

        /// <remarks>
        /// <strong>Property</strong>: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
        /// </remarks>
        [JsiiProperty(name: "srcPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SrcPrimaryVswId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
        /// </remarks>
        [JsiiProperty(name: "srcSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SrcSecondaryVswId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The status of the resource. Valid values:
        /// - **Subscribing**: Start the task.
        /// - **Suspending**: Suspend the task.
        /// - **Stopping**: Stop the task.
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

        /// <remarks>
        /// <strong>Property</strong>: subscriptionDataType: Subscription data type.
        /// </remarks>
        [JsiiProperty(name: "subscriptionDataType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionDataTypeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SubscriptionDataType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSubscriptionJob2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSubscriptionJob2Props), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSubscriptionJob2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosSubscriptionJob2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbList: The objects for which you want to track data changes.
            /// </remarks>
            [JsiiProperty(name: "dbList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object DbList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsJobName: The name of the DTS instance.
            /// </remarks>
            [JsiiProperty(name: "dtsJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DtsJobName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceEndpoint: Source instance configuration.
            /// </remarks>
            [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SourceEndpointProperty\"}]}}")]
            public object SourceEndpoint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionInstance: Subscription instance configuration.
            /// </remarks>
            [JsiiProperty(name: "subscriptionInstance", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionInstanceProperty\"}]}}")]
            public object SubscriptionInstance
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkpoint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Checkpoint
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayNotice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
            /// **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayPhone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayRuleTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destPrimaryVswId: The primary VSW ID at the destination end of the VPC NAT.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestPrimaryVswId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destSecondaryVswId: The secondary VSW ID at the destination end of the VPC NAT.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DestSecondaryVswId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsBisLabel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsBisLabel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsInstanceId: The ID of the DTS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsJobId: The ID of the DTS task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DtsJobId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorNotice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ErrorNotice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). You can specify up to 10 mobile numbers.
            /// **Note**: You can also configure alert rules for DTS tasks in the CloudMonitor console.This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "errorPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ErrorPhone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxDu: The upper limit of DU. This parameter is supported only for serverless instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxDu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: minDu: The lower limit of DU. This parameter is supported only for serverless instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minDu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinDu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reserve", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Reserve
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: srcPrimaryVswId: The primary VSW ID at the source end of the VPC NAT.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "srcPrimaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SrcPrimaryVswId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: srcSecondaryVswId: The secondary VSW ID at the source end of the VPC NAT.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "srcSecondaryVswId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SrcSecondaryVswId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: status: The status of the resource. Valid values:
            /// - **Subscribing**: Start the task.
            /// - **Suspending**: Suspend the task.
            /// - **Stopping**: Stop the task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionDataType: Subscription data type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "subscriptionDataType", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionDataTypeProperty\"}]}}", isOptional: true)]
            public object? SubscriptionDataType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
