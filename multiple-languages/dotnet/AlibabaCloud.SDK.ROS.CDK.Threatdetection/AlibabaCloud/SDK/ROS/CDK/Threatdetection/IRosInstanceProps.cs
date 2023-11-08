using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `ALIYUN::ThreatDetection::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: paymentType: The payment type of the resource.
        /// </remarks>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PaymentType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: versionCode: Select the security center version. Value:
        /// - level7: Antivirus Edition.
        /// - level3: Premium version.
        /// - level2: Enterprise Edition.
        /// - level8: Ultimate.
        /// - level10: Purchase value-added services only.
        /// </remarks>
        [JsiiProperty(name: "versionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VersionCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: buyNumber: Number of servers.
        /// </remarks>
        [JsiiProperty(name: "buyNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BuyNumber
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
        /// > The step size is 20, that is, only multiples of 20 can be filled in.
        /// </remarks>
        [JsiiProperty(name: "containerImageScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerImageScan
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
        /// > The step size is 20, that is, only multiples of 20 can be filled in.
        /// </remarks>
        [JsiiProperty(name: "containerImageScanNew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerImageScanNew
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
        /// > This module can only be purchased when honeypot_switch = 1, starting with 20.
        /// </remarks>
        [JsiiProperty(name: "honeypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Honeypot
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: honeypotSwitch: Cloud honeypot. Value:
        /// - 1: Yes.
        /// - 2: No.
        /// </remarks>
        [JsiiProperty(name: "honeypotSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HoneypotSwitch
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: modifyType: Change configuration type, value
        /// - Upgrade: Upgrade.
        /// - Downgrade: Downgrade.
        /// </remarks>
        [JsiiProperty(name: "modifyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModifyType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        /// > must be set when creating a prepaid instance.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: productType: Product type, only China station needs to be set to sas, international station does not need to set.
        /// </remarks>
        [JsiiProperty(name: "productType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
        /// </remarks>
        [JsiiProperty(name: "raspCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RaspCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: renewalPeriodUnit: Automatic renewal period unit, value:
        /// - M: month.
        /// - Y: years.
        /// > Must be set when RenewalStatus = AutoRenewal.
        /// </remarks>
        [JsiiProperty(name: "renewalPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewalPeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: renewalStatus: Automatic renewal status, value:
        /// - AutoRenewal: automatic renewal.
        /// - ManualRenewal: manual renewal.
        /// Default ManualRenewal.
        /// </remarks>
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewalStatus
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: renewPeriod: Automatic renewal cycle, in months.
        /// > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
        /// </remarks>
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
        /// > The step size is 10, that is, only multiples of 10 can be filled in.
        /// </remarks>
        [JsiiProperty(name: "sasAntiRansomware", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasAntiRansomware
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
        /// > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
        /// </remarks>
        [JsiiProperty(name: "sasCspm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasCspm
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasCspmSwitch: Cloud platform configuration check switch. Value:
        /// - 0: No.
        /// - 1: Yes.
        /// </remarks>
        [JsiiProperty(name: "sasCspmSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasCspmSwitch
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasSc: Security screen. Value:
        /// - true: Yes.
        /// - false: No.
        /// </remarks>
        [JsiiProperty(name: "sasSc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasSc
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        /// > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        /// </remarks>
        [JsiiProperty(name: "sasSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasSdk
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasSdkSwitch: Malicious file detection SDK.
        /// </remarks>
        [JsiiProperty(name: "sasSdkSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasSdkSwitch
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
        /// > The step size is 10, that is, only multiples of 10 can be filled in.
        /// </remarks>
        [JsiiProperty(name: "sasSlsStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasSlsStorage
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasWebguardBoolean: Web tamper-proof switch. Value:
        /// - 0: No.
        /// - 1: Yes.
        /// </remarks>
        [JsiiProperty(name: "sasWebguardBoolean", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasWebguardBoolean
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sasWebguardOrderNum: Tamper-proof authorization number. Value:
        /// - 0: No
        /// - 1: Yes.
        /// </remarks>
        [JsiiProperty(name: "sasWebguardOrderNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasWebguardOrderNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
        /// > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
        /// </remarks>
        [JsiiProperty(name: "threatAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThreatAnalysis
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: threatAnalysisSwitch: Threat analysis. Value:
        /// - 0: No.
        /// - 1: Yes.
        /// </remarks>
        [JsiiProperty(name: "threatAnalysisSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThreatAnalysisSwitch
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vCore: Number of cores.
        /// </remarks>
        [JsiiProperty(name: "vCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VCore
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
        /// > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
        /// </remarks>
        [JsiiProperty(name: "vulCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VulCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vulSwitch: Vulnerability fix switch. Value:
        /// - 0: No.
        /// - 1: Yes.
        /// > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
        /// </remarks>
        [JsiiProperty(name: "vulSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VulSwitch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ThreatDetection::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: paymentType: The payment type of the resource.
            /// </remarks>
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: versionCode: Select the security center version. Value:
            /// - level7: Antivirus Edition.
            /// - level3: Premium version.
            /// - level2: Enterprise Edition.
            /// - level8: Ultimate.
            /// - level10: Purchase value-added services only.
            /// </remarks>
            [JsiiProperty(name: "versionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VersionCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: buyNumber: Number of servers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "buyNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BuyNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: containerImageScan: Container Image security scan. Interval type, value interval:[0,200000].
            /// > The step size is 20, that is, only multiples of 20 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerImageScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerImageScan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: containerImageScanNew: Container Image security scan. Interval type, value interval:[0,200000].
            /// > The step size is 20, that is, only multiples of 20 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerImageScanNew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerImageScanNew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: honeypot: Number of cloud honeypot licenses. Interval type, value interval:[20,500].
            /// > This module can only be purchased when honeypot_switch = 1, starting with 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "honeypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Honeypot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: honeypotSwitch: Cloud honeypot. Value:
            /// - 1: Yes.
            /// - 2: No.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "honeypotSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HoneypotSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: modifyType: Change configuration type, value
            /// - Upgrade: Upgrade.
            /// - Downgrade: Downgrade.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "modifyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ModifyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: Prepaid cycle. The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
            /// > must be set when creating a prepaid instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: productType: Product type, only China station needs to be set to sas, international station does not need to set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "productType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: raspCount: Number of application protection licenses. Interval type, value interval:[1,100000000].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "raspCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RaspCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: renewalPeriodUnit: Automatic renewal period unit, value:
            /// - M: month.
            /// - Y: years.
            /// > Must be set when RenewalStatus = AutoRenewal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewalPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewalPeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: renewalStatus: Automatic renewal status, value:
            /// - AutoRenewal: automatic renewal.
            /// - ManualRenewal: manual renewal.
            /// Default ManualRenewal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewalStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: renewPeriod: Automatic renewal cycle, in months.
            /// > When **RenewalStatus** is set to **AutoRenewal**, it must be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasAntiRansomware: Anti-ransomware capacity. Unit: GB. Interval type, value interval:[0,9999999999].
            /// > The step size is 10, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasAntiRansomware", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasAntiRansomware
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].
            /// > You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasCspm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasCspm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasCspmSwitch: Cloud platform configuration check switch. Value:
            /// - 0: No.
            /// - 1: Yes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasCspmSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasCspmSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSc: Security screen. Value:
            /// - true: Yes.
            /// - false: No.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasSc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSdk: Number of malicious file detections. Unit: 10,000 times. Interval type, value interval:[10,9999999999].
            /// > This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasSdk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSdkSwitch: Malicious file detection SDK.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSdkSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasSdkSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasSlsStorage: Log analysis storage capacity. Unit: GB. Interval type, value interval:[0,600000].
            /// > The step size is 10, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSlsStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasSlsStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasWebguardBoolean: Web tamper-proof switch. Value:
            /// - 0: No.
            /// - 1: Yes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasWebguardBoolean", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasWebguardBoolean
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sasWebguardOrderNum: Tamper-proof authorization number. Value:
            /// - 0: No
            /// - 1: Yes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasWebguardOrderNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasWebguardOrderNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: threatAnalysis: Threat Analysis log storage capacity. Interval type, value interval:[0,9999999999].
            /// > This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "threatAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThreatAnalysis
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: threatAnalysisSwitch: Threat analysis. Value:
            /// - 0: No.
            /// - 1: Yes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "threatAnalysisSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThreatAnalysisSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vCore: Number of cores.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VCore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vulCount: Vulnerability repair times, interval type, value range:[20,100000000].
            /// > This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vulCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VulCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vulSwitch: Vulnerability fix switch. Value:
            /// - 0: No.
            /// - 1: Yes.
            /// > When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vulSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VulSwitch
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
