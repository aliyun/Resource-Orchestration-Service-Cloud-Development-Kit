using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sas
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-sas.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Period
        {
            get;
        }

        /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
        /// <remarks>
        /// Valid values:
        /// Month
        /// Year
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeriodUnit
        {
            get;
        }

        /// <summary>Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business.</summary>
        /// <remarks>
        /// We recommend that you configure a data protection capacity of 50GB for each server.
        /// </remarks>
        [JsiiProperty(name: "antiRansomware", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AntiRansomware
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.</summary>
        /// <remarks>
        /// Note:
        /// </remarks>
        [JsiiProperty(name: "antiRansomwareManageService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AntiRansomwareManageService
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: Whether to auto pay the bill.Default: True.</summary>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Whether to auto renew the prepay instance.Default: False.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner.</summary>
        /// <remarks>
        /// You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
        /// </remarks>
        [JsiiProperty(name: "cloudHoneypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CloudHoneypot
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.</summary>
        [JsiiProperty(name: "configurationAssessment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConfigurationAssessment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property containerImageScan: Security Center provides the container image scan feature to protect containers.</summary>
        /// <remarks>
        /// Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
        /// </remarks>
        [JsiiProperty(name: "containerImageScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerImageScan
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property edition: The version of Security center.</summary>
        [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Edition
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server.</summary>
        /// <remarks>
        /// Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
        /// </remarks>
        [JsiiProperty(name: "logAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogAnalysis
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.</summary>
        /// <remarks>
        /// This ensures the security of the running environment of your cloud services.
        /// </remarks>
        [JsiiProperty(name: "maliciousFileDetectionSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaliciousFileDetectionSdk
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protectedServers: Authorization is the same as the number of servers you have.</summary>
        [JsiiProperty(name: "protectedServers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtectedServers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime.</summary>
        /// <remarks>
        /// The feature supports simple and convenient O&amp;M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
        /// </remarks>
        [JsiiProperty(name: "quotaForApplicationProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QuotaForApplicationProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property quotaForCloudHoneypot:.</summary>
        [JsiiProperty(name: "quotaForCloudHoneypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QuotaForCloudHoneypot
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property quotaForConfigurationAssessment:.</summary>
        [JsiiProperty(name: "quotaForConfigurationAssessment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QuotaForConfigurationAssessment
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property quotaForMaliciousFileDetectionSdk:.</summary>
        [JsiiProperty(name: "quotaForMaliciousFileDetectionSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QuotaForMaliciousFileDetectionSdk
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month.</summary>
        /// <remarks>
        /// The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
        /// </remarks>
        [JsiiProperty(name: "quotaForVulnerabilityFixing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QuotaForVulnerabilityFixing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property quotaForWebTamperProofing:.</summary>
        [JsiiProperty(name: "quotaForWebTamperProofing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QuotaForWebTamperProofing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner.</summary>
        /// <remarks>
        /// The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
        /// </remarks>
        [JsiiProperty(name: "threatAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThreatAnalysis
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property threatAnalysisLogStorageCapacity:.</summary>
        [JsiiProperty(name: "threatAnalysisLogStorageCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ThreatAnalysisLogStorageCapacity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vCore: This parameter indicates the number of server vCPUs.</summary>
        [JsiiProperty(name: "vCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VCore
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks.</summary>
        /// <remarks>
        /// This improves O&amp;M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
        /// </remarks>
        [JsiiProperty(name: "vulnerabilityFixing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VulnerabilityFixing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.</summary>
        [JsiiProperty(name: "webTamperProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WebTamperProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sas-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-sas.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sas.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.</summary>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property periodUnit: The unit of the subscription duration.</summary>
            /// <remarks>
            /// Valid values:
            /// Month
            /// Year
            /// </remarks>
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeriodUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property antiRansomware: Security Center provides a comprehensive anti-ransomware solution to protect your business.</summary>
            /// <remarks>
            /// We recommend that you configure a data protection capacity of 50GB for each server.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "antiRansomware", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AntiRansomware
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property antiRansomwareManageService: Provide you with security hosting services such as anti-ransomware configuration, monitoring, and anti-ransomware incident emergency response.</summary>
            /// <remarks>
            /// Note:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "antiRansomwareManageService", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AntiRansomwareManageService
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoPay: Whether to auto pay the bill.Default: True.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Whether to auto renew the prepay instance.Default: False.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cloudHoneypot: The cloud honeypot feature can capture attacks in a timely and efficient manner.</summary>
            /// <remarks>
            /// You can use the feature to protect your core assets and detect attacks in attack and defense scenarios.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloudHoneypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CloudHoneypot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property configurationAssessment: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.This ensures the security of the running environment of your cloud services.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "configurationAssessment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConfigurationAssessment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containerImageScan: Security Center provides the container image scan feature to protect containers.</summary>
            /// <remarks>
            /// Security Center can detect CVEs, application vulnerabilities, viruses, and malicious samples and allows you to handle the detected risks. You can configure this parameter based on the number of images or digests. For example, if the number of images or digests that are updated in the previous day is 10, you can set this parameter to 300 for a monthly subscription or to 3650 for a yearly subscription. This is more cost-effective.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerImageScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerImageScan
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property edition: The version of Security center.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "edition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Edition
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logAnalysis: In response to the requirements of the network security law, which requires logs to be stored for at least 180 days, we recommend that you configure a 40GB log storage each server.</summary>
            /// <remarks>
            /// Log analysis supports multi-dimensional security logs of cloud assets, out-of-the-box reports, and powerful SQL syntax analysis, so as to monitor business status, troubleshoot attacks, security operations such as traceability and positioning are easier.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogAnalysis
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maliciousFileDetectionSdk: The configuration assessment feature detects configuration errors and security risks on cloud services from the following dimensions: identity and permission management, security risks in Alibaba Cloud services, and compliance risks.</summary>
            /// <remarks>
            /// This ensures the security of the running environment of your cloud services.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maliciousFileDetectionSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaliciousFileDetectionSdk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protectedServers: Authorization is the same as the number of servers you have.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "protectedServers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtectedServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quotaForApplicationProtection: The application protection feature can detect attacks on applications and provide self-protection during application runtime.</summary>
            /// <remarks>
            /// The feature supports simple and convenient O&amp;M and can effectively defend against zero-day and OWASP Top vulnerabilities. The feature is a value-added feature. You are charged based on the number of assets on which the RASP agent is installed. You must configure protection policies after you purchase the feature.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quotaForApplicationProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuotaForApplicationProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quotaForCloudHoneypot:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "quotaForCloudHoneypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuotaForCloudHoneypot
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quotaForConfigurationAssessment:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "quotaForConfigurationAssessment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuotaForConfigurationAssessment
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quotaForMaliciousFileDetectionSdk:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "quotaForMaliciousFileDetectionSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuotaForMaliciousFileDetectionSdk
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quotaForVulnerabilityFixing: Specify the quota for vulnerability fixing based on the number of vulnerabilities that you want to fix each month.</summary>
            /// <remarks>
            /// The quota is equal to the total number of vulnerabilities that you want to fix on all servers regardless of the vulnerability names. For example, if you use Security Center to fix the same vulnerability on 10 servers, the quota is deducted by 10.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "quotaForVulnerabilityFixing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuotaForVulnerabilityFixing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quotaForWebTamperProofing:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "quotaForWebTamperProofing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QuotaForWebTamperProofing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property threatAnalysis: The threat analysis feature allows you to handle alerts that are generated for assets in the cloud within different accounts and assets of multiple cloud services in a centralized manner.</summary>
            /// <remarks>
            /// The feature also allows you to handle risks with a few clicks. The feature provides automatic orchestration and response capabilities.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "threatAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThreatAnalysis
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property threatAnalysisLogStorageCapacity:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "threatAnalysisLogStorageCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ThreatAnalysisLogStorageCapacity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vCore: This parameter indicates the number of server vCPUs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VCore
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vulnerabilityFixing: The vulnerability fixing feature allows you to fix system vulnerabilities with a few clicks.</summary>
            /// <remarks>
            /// This improves O&amp;M efficiency. You can separately purchase the vulnerability fixing feature. You are charged based on the number of times that you perform vulnerability fixing.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vulnerabilityFixing", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VulnerabilityFixing
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property webTamperProtection: To ensure that the website information of important systems is not maliciously tampered with, there are bad content such as hanging horses, black chains, illegal implantation of terrorist threats, pornography, etc.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "webTamperProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WebTamperProtection
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
