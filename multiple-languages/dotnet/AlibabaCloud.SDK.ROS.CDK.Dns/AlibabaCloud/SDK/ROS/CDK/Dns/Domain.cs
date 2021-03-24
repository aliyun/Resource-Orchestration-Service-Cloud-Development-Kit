using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>A ROS resource type:  `ALIYUN::DNS::Domain`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dns.Domain), fullyQualifiedName: "@alicloud/ros-cdk-dns.Domain", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dns.DomainProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Domain : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::DNS::Domain`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Domain(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dns.IDomainProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Domain(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Domain(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DnsServers: The DNS list for the domain name under resolution.</summary>
        [JsiiProperty(name: "attrDnsServers", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDnsServers
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DomainId: Domain ID.</summary>
        [JsiiProperty(name: "attrDomainId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDomainId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DomainName: Domain name.</summary>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GroupId: Domain name group ID.</summary>
        [JsiiProperty(name: "attrGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GroupName: The name of the domain name group.</summary>
        [JsiiProperty(name: "attrGroupName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrGroupName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PunyCode: punycode returned only for a Chinese domain name.</summary>
        [JsiiProperty(name: "attrPunyCode", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPunyCode
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
