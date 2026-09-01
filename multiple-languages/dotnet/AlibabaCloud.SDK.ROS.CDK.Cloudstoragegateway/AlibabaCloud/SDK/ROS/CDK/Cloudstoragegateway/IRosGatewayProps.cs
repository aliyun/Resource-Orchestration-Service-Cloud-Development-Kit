using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway
{
    /// <summary>Properties for defining a `RosGateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.RosGatewayProps")]
    public interface IRosGatewayProps
    {
        /// <remarks>
        /// <strong>Property</strong>: category: The category of the gateway. The default value is `Cloud`.
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Category
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: location: The location of the gateway.
        /// </remarks>
        [JsiiProperty(name: "location", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Location
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the gateway. The name must be 60 characters in length. The name must
        /// start with a letter or a Chinese character. The name can contain letters, Chinese
        /// characters, digits, underscores (_), hyphens (-), and periods (.).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the gateway.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the gateway.
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

        /// <remarks>
        /// <strong>Property</strong>: gatewayClass: If your gateway is deployed in a data center, which is an on-premises gateway,
        /// you can ignore this parameter.
        /// If your gateway is deployed on the cloud, which is a cloud gateway, valid
        /// values are:
        /// - Basic: Basic
        /// - Standard: Medium
        /// - Enhanced: Enhanced
        /// - Advanced: Performance
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

        /// <remarks>
        /// <strong>Property</strong>: postPaid: Valid values:
        /// - true: pay-as-you-go.
        /// - false: subscription.
        /// Default value: false (subscription).
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

        /// <remarks>
        /// <strong>Property</strong>: publicNetworkBandwidth: > - This parameter is supported only for cloud gateways. You can ignore this
        /// parameter for on-premises gateways.
        /// > - Configure this parameter only when you need to mount an OSS bucket across
        /// regions.
        /// > - If you specify 0 or do not specify this parameter, the default value is 5.
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

        /// <remarks>
        /// <strong>Property</strong>: releaseAfterExpiration: Specifies whether to release the gateway when the subscription expires. Valid
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

        /// <remarks>
        /// <strong>Property</strong>: resourceRegionId: The region ID of the resource.
        /// </remarks>
        [JsiiProperty(name: "resourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryVSwitchId: The ID of the secondary VSwitch.
        /// </remarks>
        [JsiiProperty(name: "secondaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: storageBundleId: The ID of the gateway cluster. You must specify this parameter if you do not
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

        /// <remarks>
        /// <strong>Property</strong>: untrustedEnvId: The ID of the untrusted environment.
        /// </remarks>
        [JsiiProperty(name: "untrustedEnvId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UntrustedEnvId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: untrustedEnvInstanceType: The instance type of the untrusted environment.
        /// </remarks>
        [JsiiProperty(name: "untrustedEnvInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UntrustedEnvInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the virtual switch. If your gateway is deployed in a data center, you
        /// can ignore this parameter.
        /// - The vSwitch must be in the same VPC as the ECS instance that you want to
        /// attach.
        /// - If no gateway resources can be allocated in the zone where the vSwitch resides,
        /// create a vSwitch in another zone.
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

        /// <summary>Properties for defining a `RosGateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.RosGatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway.IRosGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: category: The category of the gateway. The default value is `Cloud`.
            /// </remarks>
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Category
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: location: The location of the gateway.
            /// </remarks>
            [JsiiProperty(name: "location", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Location
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the gateway. The name must be 60 characters in length. The name must
            /// start with a letter or a Chinese character. The name can contain letters, Chinese
            /// characters, digits, underscores (_), hyphens (-), and periods (.).
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the gateway.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the gateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: gatewayClass: If your gateway is deployed in a data center, which is an on-premises gateway,
            /// you can ignore this parameter.
            /// If your gateway is deployed on the cloud, which is a cloud gateway, valid
            /// values are:
            /// - Basic: Basic
            /// - Standard: Medium
            /// - Enhanced: Enhanced
            /// - Advanced: Performance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: postPaid: Valid values:
            /// - true: pay-as-you-go.
            /// - false: subscription.
            /// Default value: false (subscription).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "postPaid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PostPaid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: publicNetworkBandwidth: > - This parameter is supported only for cloud gateways. You can ignore this
            /// parameter for on-premises gateways.
            /// > - Configure this parameter only when you need to mount an OSS bucket across
            /// regions.
            /// > - If you specify 0 or do not specify this parameter, the default value is 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicNetworkBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PublicNetworkBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: releaseAfterExpiration: Specifies whether to release the gateway when the subscription expires. Valid
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

            /// <remarks>
            /// <strong>Property</strong>: resourceRegionId: The region ID of the resource.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secondaryVSwitchId: The ID of the secondary VSwitch.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondaryVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: storageBundleId: The ID of the gateway cluster. You must specify this parameter if you do not
            /// specify ResourceRegionId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageBundleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageBundleId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: untrustedEnvId: The ID of the untrusted environment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "untrustedEnvId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UntrustedEnvId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: untrustedEnvInstanceType: The instance type of the untrusted environment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "untrustedEnvInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UntrustedEnvInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the virtual switch. If your gateway is deployed in a data center, you
            /// can ignore this parameter.
            /// - The vSwitch must be in the same VPC as the ECS instance that you want to
            /// attach.
            /// - If no gateway resources can be allocated in the zone where the vSwitch resides,
            /// create a vSwitch in another zone.
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
