using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property productVersion: KMS Instance commodity type (software\/software-small\/hardware\/hardware-small).</summary>
        [JsiiProperty(name: "productVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductVersion
        {
            get;
        }

        /// <summary>Property connection:.</summary>
        [JsiiProperty(name: "connection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kms.RosInstance.ConnectionProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Connection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: Billing method of the KMS instance, default to Subscription.</summary>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyNum: Maximum number of stored keys.</summary>
        /// <remarks>
        /// It is required when the InstanceCharge is Subscription.
        /// </remarks>
        [JsiiProperty(name: "keyNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property log: Whether to enable log.</summary>
        [JsiiProperty(name: "log", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Log
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logStorage: Log storage.</summary>
        [JsiiProperty(name: "logStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogStorage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription duration of the KMS instance.</summary>
        /// <remarks>
        /// If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
        /// If PeriodUnit is Year, the valid range is 1, 2, 3
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

        /// <summary>Property renewPeriod: Automatic renewal period, in months.</summary>
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).</summary>
        [JsiiProperty(name: "renewStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secretNum: Maximum number of secrets.</summary>
        /// <remarks>
        /// It is required when the InstanceCharge is Subscription.
        /// </remarks>
        [JsiiProperty(name: "secretNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spec: The computation performance level of the KMS instance.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Spec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcNum: The number of managed accesses.</summary>
        /// <remarks>
        /// The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
        /// </remarks>
        [JsiiProperty(name: "vpcNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property productVersion: KMS Instance commodity type (software\/software-small\/hardware\/hardware-small).</summary>
            [JsiiProperty(name: "productVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property connection:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-kms.RosInstance.ConnectionProperty\"}]}}", isOptional: true)]
            public object? Connection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: Billing method of the KMS instance, default to Subscription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyNum: Maximum number of stored keys.</summary>
            /// <remarks>
            /// It is required when the InstanceCharge is Subscription.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property log: Whether to enable log.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "log", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Log
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logStorage: Log storage.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription duration of the KMS instance.</summary>
            /// <remarks>
            /// If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
            /// If PeriodUnit is Year, the valid range is 1, 2, 3
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

            /// <summary>Property renewPeriod: Automatic renewal period, in months.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "renewStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secretNum: Maximum number of secrets.</summary>
            /// <remarks>
            /// It is required when the InstanceCharge is Subscription.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spec: The computation performance level of the KMS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Spec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcNum: The number of managed accesses.</summary>
            /// <remarks>
            /// The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcNum
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
