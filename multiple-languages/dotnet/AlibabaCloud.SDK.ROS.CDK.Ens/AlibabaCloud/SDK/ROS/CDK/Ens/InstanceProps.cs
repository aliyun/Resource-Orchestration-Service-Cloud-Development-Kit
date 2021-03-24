using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ENS::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ens.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Ens.IInstanceProps
    {
        /// <summary>Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB.</summary>
        /// <remarks>
        /// If you specify with your own image, make sure the system disk size bigger than image size.
        /// </remarks>
        [JsiiProperty(name: "dataDiskSize", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double DataDiskSize
        {
            get;
            set;
        }

        /// <summary>Property ensRegionId: ENS Region Id.</summary>
        [JsiiProperty(name: "ensRegionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string EnsRegionId
        {
            get;
            set;
        }

        /// <summary>Property imageId: Image ID to create ens instance.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ImageId
        {
            get;
            set;
        }

        /// <summary>Property instanceType: ENS instance supported instance type, make sure it should be correct.</summary>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceType
        {
            get;
            set;
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Period
        {
            get;
            set;
        }

        /// <summary>Property quantity: number of instances to create.</summary>
        [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Quantity
        {
            get;
            set;
        }

        /// <summary>Property systemDiskSize: Disk size of the system disk.</summary>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double SystemDiskSize
        {
            get;
            set;
        }

        /// <summary>Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AutoRenew
        {
            get;
            set;
        }

        /// <summary>Property autoRenewPeriod: The time period of auto renew.</summary>
        /// <remarks>
        /// it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? AutoRenewPeriod
        {
            get;
            set;
        }

        /// <summary>Property hostName: The hostname of the instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "hostName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HostName
        {
            get;
            set;
        }

        /// <summary>Property instanceName: Instance name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceName
        {
            get;
            set;
        }

        /// <summary>Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <summary>Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "ipType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? IpType
        {
            get;
            set;
        }

        /// <summary>Property keyPairName: SSH key pair name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KeyPairName
        {
            get;
            set;
        }

        /// <summary>Property password: Password of created ens instance.</summary>
        /// <remarks>
        /// Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <summary>Property paymentType: Payment Type.only support value Subscription.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "paymentType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PaymentType
        {
            get;
            set;
        }

        /// <summary>Property privateIpAddress: Private IP for the instance created.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateIpAddress
        {
            get;
            set;
        }

        /// <summary>Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.</summary>
        /// <remarks>
        /// The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "uniqueSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? UniqueSuffix
        {
            get;
            set;
        }

        /// <summary>Property userData: User data to pass to instance.</summary>
        /// <remarks>
        /// [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userData", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? UserData
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create ens instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }
    }
}
