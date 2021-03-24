using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>A ROS template type:  `ALIYUN::ENS::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ens.RosInstance), fullyQualifiedName: "@alicloud/ros-cdk-ens.RosInstance", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ens.RosInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosInstance : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ENS::Instance`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ens.IRosInstanceProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ens.RosInstance))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        /// </remarks>
        [JsiiProperty(name: "attrAutoRenew", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoRenew
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "attrAutoRenewPeriod", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoRenewPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        /// </remarks>
        [JsiiProperty(name: "attrDataDiskSize", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDataDiskSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: EnsRegionId: ENS Region Id.
        /// </remarks>
        [JsiiProperty(name: "attrEnsRegionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEnsRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: HostName: The hostname of the instance.
        /// </remarks>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHostName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ImageId: Image ID to create ens instance.
        /// </remarks>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrImageId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: InstanceId.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceName: Instance name
        /// </remarks>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceType: ENS instance supported instance type, make sure it should be correct.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        /// </remarks>
        [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        /// </remarks>
        [JsiiProperty(name: "attrIpType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIpType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: KeyPairName: SSH key pair name.
        /// </remarks>
        [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrKeyPairName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PaymentType: Payment Type.only support value Subscription.
        /// </remarks>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "attrPeriod", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PrivateIpAddress: Private IP for the instance created.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIpAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PrivateIps: Private IP
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PublicIps: Public IP
        /// </remarks>
        [JsiiProperty(name: "attrPublicIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Quantity: number of instances to create.
        /// </remarks>
        [JsiiProperty(name: "attrQuantity", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrQuantity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: SystemDiskSize: Disk size of the system disk.
        /// </remarks>
        [JsiiProperty(name: "attrSystemDiskSize", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSystemDiskSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        /// </remarks>
        [JsiiProperty(name: "attrUniqueSuffix", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUniqueSuffix
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiProperty(name: "attrUserData", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrUserData
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VSwitchId: The vSwitch Id to create ens instance.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        /// </remarks>
        [JsiiProperty(name: "dataDiskSize", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double DataDiskSize
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ensRegionId: ENS Region Id.
        /// </remarks>
        [JsiiProperty(name: "ensRegionId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string EnsRegionId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: imageId: Image ID to create ens instance.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ImageId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: ENS instance supported instance type, make sure it should be correct.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string InstanceType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double Period
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: quantity: number of instances to create.
        /// </remarks>
        [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double Quantity
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: systemDiskSize: Disk size of the system disk.
        /// </remarks>
        [JsiiProperty(name: "systemDiskSize", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double SystemDiskSize
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AutoRenew
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? AutoRenewPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: hostName: The hostname of the instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "hostName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? HostName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: Instance name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InternetChargeType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? IpType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: SSH key pair name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? KeyPairName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Password
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: paymentType: Payment Type.only support value Subscription.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "paymentType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PaymentType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: Private IP for the instance created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PrivateIpAddress
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "uniqueSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? UniqueSuffix
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userData", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? UserData
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch Id to create ens instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
    }
}
