using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway
{
    /// <summary>Properties for defining a `Gateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.GatewayProps")]
    public interface IGatewayProps
    {
        /// <summary>Property category: The category of the gateway.</summary>
        /// <remarks>
        /// The default value is <c>Cloud</c>.
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Category
        {
            get;
        }

        /// <summary>Property location: The location of the gateway.</summary>
        [JsiiProperty(name: "location", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Location
        {
            get;
        }

        /// <summary>Property name: The name of the gateway.</summary>
        /// <remarks>
        /// The name must be 60 characters in length. The name must
        /// start with a letter or a Chinese character. The name can contain letters, Chinese
        /// characters, digits, underscores (_), hyphens (-), and periods (.).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property type: The type of the gateway.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property description: The description of the gateway.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gatewayClass: If your gateway is deployed in a data center, which is an on-premises gateway, you can ignore this parameter.</summary>
        /// <remarks>
        /// If your gateway is deployed on the cloud, which is a cloud gateway, valid
        /// values are:
        ///
        /// <list type="bullet">
        /// <description>Basic: Basic</description>
        /// <description>Standard: Medium</description>
        /// <description>Enhanced: Enhanced</description>
        /// <description>Advanced: Performance</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "gatewayClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property postPaid: Valid values: - true: pay-as-you-go.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>false: subscription.
        /// Default value: false (subscription).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "postPaid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PostPaid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property publicNetworkBandwidth: &gt; - This parameter is supported only for cloud gateways.</summary>
        /// <remarks>
        /// You can ignore this
        /// parameter for on-premises gateways.
        ///
        ///     <list type="bullet">
        ///     <description>Configure this parameter only when you need to mount an OSS bucket across
        ///     regions.</description>
        ///     <description>If you specify 0 or do not specify this parameter, the default value is 5.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "publicNetworkBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PublicNetworkBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property releaseAfterExpiration: Specifies whether to release the gateway when the subscription expires.</summary>
        /// <remarks>
        /// Valid
        /// values:
        /// true: The gateway is automatically released.
        /// false: The billing method of the gateway is automatically changed to
        /// pay-as-you-go after the subscription expires.
        /// </remarks>
        [JsiiProperty(name: "releaseAfterExpiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReleaseAfterExpiration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceRegionId: The region ID of the resource.</summary>
        [JsiiProperty(name: "resourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secondaryVSwitchId: The ID of the secondary VSwitch.</summary>
        [JsiiProperty(name: "secondaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageBundleId: The ID of the gateway cluster.</summary>
        /// <remarks>
        /// You must specify this parameter if you do not
        /// specify ResourceRegionId.
        /// </remarks>
        [JsiiProperty(name: "storageBundleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageBundleId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property untrustedEnvId: The ID of the untrusted environment.</summary>
        [JsiiProperty(name: "untrustedEnvId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UntrustedEnvId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property untrustedEnvInstanceType: The instance type of the untrusted environment.</summary>
        [JsiiProperty(name: "untrustedEnvInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UntrustedEnvInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the virtual switch.</summary>
        /// <remarks>
        /// If your gateway is deployed in a data center, you
        /// can ignore this parameter.
        ///
        /// <list type="bullet">
        /// <description>The vSwitch must be in the same VPC as the ECS instance that you want to
        /// attach.</description>
        /// <description>If no gateway resources can be allocated in the zone where the vSwitch resides,
        /// create a vSwitch in another zone.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Gateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.GatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway.IGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property category: The category of the gateway.</summary>
            /// <remarks>
            /// The default value is <c>Cloud</c>.
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Category
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property location: The location of the gateway.</summary>
            [JsiiProperty(name: "location", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Location
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the gateway.</summary>
            /// <remarks>
            /// The name must be 60 characters in length. The name must
            /// start with a letter or a Chinese character. The name can contain letters, Chinese
            /// characters, digits, underscores (_), hyphens (-), and periods (.).
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The type of the gateway.</summary>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gatewayClass: If your gateway is deployed in a data center, which is an on-premises gateway, you can ignore this parameter.</summary>
            /// <remarks>
            /// If your gateway is deployed on the cloud, which is a cloud gateway, valid
            /// values are:
            ///
            /// <list type="bullet">
            /// <description>Basic: Basic</description>
            /// <description>Standard: Medium</description>
            /// <description>Enhanced: Enhanced</description>
            /// <description>Advanced: Performance</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property postPaid: Valid values: - true: pay-as-you-go.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>false: subscription.
            /// Default value: false (subscription).</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "postPaid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PostPaid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property publicNetworkBandwidth: &gt; - This parameter is supported only for cloud gateways.</summary>
            /// <remarks>
            /// You can ignore this
            /// parameter for on-premises gateways.
            ///
            ///     <list type="bullet">
            ///     <description>Configure this parameter only when you need to mount an OSS bucket across
            ///     regions.</description>
            ///     <description>If you specify 0 or do not specify this parameter, the default value is 5.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicNetworkBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PublicNetworkBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property releaseAfterExpiration: Specifies whether to release the gateway when the subscription expires.</summary>
            /// <remarks>
            /// Valid
            /// values:
            /// true: The gateway is automatically released.
            /// false: The billing method of the gateway is automatically changed to
            /// pay-as-you-go after the subscription expires.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "releaseAfterExpiration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReleaseAfterExpiration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceRegionId: The region ID of the resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secondaryVSwitchId: The ID of the secondary VSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondaryVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageBundleId: The ID of the gateway cluster.</summary>
            /// <remarks>
            /// You must specify this parameter if you do not
            /// specify ResourceRegionId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageBundleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageBundleId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property untrustedEnvId: The ID of the untrusted environment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "untrustedEnvId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UntrustedEnvId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property untrustedEnvInstanceType: The instance type of the untrusted environment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "untrustedEnvInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UntrustedEnvInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the virtual switch.</summary>
            /// <remarks>
            /// If your gateway is deployed in a data center, you
            /// can ignore this parameter.
            ///
            /// <list type="bullet">
            /// <description>The vSwitch must be in the same VPC as the ECS instance that you want to
            /// attach.</description>
            /// <description>If no gateway resources can be allocated in the zone where the vSwitch resides,
            /// create a vSwitch in another zone.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
