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

        /// <summary>Property gatewayClass: The class of the gateway.</summary>
        [JsiiProperty(name: "gatewayClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GatewayClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property postPaid: Whether the gateway is pay-as-you-go.</summary>
        [JsiiProperty(name: "postPaid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PostPaid
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property publicNetworkBandwidth: The public network bandwidth of the gateway.</summary>
        [JsiiProperty(name: "publicNetworkBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PublicNetworkBandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property releaseAfterExpiration: Whether to release the gateway after expiration.</summary>
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

        /// <summary>Property storageBundleId: The ID of the storage bundle.</summary>
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

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
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

            /// <summary>Property gatewayClass: The class of the gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gatewayClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GatewayClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property postPaid: Whether the gateway is pay-as-you-go.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "postPaid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PostPaid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property publicNetworkBandwidth: The public network bandwidth of the gateway.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "publicNetworkBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PublicNetworkBandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property releaseAfterExpiration: Whether to release the gateway after expiration.</summary>
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

            /// <summary>Property storageBundleId: The ID of the storage bundle.</summary>
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

            /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
