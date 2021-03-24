using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `ALIYUN::ENS::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB.</summary>
        /// <remarks>
        /// If you specify with your own image, make sure the system disk size bigger than image size.
        /// </remarks>
        [JsiiProperty(name: "dataDiskSize", typeJson: "{\"primitive\":\"number\"}")]
        double DataDiskSize
        {
            get;
        }

        /// <summary>Property ensRegionId: ENS Region Id.</summary>
        [JsiiProperty(name: "ensRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string EnsRegionId
        {
            get;
        }

        /// <summary>Property imageId: Image ID to create ens instance.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}")]
        string ImageId
        {
            get;
        }

        /// <summary>Property instanceType: ENS instance supported instance type, make sure it should be correct.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceType
        {
            get;
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}")]
        double Period
        {
            get;
        }

        /// <summary>Property quantity: number of instances to create.</summary>
        [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}")]
        double Quantity
        {
            get;
        }

        /// <summary>Property systemDiskSize: Disk size of the system disk.</summary>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}")]
        double SystemDiskSize
        {
            get;
        }

        /// <summary>Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenewPeriod: The time period of auto renew.</summary>
        /// <remarks>
        /// it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hostName: The hostname of the instance.</summary>
        [JsiiProperty(name: "hostName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HostName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceName: Instance name.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.</summary>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.</summary>
        [JsiiProperty(name: "ipType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? IpType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairName: SSH key pair name.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? KeyPairName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property password: Password of created ens instance.</summary>
        /// <remarks>
        /// Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Password
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property paymentType: Payment Type.only support value Subscription.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PaymentType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddress: Private IP for the instance created.</summary>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.</summary>
        /// <remarks>
        /// The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        /// </remarks>
        [JsiiProperty(name: "uniqueSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UniqueSuffix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userData: User data to pass to instance.</summary>
        /// <remarks>
        /// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiProperty(name: "userData", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? UserData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create ens instance.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ENS::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB.</summary>
            /// <remarks>
            /// If you specify with your own image, make sure the system disk size bigger than image size.
            /// </remarks>
            [JsiiProperty(name: "dataDiskSize", typeJson: "{\"primitive\":\"number\"}")]
            public double DataDiskSize
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property ensRegionId: ENS Region Id.</summary>
            [JsiiProperty(name: "ensRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string EnsRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property imageId: Image ID to create ens instance.</summary>
            [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}")]
            public string ImageId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceType: ENS instance supported instance type, make sure it should be correct.</summary>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property period: Prepaid time period.</summary>
            /// <remarks>
            /// Unit is month, it could be from 1 to 9 or 12. Default value is 1.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}")]
            public double Period
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property quantity: number of instances to create.</summary>
            [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}")]
            public double Quantity
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property systemDiskSize: Disk size of the system disk.</summary>
            [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}")]
            public double SystemDiskSize
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoRenew
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoRenewPeriod: The time period of auto renew.</summary>
            /// <remarks>
            /// it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? AutoRenewPeriod
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property hostName: The hostname of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "hostName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HostName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instanceName: Instance name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InternetChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IpType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property keyPairName: SSH key pair name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? KeyPairName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property password: Password of created ens instance.</summary>
            /// <remarks>
            /// Must contain at least 3 types of special character, lower character, upper character, number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Password
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property paymentType: Payment Type.only support value Subscription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PaymentType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property privateIpAddress: Private IP for the instance created.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrivateIpAddress
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.</summary>
            /// <remarks>
            /// The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uniqueSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UniqueSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userData: User data to pass to instance.</summary>
            /// <remarks>
            /// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? UserData
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: The vSwitch Id to create ens instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
