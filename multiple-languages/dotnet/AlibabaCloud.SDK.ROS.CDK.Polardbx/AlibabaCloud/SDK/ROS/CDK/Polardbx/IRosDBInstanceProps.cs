using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardbx
{
    /// <summary>Properties for defining a `RosDBInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.RosDBInstanceProps")]
    public interface IRosDBInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbNodeClass: The specification of the nodes in the instance you want to create.
        /// </remarks>
        [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbNodeClass
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeCount: The number of nodes in the instance you want to create.
        /// </remarks>
        [JsiiProperty(name: "dbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbNodeCount
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: engineVersion: The version of the database engine.
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EngineVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: primaryZone: The primary zone.
        /// </remarks>
        [JsiiProperty(name: "primaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimaryZone
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
        /// </remarks>
        [JsiiProperty(name: "topologyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopologyType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC to which the instance belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceDescription: The description of the instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
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

        /// <remarks>
        /// <strong>Property</strong>: period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of resource group
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
        /// <strong>Property</strong>: secondaryZone: The secondary zone.
        /// </remarks>
        [JsiiProperty(name: "secondaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryZone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpConfig: Instance whitelist configuration.
        /// </remarks>
        [JsiiProperty(name: "securityIpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardbx.RosDBInstance.SecurityIpConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tertiaryZone: The tertiary zone.
        /// </remarks>
        [JsiiProperty(name: "tertiaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TertiaryZone
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
        /// </remarks>
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UsedTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDBInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.RosDBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardbx.IRosDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbNodeClass: The specification of the nodes in the instance you want to create.
            /// </remarks>
            [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbNodeClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbNodeCount: The number of nodes in the instance you want to create.
            /// </remarks>
            [JsiiProperty(name: "dbNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: engineVersion: The version of the database engine.
            /// </remarks>
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryZone: The primary zone.
            /// </remarks>
            [JsiiProperty(name: "primaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimaryZone
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
            /// </remarks>
            [JsiiProperty(name: "topologyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopologyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC to which the instance belongs.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceDescription: The description of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of resource group
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secondaryZone: The secondary zone.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondaryZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIpConfig: Instance whitelist configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardbx.RosDBInstance.SecurityIpConfigProperty\"}]}}", isOptional: true)]
            public object? SecurityIpConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tertiaryZone: The tertiary zone.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tertiaryZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TertiaryZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UsedTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
