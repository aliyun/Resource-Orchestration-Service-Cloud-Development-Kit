using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `ALIYUN::ThreatDetection::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property paymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PaymentType
        {
            get;
        }

        /// <summary>Property versionCode: Select the security center version.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>level7: Antivirus Edition.</description>
        /// <description>level3: Premium version.</description>
        /// <description>level2: Enterprise Edition.</description>
        /// <description>level8: Ultimate.</description>
        /// <description>level10: Purchase value-added services only.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "versionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VersionCode
        {
            get;
        }

        /// <summary>Property buyNumber: Number of servers.</summary>
        [JsiiProperty(name: "buyNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BuyNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property containerImageScan: Container Image security scan.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,200000].
        ///
        ///     The step size is 20, that is, only multiples of 20 can be filled in.
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

        /// <summary>Property containerImageScanNew: Container Image security scan.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,200000].
        ///
        ///     The step size is 20, that is, only multiples of 20 can be filled in.
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

        /// <summary>Property honeypot: Number of cloud honeypot licenses.</summary>
        /// <remarks>
        /// Interval type, value interval:[20,500].
        ///
        ///     This module can only be purchased when honeypot_switch = 1, starting with 20.
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

        /// <summary>Property honeypotSwitch: Cloud honeypot.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>1: Yes.</description>
        /// <description>2: No.</description>
        /// </list>
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

        /// <summary>Property modifyType: Change configuration type, value - Upgrade: Upgrade.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Downgrade: Downgrade.</description>
        /// </list>
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

        /// <summary>Property period: Prepaid cycle.</summary>
        /// <remarks>
        /// The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
        ///
        ///     must be set when creating a prepaid instance.
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

        /// <summary>Property productType: Product type, only China station needs to be set to sas, international station does not need to set.</summary>
        [JsiiProperty(name: "productType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property raspCount: Number of application protection licenses.</summary>
        /// <remarks>
        /// Interval type, value interval:[1,100000000].
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

        /// <summary>Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Y: years.</description>
        /// </list>
        ///
        ///     Must be set when RenewalStatus = AutoRenewal.
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

        /// <summary>Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>ManualRenewal: manual renewal.
        /// Default ManualRenewal.</description>
        /// </list>
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

        /// <summary>Property renewPeriod: Automatic renewal cycle, in months.</summary>
        /// <remarks>
        ///     When <strong>RenewalStatus</strong> is set to <strong>AutoRenewal</strong>, it must be set.
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

        /// <summary>Property sasAntiRansomware: Anti-ransomware capacity.</summary>
        /// <remarks>
        /// Unit: GB. Interval type, value interval:[0,9999999999].
        ///
        ///     The step size is 10, that is, only multiples of 10 can be filled in.
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

        /// <summary>Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].</summary>
        /// <remarks>
        ///     You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
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

        /// <summary>Property sasCspmSwitch: Cloud platform configuration check switch.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>0: No.</description>
        /// <description>1: Yes.</description>
        /// </list>
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

        /// <summary>Property sasSc: Security screen.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>true: Yes.</description>
        /// <description>false: No.</description>
        /// </list>
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

        /// <summary>Property sasSdk: Number of malicious file detections.</summary>
        /// <remarks>
        /// Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        ///
        ///     This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
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

        /// <summary>Property sasSdkSwitch: Malicious file detection SDK.</summary>
        [JsiiProperty(name: "sasSdkSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SasSdkSwitch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sasSlsStorage: Log analysis storage capacity.</summary>
        /// <remarks>
        /// Unit: GB. Interval type, value interval:[0,600000].
        ///
        ///     The step size is 10, that is, only multiples of 10 can be filled in.
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

        /// <summary>Property sasWebguardBoolean: Web tamper-proof switch.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>0: No.</description>
        /// <description>1: Yes.</description>
        /// </list>
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

        /// <summary>Property sasWebguardOrderNum: Tamper-proof authorization number.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>0: No</description>
        /// <description>1: Yes.</description>
        /// </list>
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

        /// <summary>Property threatAnalysis: Threat Analysis log storage capacity.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,9999999999].
        ///
        ///     This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
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

        /// <summary>Property threatAnalysisSwitch: Threat analysis.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>0: No.</description>
        /// <description>1: Yes.</description>
        /// </list>
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

        /// <summary>Property vCore: Number of cores.</summary>
        [JsiiProperty(name: "vCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VCore
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].</summary>
        /// <remarks>
        ///     This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
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

        /// <summary>Property vulSwitch: Vulnerability fix switch.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>0: No.</description>
        /// <description>1: Yes.</description>
        /// </list>
        ///
        ///     When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
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
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property paymentType: The payment type of the resource.</summary>
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property versionCode: Select the security center version.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>level7: Antivirus Edition.</description>
            /// <description>level3: Premium version.</description>
            /// <description>level2: Enterprise Edition.</description>
            /// <description>level8: Ultimate.</description>
            /// <description>level10: Purchase value-added services only.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "versionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VersionCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property buyNumber: Number of servers.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "buyNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BuyNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containerImageScan: Container Image security scan.</summary>
            /// <remarks>
            /// Interval type, value interval:[0,200000].
            ///
            ///     The step size is 20, that is, only multiples of 20 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerImageScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerImageScan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containerImageScanNew: Container Image security scan.</summary>
            /// <remarks>
            /// Interval type, value interval:[0,200000].
            ///
            ///     The step size is 20, that is, only multiples of 20 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerImageScanNew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerImageScanNew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property honeypot: Number of cloud honeypot licenses.</summary>
            /// <remarks>
            /// Interval type, value interval:[20,500].
            ///
            ///     This module can only be purchased when honeypot_switch = 1, starting with 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "honeypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Honeypot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property honeypotSwitch: Cloud honeypot.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>1: Yes.</description>
            /// <description>2: No.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "honeypotSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HoneypotSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property modifyType: Change configuration type, value - Upgrade: Upgrade.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Downgrade: Downgrade.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "modifyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ModifyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Prepaid cycle.</summary>
            /// <remarks>
            /// The unit is Monthly, please enter an integer multiple of 12 for annual paid products.
            ///
            ///     must be set when creating a prepaid instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property productType: Product type, only China station needs to be set to sas, international station does not need to set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "productType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property raspCount: Number of application protection licenses.</summary>
            /// <remarks>
            /// Interval type, value interval:[1,100000000].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "raspCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RaspCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property renewalPeriodUnit: Automatic renewal period unit, value: - M: month.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Y: years.</description>
            /// </list>
            ///
            ///     Must be set when RenewalStatus = AutoRenewal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewalPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewalPeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property renewalStatus: Automatic renewal status, value: - AutoRenewal: automatic renewal.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>ManualRenewal: manual renewal.
            /// Default ManualRenewal.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewalStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property renewPeriod: Automatic renewal cycle, in months.</summary>
            /// <remarks>
            ///     When <strong>RenewalStatus</strong> is set to <strong>AutoRenewal</strong>, it must be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "renewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasAntiRansomware: Anti-ransomware capacity.</summary>
            /// <remarks>
            /// Unit: GB. Interval type, value interval:[0,9999999999].
            ///
            ///     The step size is 10, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasAntiRansomware", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasAntiRansomware
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].</summary>
            /// <remarks>
            ///     You must have sas_cspm_switch = 1 to purchase this module. The step size is 100, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasCspm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasCspm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasCspmSwitch: Cloud platform configuration check switch.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>0: No.</description>
            /// <description>1: Yes.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasCspmSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasCspmSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasSc: Security screen.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>true: Yes.</description>
            /// <description>false: No.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasSc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasSdk: Number of malicious file detections.</summary>
            /// <remarks>
            /// Unit: 10,000 times. Interval type, value interval:[10,9999999999].
            ///
            ///     This module can only be purchased when sas_sdk_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasSdk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasSdkSwitch: Malicious file detection SDK.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sasSdkSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasSdkSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasSlsStorage: Log analysis storage capacity.</summary>
            /// <remarks>
            /// Unit: GB. Interval type, value interval:[0,600000].
            ///
            ///     The step size is 10, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasSlsStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasSlsStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasWebguardBoolean: Web tamper-proof switch.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>0: No.</description>
            /// <description>1: Yes.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasWebguardBoolean", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasWebguardBoolean
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sasWebguardOrderNum: Tamper-proof authorization number.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>0: No</description>
            /// <description>1: Yes.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sasWebguardOrderNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SasWebguardOrderNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property threatAnalysis: Threat Analysis log storage capacity.</summary>
            /// <remarks>
            /// Interval type, value interval:[0,9999999999].
            ///
            ///     This module can only be purchased when Threat_analysis_switch = 1. The step size is 10, that is, only multiples of 10 can be filled in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "threatAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThreatAnalysis
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property threatAnalysisSwitch: Threat analysis.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>0: No.</description>
            /// <description>1: Yes.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "threatAnalysisSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThreatAnalysisSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vCore: Number of cores.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VCore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vulCount: Vulnerability repair times, interval type, value range:[20,100000000].</summary>
            /// <remarks>
            ///     This module can only be purchased when vul_switch = 1. Only when the version_code value is level7 or level10. other versions do not need to be purchased separately.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vulCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VulCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vulSwitch: Vulnerability fix switch.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>0: No.</description>
            /// <description>1: Yes.</description>
            /// </list>
            ///
            ///     When the value of version_code is level7 or level10, the purchase is allowed. Other versions do not need to be purchased separately.
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
