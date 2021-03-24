using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `ALIYUN::MONGODB::ServerlessInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IServerlessInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ServerlessInstanceProps")]
    public interface IServerlessInstanceProps
    {
        /// <summary>Property dbInstanceStorage: Database instance storage size.</summary>
        /// <remarks>
        /// MongoDB is [1,10], increased every 1 GB, Unit in GB
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}")]
        double DbInstanceStorage
        {
            get;
        }

        /// <summary>Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.</summary>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Indicates whether automatic renewal is enabled for the instance.</summary>
        /// <remarks>
        /// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
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

        /// <summary>Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.</summary>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineVersion: Database instance version.Support 4.2.</summary>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EngineVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: The instance network type.</summary>
        /// <remarks>
        /// Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodPriceType: Charge period for created instance.</summary>
        [JsiiProperty(name: "periodPriceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PeriodPriceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpArray: Security ips to add or remove.</summary>
        [JsiiProperty(name: "securityIpArray", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityIpArray
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageEngine: Database storage engine.Support WiredTiger.</summary>
        [JsiiProperty(name: "storageEngine", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? StorageEngine
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The VPC id to create mongodb instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create mongodb instance.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: On which zone to create the instance.</summary>
        /// <remarks>
        /// If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::MONGODB::ServerlessInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServerlessInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ServerlessInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IServerlessInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceStorage: Database instance storage size.</summary>
            /// <remarks>
            /// MongoDB is [1,10], increased every 1 GB, Unit in GB
            /// </remarks>
            [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}")]
            public double DbInstanceStorage
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountPassword
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoRenew: Indicates whether automatic renewal is enabled for the instance.</summary>
            /// <remarks>
            /// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbInstanceDescription
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property engineVersion: Database instance version.Support 4.2.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EngineVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property networkType: The instance network type.</summary>
            /// <remarks>
            /// Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NetworkType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property periodPriceType: Charge period for created instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "periodPriceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PeriodPriceType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityIpArray: Security ips to add or remove.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpArray", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityIpArray
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property storageEngine: Database storage engine.Support WiredTiger.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageEngine", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? StorageEngine
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vpcId: The VPC id to create mongodb instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: The vSwitch Id to create mongodb instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property zoneId: On which zone to create the instance.</summary>
            /// <remarks>
            /// If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
