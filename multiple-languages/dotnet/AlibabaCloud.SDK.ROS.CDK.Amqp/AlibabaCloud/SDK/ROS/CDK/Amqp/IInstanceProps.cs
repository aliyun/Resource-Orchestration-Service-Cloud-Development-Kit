using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Amqp
{
    /// <summary>Properties for defining a `ALIYUN::AMQP::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property instanceType: The Instance Type.</summary>
        /// <remarks>
        /// Valid values: professional, enterprise, vip.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <summary>Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].</summary>
        /// <remarks>
        /// If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
        /// If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
        /// </remarks>
        [JsiiProperty(name: "maxTps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MaxTps
        {
            get;
        }

        /// <summary>Property queueCapacity: The queue capacity.</summary>
        /// <remarks>
        /// If instance type is professional, the valid value is [50, 1000] with the step size 5.
        /// If instance type is enterprise, the valid value is [200, 6000] with the step size 100
        /// If instance type is vip, the valid value is [200, 80000] with the step size 100
        /// </remarks>
        [JsiiProperty(name: "queueCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueueCapacity
        {
            get;
        }

        /// <summary>Property storageSize: The storage size.</summary>
        /// <remarks>
        /// It is valid when instance_type is vip.
        /// If instance type is professional or enterprise, the valid value is 200.
        /// If instance type is vip, the valid value is [700, 2800] with the step size 100
        /// </remarks>
        [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageSize
        {
            get;
        }

        /// <summary>Property instanceName: The instance name.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxEipTps: The max eip tps.</summary>
        /// <remarks>
        /// It is valid when support_eip is true.
        /// The minimum value is 128, with the step size 128.
        /// </remarks>
        [JsiiProperty(name: "maxEipTps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxEipTps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property orderNum: Set the number of instances to be created.</summary>
        [JsiiProperty(name: "orderNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrderNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: The billing method of the instance.</summary>
        /// <remarks>
        /// The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
        /// PrePaid: subscription
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

        /// <summary>Property period: The period.</summary>
        /// <remarks>
        /// Valid values: 1, 2, 3, 6, 12, 24, 36.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
        /// <remarks>
        /// Valid values:
        /// Month
        /// Year
        /// Default value: Month.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property supportEip: Whether to support EIP.</summary>
        /// <remarks>
        /// Valid values: true, false.
        /// </remarks>
        [JsiiProperty(name: "supportEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SupportEip
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property supportTracing: Whether to support tracing.</summary>
        /// <remarks>
        /// Valid values: true, false.
        /// </remarks>
        [JsiiProperty(name: "supportTracing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SupportTracing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tracingStorageTime: It is valid when support_tracing == tracing_true.</summary>
        /// <remarks>
        /// The retention period of message traces was set. Valid values: 3, 7, 15.
        /// If instance_type=vip, the valid values is 15.
        /// If instance_type!=vip, the valid values is 3, 7, 15.
        /// </remarks>
        [JsiiProperty(name: "tracingStorageTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TracingStorageTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::AMQP::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Amqp.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceType: The Instance Type.</summary>
            /// <remarks>
            /// Valid values: professional, enterprise, vip.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].</summary>
            /// <remarks>
            /// If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
            /// If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
            /// </remarks>
            [JsiiProperty(name: "maxTps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MaxTps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queueCapacity: The queue capacity.</summary>
            /// <remarks>
            /// If instance type is professional, the valid value is [50, 1000] with the step size 5.
            /// If instance type is enterprise, the valid value is [200, 6000] with the step size 100
            /// If instance type is vip, the valid value is [200, 80000] with the step size 100
            /// </remarks>
            [JsiiProperty(name: "queueCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueueCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storageSize: The storage size.</summary>
            /// <remarks>
            /// It is valid when instance_type is vip.
            /// If instance type is professional or enterprise, the valid value is 200.
            /// If instance type is vip, the valid value is [700, 2800] with the step size 100
            /// </remarks>
            [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceName: The instance name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxEipTps: The max eip tps.</summary>
            /// <remarks>
            /// It is valid when support_eip is true.
            /// The minimum value is 128, with the step size 128.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxEipTps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxEipTps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property orderNum: Set the number of instances to be created.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "orderNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrderNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payType: The billing method of the instance.</summary>
            /// <remarks>
            /// The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
            /// PrePaid: subscription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The period.</summary>
            /// <remarks>
            /// Valid values: 1, 2, 3, 6, 12, 24, 36.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
            /// <remarks>
            /// Valid values:
            /// Month
            /// Year
            /// Default value: Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property supportEip: Whether to support EIP.</summary>
            /// <remarks>
            /// Valid values: true, false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "supportEip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SupportEip
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property supportTracing: Whether to support tracing.</summary>
            /// <remarks>
            /// Valid values: true, false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "supportTracing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SupportTracing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tracingStorageTime: It is valid when support_tracing == tracing_true.</summary>
            /// <remarks>
            /// The retention period of message traces was set. Valid values: 3, 7, 15.
            /// If instance_type=vip, the valid values is 15.
            /// If instance_type!=vip, the valid values is 3, 7, 15.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tracingStorageTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TracingStorageTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
