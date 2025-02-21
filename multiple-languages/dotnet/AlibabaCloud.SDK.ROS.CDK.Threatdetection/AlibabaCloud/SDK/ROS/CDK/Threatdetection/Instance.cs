using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::Instance`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-instance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Threatdetection.Instance), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-threatdetection.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute BuyNumber: Number of servers.</summary>
        [JsiiProperty(name: "attrBuyNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBuyNumber
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ContainerImageScan: Container Image security scan.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,200000].
        /// </remarks>
        [JsiiProperty(name: "attrContainerImageScan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrContainerImageScan
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ContainerImageScanNew: Container Image security scan.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,200000].
        /// </remarks>
        [JsiiProperty(name: "attrContainerImageScanNew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrContainerImageScanNew
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The creation time of the resource.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Honeypot: Number of cloud honeypot licenses.</summary>
        /// <remarks>
        /// Interval type, value interval:[20,500].
        /// </remarks>
        [JsiiProperty(name: "attrHoneypot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHoneypot
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HoneypotSwitch: Cloud honeypot.</summary>
        [JsiiProperty(name: "attrHoneypotSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHoneypotSwitch
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The payment type of the resource.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RaspCount: Number of application protection licenses.</summary>
        /// <remarks>
        /// Interval type, value interval:[1,100000000].
        /// </remarks>
        [JsiiProperty(name: "attrRaspCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRaspCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RenewalPeriodUnit: Automatic renewal period unit, value:.</summary>
        [JsiiProperty(name: "attrRenewalPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRenewalPeriodUnit
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RenewalStatus: Automatic renewal status, value:.</summary>
        [JsiiProperty(name: "attrRenewalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRenewalStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RenewPeriod: Automatic renewal cycle, in months.</summary>
        [JsiiProperty(name: "attrRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRenewPeriod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasAntiRansomware: Anti-ransomware capacity.</summary>
        /// <remarks>
        /// Unit: GB. Interval type, value interval:[0,9999999999].
        /// </remarks>
        [JsiiProperty(name: "attrSasAntiRansomware", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasAntiRansomware
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasCspm: Cloud platform configuration check scan times, interval type, value range:[1000,9999999999].</summary>
        [JsiiProperty(name: "attrSasCspm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasCspm
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasCspmSwitch: Cloud platform configuration check switch.</summary>
        [JsiiProperty(name: "attrSasCspmSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasCspmSwitch
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasSc: Security screen.</summary>
        [JsiiProperty(name: "attrSasSc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasSc
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasSdk: Number of malicious file detections.</summary>
        /// <remarks>
        /// Unit: 10,000 times. Interval type, value interval:[10,9999999999].
        /// </remarks>
        [JsiiProperty(name: "attrSasSdk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasSdk
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasSdkSwitch: Malicious file detection SDK.</summary>
        [JsiiProperty(name: "attrSasSdkSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasSdkSwitch
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasSlsStorage: Log analysis storage capacity.</summary>
        /// <remarks>
        /// Unit: GB. Interval type, value interval:[0,600000].
        /// </remarks>
        [JsiiProperty(name: "attrSasSlsStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasSlsStorage
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasWebguardBoolean: Web tamper-proof switch.</summary>
        [JsiiProperty(name: "attrSasWebguardBoolean", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasWebguardBoolean
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SasWebguardOrderNum: Tamper-proof authorization number.</summary>
        [JsiiProperty(name: "attrSasWebguardOrderNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSasWebguardOrderNum
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ThreatAnalysis: Threat Analysis log storage capacity.</summary>
        /// <remarks>
        /// Interval type, value interval:[0,9999999999].
        /// </remarks>
        [JsiiProperty(name: "attrThreatAnalysis", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrThreatAnalysis
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ThreatAnalysisSwitch: Threat analysis.</summary>
        [JsiiProperty(name: "attrThreatAnalysisSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrThreatAnalysisSwitch
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VCore: Number of cores.</summary>
        [JsiiProperty(name: "attrVCore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVCore
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VersionCode: Select the security center version.</summary>
        [JsiiProperty(name: "attrVersionCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVersionCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VulCount: Vulnerability repair times, interval type, value range:[20,100000000].</summary>
        [JsiiProperty(name: "attrVulCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVulCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VulSwitch: Vulnerability fix switch.</summary>
        [JsiiProperty(name: "attrVulSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVulSwitch
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.InstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IInstanceProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
