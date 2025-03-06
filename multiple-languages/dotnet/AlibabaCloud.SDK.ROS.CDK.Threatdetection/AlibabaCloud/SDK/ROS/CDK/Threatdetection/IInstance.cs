using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IInstance")]
    public interface IInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BuyNumber: Number of servers.</summary>
        [JsiiProperty(name: "attrBuyNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBuyNumber
        {
            get;
        }

        /// <summary>Attribute ContainerImageScan: Container Image security scan.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,200000].
        /// </remarks>
        [JsiiProperty(name: "attrContainerImageScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContainerImageScan
        {
            get;
        }

        /// <summary>Attribute ContainerImageScanNew: Container Image security scan.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,200000].
        /// </remarks>
        [JsiiProperty(name: "attrContainerImageScanNew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContainerImageScanNew
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Honeypot: Number of cloud honeypot licenses.</summary>
        /// <remarks>
        /// Interval type, value interval:[20,500].
        /// </remarks>
        [JsiiProperty(name: "attrHoneypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypot
        {
            get;
        }

        /// <summary>Attribute HoneypotSwitch: Cloud honeypot.</summary>
        [JsiiProperty(name: "attrHoneypotSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotSwitch
        {
            get;
        }

        /// <summary>Attribute InstanceId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute RaspCount: Number of application protection licenses.</summary>
        /// <remarks>
        /// Interval type, value interval:[1,100000000].
        /// </remarks>
        [JsiiProperty(name: "attrRaspCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRaspCount
        {
            get;
        }

        /// <summary>Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.</summary>
        [JsiiProperty(name: "attrRenewalPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRenewalPeriodUnit
        {
            get;
        }

        /// <summary>Attribute RenewalStatus: Automatic renewal status, value:.</summary>
        [JsiiProperty(name: "attrRenewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRenewalStatus
        {
            get;
        }

        /// <summary>Attribute RenewPeriod: Automatic renewal cycle, in months.</summary>
        [JsiiProperty(name: "attrRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRenewPeriod
        {
            get;
        }

        /// <summary>Attribute SasAntiRansomware: Anti-ransomware capacity.</summary>
        /// <remarks>
        /// Unit: GB. Interval type, value interval:[0,9999999999].
        /// </remarks>
        [JsiiProperty(name: "attrSasAntiRansomware", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasAntiRansomware
        {
            get;
        }

        /// <summary>Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].</summary>
        [JsiiProperty(name: "attrSasCspm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasCspm
        {
            get;
        }

        /// <summary>Attribute SasCspmSwitch: Cloud platform configuration check switch.</summary>
        [JsiiProperty(name: "attrSasCspmSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasCspmSwitch
        {
            get;
        }

        /// <summary>Attribute SasSc: Security screen.</summary>
        [JsiiProperty(name: "attrSasSc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasSc
        {
            get;
        }

        /// <summary>Attribute SasSdk: Number of malicious file detections.</summary>
        /// <remarks>
        /// Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        /// </remarks>
        [JsiiProperty(name: "attrSasSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasSdk
        {
            get;
        }

        /// <summary>Attribute SasSdkSwitch: Malicious file detection SDK.</summary>
        [JsiiProperty(name: "attrSasSdkSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasSdkSwitch
        {
            get;
        }

        /// <summary>Attribute SasSlsStorage: Log analysis storage capacity.</summary>
        /// <remarks>
        /// Unit: GB. Interval type, value interval:[0,600000].
        /// </remarks>
        [JsiiProperty(name: "attrSasSlsStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasSlsStorage
        {
            get;
        }

        /// <summary>Attribute SasWebguardBoolean: Web tamper-proof switch.</summary>
        [JsiiProperty(name: "attrSasWebguardBoolean", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasWebguardBoolean
        {
            get;
        }

        /// <summary>Attribute SasWebguardOrderNum: Tamper-proof authorization number.</summary>
        [JsiiProperty(name: "attrSasWebguardOrderNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSasWebguardOrderNum
        {
            get;
        }

        /// <summary>Attribute ThreatAnalysis: Threat Analysis log storage capacity.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,9999999999].
        /// </remarks>
        [JsiiProperty(name: "attrThreatAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrThreatAnalysis
        {
            get;
        }

        /// <summary>Attribute ThreatAnalysisSwitch: Threat analysis.</summary>
        [JsiiProperty(name: "attrThreatAnalysisSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrThreatAnalysisSwitch
        {
            get;
        }

        /// <summary>Attribute VCore: Number of cores.</summary>
        [JsiiProperty(name: "attrVCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVCore
        {
            get;
        }

        /// <summary>Attribute VersionCode: Select the security center version.</summary>
        [JsiiProperty(name: "attrVersionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersionCode
        {
            get;
        }

        /// <summary>Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].</summary>
        [JsiiProperty(name: "attrVulCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVulCount
        {
            get;
        }

        /// <summary>Attribute VulSwitch: Vulnerability fix switch.</summary>
        [JsiiProperty(name: "attrVulSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVulSwitch
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.InstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BuyNumber: Number of servers.</summary>
            [JsiiProperty(name: "attrBuyNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBuyNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ContainerImageScan: Container Image security scan.</summary>
            /// <remarks>
            /// Interval type, value interval:[0,200000].
            /// </remarks>
            [JsiiProperty(name: "attrContainerImageScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContainerImageScan
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ContainerImageScanNew: Container Image security scan.</summary>
            /// <remarks>
            /// Interval type, value interval:[0,200000].
            /// </remarks>
            [JsiiProperty(name: "attrContainerImageScanNew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContainerImageScanNew
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Honeypot: Number of cloud honeypot licenses.</summary>
            /// <remarks>
            /// Interval type, value interval:[20,500].
            /// </remarks>
            [JsiiProperty(name: "attrHoneypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypot
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HoneypotSwitch: Cloud honeypot.</summary>
            [JsiiProperty(name: "attrHoneypotSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RaspCount: Number of application protection licenses.</summary>
            /// <remarks>
            /// Interval type, value interval:[1,100000000].
            /// </remarks>
            [JsiiProperty(name: "attrRaspCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRaspCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.</summary>
            [JsiiProperty(name: "attrRenewalPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRenewalPeriodUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RenewalStatus: Automatic renewal status, value:.</summary>
            [JsiiProperty(name: "attrRenewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRenewalStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RenewPeriod: Automatic renewal cycle, in months.</summary>
            [JsiiProperty(name: "attrRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRenewPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasAntiRansomware: Anti-ransomware capacity.</summary>
            /// <remarks>
            /// Unit: GB. Interval type, value interval:[0,9999999999].
            /// </remarks>
            [JsiiProperty(name: "attrSasAntiRansomware", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasAntiRansomware
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].</summary>
            [JsiiProperty(name: "attrSasCspm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasCspm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasCspmSwitch: Cloud platform configuration check switch.</summary>
            [JsiiProperty(name: "attrSasCspmSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasCspmSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasSc: Security screen.</summary>
            [JsiiProperty(name: "attrSasSc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasSc
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasSdk: Number of malicious file detections.</summary>
            /// <remarks>
            /// Unit: 10,000 times. Interval type, value interval:[10,9999999999].
            /// </remarks>
            [JsiiProperty(name: "attrSasSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasSdk
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasSdkSwitch: Malicious file detection SDK.</summary>
            [JsiiProperty(name: "attrSasSdkSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasSdkSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasSlsStorage: Log analysis storage capacity.</summary>
            /// <remarks>
            /// Unit: GB. Interval type, value interval:[0,600000].
            /// </remarks>
            [JsiiProperty(name: "attrSasSlsStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasSlsStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasWebguardBoolean: Web tamper-proof switch.</summary>
            [JsiiProperty(name: "attrSasWebguardBoolean", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasWebguardBoolean
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SasWebguardOrderNum: Tamper-proof authorization number.</summary>
            [JsiiProperty(name: "attrSasWebguardOrderNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSasWebguardOrderNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ThreatAnalysis: Threat Analysis log storage capacity.</summary>
            /// <remarks>
            /// Interval type, value interval:[0,9999999999].
            /// </remarks>
            [JsiiProperty(name: "attrThreatAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrThreatAnalysis
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ThreatAnalysisSwitch: Threat analysis.</summary>
            [JsiiProperty(name: "attrThreatAnalysisSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrThreatAnalysisSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VCore: Number of cores.</summary>
            [JsiiProperty(name: "attrVCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVCore
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VersionCode: Select the security center version.</summary>
            [JsiiProperty(name: "attrVersionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersionCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].</summary>
            [JsiiProperty(name: "attrVulCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVulCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VulSwitch: Vulnerability fix switch.</summary>
            [JsiiProperty(name: "attrVulSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVulSwitch
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.InstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstanceProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
