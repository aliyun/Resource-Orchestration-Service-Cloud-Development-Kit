using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddospro
{
    /// <summary>Properties for defining a `ProInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.ProInstanceProps")]
    public interface IProInstanceProps
    {
        /// <summary>Property addressType: The IP version of the IP address.</summary>
        /// <remarks>
        /// Valid values: Ipv4、Ipv6
        /// </remarks>
        [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidth: The burstable protection bandwidth.</summary>
        /// <remarks>
        /// Unit: Gbit/s.
        /// The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property baseBandwidth: The basic protection bandwidth.</summary>
        /// <remarks>
        /// Unit: Gbit/s.
        /// Valid values: 30, 60, 100, 300, 400, 500, and 600.
        /// </remarks>
        [JsiiProperty(name: "baseBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BaseBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: disables the burstable clean bandwidth feature.
        /// 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
        /// 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
        /// </remarks>
        [JsiiProperty(name: "burstBandwidthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BurstBandwidthMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainCount: The number of domain names that you want to protect.</summary>
        /// <remarks>
        /// Valid values: 50 to 2000. The value must be a multiple of 10.
        /// </remarks>
        [JsiiProperty(name: "domainCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property edition: The mitigation plan of the instance.</summary>
        /// <remarks>
        /// Set the value to coop, which indicates the Profession mitigation plan.
        /// </remarks>
        [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Edition
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property functionVersion: The function plan of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: the Standard function plan
        /// 1: the Enhanced function plan.
        /// </remarks>
        [JsiiProperty(name: "functionVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FunctionVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property normalQps: The clean queries per second (QPS) provided by the instance.</summary>
        /// <remarks>
        /// Valid values: 3000 to 100000. The value must be a multiple of 100.
        /// </remarks>
        [JsiiProperty(name: "normalQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NormalQps
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.</summary>
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

        /// <summary>Property portCount: The number of ports that you want to protect.</summary>
        /// <remarks>
        /// Valid values: 50 to 400. The value must be a multiple of 5.
        /// </remarks>
        [JsiiProperty(name: "portCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PortCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceBandwidth: The clean bandwidth provided by the instance.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// Valid values: 100 to 5000. The value must be a multiple of 50.
        /// </remarks>
        [JsiiProperty(name: "serviceBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property servicePartner: The type of the protection line.</summary>
        /// <remarks>
        /// Set the value to coop-line-001, which indicates the default protection line.
        /// </remarks>
        [JsiiProperty(name: "servicePartner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServicePartner
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ddospro.RosProInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ddospro.RosProInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ProInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.ProInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddospro.IProInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressType: The IP version of the IP address.</summary>
            /// <remarks>
            /// Valid values: Ipv4、Ipv6
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidth: The burstable protection bandwidth.</summary>
            /// <remarks>
            /// Unit: Gbit/s.
            /// The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property baseBandwidth: The basic protection bandwidth.</summary>
            /// <remarks>
            /// Unit: Gbit/s.
            /// Valid values: 30, 60, 100, 300, 400, 500, and 600.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "baseBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BaseBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: disables the burstable clean bandwidth feature.
            /// 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
            /// 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "burstBandwidthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BurstBandwidthMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainCount: The number of domain names that you want to protect.</summary>
            /// <remarks>
            /// Valid values: 50 to 2000. The value must be a multiple of 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property edition: The mitigation plan of the instance.</summary>
            /// <remarks>
            /// Set the value to coop, which indicates the Profession mitigation plan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Edition
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property functionVersion: The function plan of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 0: the Standard function plan
            /// 1: the Enhanced function plan.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "functionVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FunctionVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property normalQps: The clean queries per second (QPS) provided by the instance.</summary>
            /// <remarks>
            /// Valid values: 3000 to 100000. The value must be a multiple of 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "normalQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NormalQps
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24 If PeriodUnit is Year, the valid range is 1, 2.</summary>
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

            /// <summary>Property portCount: The number of ports that you want to protect.</summary>
            /// <remarks>
            /// Valid values: 50 to 400. The value must be a multiple of 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "portCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PortCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceBandwidth: The clean bandwidth provided by the instance.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// Valid values: 100 to 5000. The value must be a multiple of 50.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property servicePartner: The type of the protection line.</summary>
            /// <remarks>
            /// Set the value to coop-line-001, which indicates the default protection line.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "servicePartner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServicePartner
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ddospro.RosProInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ddospro.RosProInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ddospro.RosProInstance.ITagsProperty[]?>();
            }
        }
    }
}
