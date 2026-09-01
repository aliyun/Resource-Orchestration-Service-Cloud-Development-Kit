using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `AnycastEIP`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAnycastEIPProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.AnycastEIPProps")]
    public interface IAnycastEIPProps
    {
        /// <summary>Property bandwidth: The peak bandwidth of the Anycast EIP instance.</summary>
        /// <remarks>
        /// Unit: Mbps.
        /// Valid values: 200 to 1000.
        /// Default value: 1000.
        ///
        ///     The peak bandwidth is for reference only and is not a guaranteed value. It
        ///     serves as the upper limit for bandwidth.
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

        /// <summary>Property description: The description of the Anycast EIP instance.</summary>
        /// <remarks>
        /// The description must be 0 to 256 characters in length and cannot start with
        /// <c>http:\/\/</c> or <c>https:\/\/</c>.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: The billing method of the Anycast EIP instance.</summary>
        /// <remarks>
        /// Set the value to PostPaid. This value specifies the pay-as-you-go billing method.
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The metering method for Internet data transfer.</summary>
        /// <remarks>
        /// Set the value to PayByTraffic. This value specifies the pay-by-data-transfer
        /// metering method.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the Anycast EIP instance.</summary>
        /// <remarks>
        /// The name must be 0 to 128 characters in length. It must start with a letter or a
        /// Chinese character and can contain digits, underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
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

        /// <summary>Property serviceLocation: Anycast EIP instance access area.</summary>
        [JsiiProperty(name: "serviceLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceLocation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AnycastEIP`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAnycastEIPProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.AnycastEIPProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: The peak bandwidth of the Anycast EIP instance.</summary>
            /// <remarks>
            /// Unit: Mbps.
            /// Valid values: 200 to 1000.
            /// Default value: 1000.
            ///
            ///     The peak bandwidth is for reference only and is not a guaranteed value. It
            ///     serves as the upper limit for bandwidth.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the Anycast EIP instance.</summary>
            /// <remarks>
            /// The description must be 0 to 256 characters in length and cannot start with
            /// <c>http:\/\/</c> or <c>https:\/\/</c>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The billing method of the Anycast EIP instance.</summary>
            /// <remarks>
            /// Set the value to PostPaid. This value specifies the pay-as-you-go billing method.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The metering method for Internet data transfer.</summary>
            /// <remarks>
            /// Set the value to PayByTraffic. This value specifies the pay-by-data-transfer
            /// metering method.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the Anycast EIP instance.</summary>
            /// <remarks>
            /// The name must be 0 to 128 characters in length. It must start with a letter or a
            /// Chinese character and can contain digits, underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
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

            /// <summary>Property serviceLocation: Anycast EIP instance access area.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceLocation
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
