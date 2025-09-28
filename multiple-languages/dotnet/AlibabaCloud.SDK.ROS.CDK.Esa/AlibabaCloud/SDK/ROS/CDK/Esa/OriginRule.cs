using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ESA::OriginRule`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOriginRule`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Esa.OriginRule), fullyQualifiedName: "@alicloud/ros-cdk-esa.OriginRule", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-esa.OriginRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class OriginRule : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRule
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public OriginRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRuleProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRuleProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected OriginRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected OriginRule(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ConfigId: Back-to-source rule configuration ID.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigType: The configuration type.</summary>
        /// <remarks>
        /// You can use this parameter to check the global configuration or rule configuration.
        /// </remarks>
        [JsiiProperty(name: "attrConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.</summary>
        [JsiiProperty(name: "attrDnsRecord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDnsRecord
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Follow302Enable: Return Source 302 follow switch.</summary>
        [JsiiProperty(name: "attrFollow302Enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFollow302Enable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].</summary>
        [JsiiProperty(name: "attrFollow302MaxTries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFollow302MaxTries
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Follow302RetainArgs: Retain the original request parameter switch.</summary>
        [JsiiProperty(name: "attrFollow302RetainArgs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFollow302RetainArgs
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Follow302RetainHeader: Retain the original request header switch.</summary>
        [JsiiProperty(name: "attrFollow302RetainHeader", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFollow302RetainHeader
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Follow302TargetHost: Modify the source host after 302.</summary>
        [JsiiProperty(name: "attrFollow302TargetHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFollow302TargetHost
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OriginHost: The HOST carried in the back-to-origin request.</summary>
        [JsiiProperty(name: "attrOriginHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOriginHost
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.</summary>
        [JsiiProperty(name: "attrOriginHttpPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOriginHttpPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.</summary>
        [JsiiProperty(name: "attrOriginHttpsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOriginHttpsPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OriginMtls: The mtls switch.</summary>
        [JsiiProperty(name: "attrOriginMtls", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOriginMtls
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OriginReadTimeout: Read timeout interval of the source station (s).</summary>
        [JsiiProperty(name: "attrOriginReadTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOriginReadTimeout
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OriginScheme: The protocol used by the back-to-origin request.</summary>
        [JsiiProperty(name: "attrOriginScheme", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOriginScheme
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OriginSni: SNI carried in the back-to-origin request.</summary>
        [JsiiProperty(name: "attrOriginSni", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOriginSni
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OriginVerify: Source station certificate verification switch.</summary>
        [JsiiProperty(name: "attrOriginVerify", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOriginVerify
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Range: Use the range sharding method to download the file from the source.</summary>
        [JsiiProperty(name: "attrRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRange
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RangeChunkSize: range shard size.</summary>
        [JsiiProperty(name: "attrRangeChunkSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRangeChunkSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRule
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleEnable
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Sequence: Order of rule execution.</summary>
        /// <remarks>
        /// The smaller the value, the higher the priority for execution.
        /// </remarks>
        [JsiiProperty(name: "attrSequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSequence
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SiteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "attrSiteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSiteVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.OriginRuleProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRuleProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IOriginRuleProps>()!;
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
