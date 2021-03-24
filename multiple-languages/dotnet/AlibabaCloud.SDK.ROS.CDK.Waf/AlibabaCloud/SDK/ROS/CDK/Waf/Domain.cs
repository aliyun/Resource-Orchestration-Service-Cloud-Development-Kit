using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>A ROS resource type:  `ALIYUN::WAF::Domain`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Waf.Domain), fullyQualifiedName: "@alicloud/ros-cdk-waf.Domain", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-waf.DomainProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Domain : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::WAF::Domain`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Domain(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Waf.IDomainProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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

        /// <summary>Attribute ClusterType: Cluster type.</summary>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Cname: CNAME assigned by WAF instance.</summary>
        [JsiiProperty(name: "attrCname", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCname
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DomainName: Domain name.</summary>
        [JsiiProperty(name: "attrDomainName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDomainName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Http2Port: Http2 port configuration.</summary>
        [JsiiProperty(name: "attrHttp2Port", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttp2Port
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpPort: Http port configuration.</summary>
        [JsiiProperty(name: "attrHttpPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpsPort: Https port configuration.</summary>
        [JsiiProperty(name: "attrHttpsPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpsPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpsRedirect: Https forced redirect configuration.</summary>
        [JsiiProperty(name: "attrHttpsRedirect", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpsRedirect
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HttpToUserIp: Http back to source.</summary>
        [JsiiProperty(name: "attrHttpToUserIp", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrHttpToUserIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: Instance id.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IsAccessProduct: Is there a seven-layer agency before WAF.</summary>
        [JsiiProperty(name: "attrIsAccessProduct", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIsAccessProduct
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LoadBalancing: Load balancing configuration.</summary>
        [JsiiProperty(name: "attrLoadBalancing", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLoadBalancing
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LogHeaders: Domain traffic tagging.</summary>
        [JsiiProperty(name: "attrLogHeaders", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLogHeaders
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: Resource group Id.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceIps: Back to source IP configuration.</summary>
        [JsiiProperty(name: "attrSourceIps", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSourceIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Version: Optimistic lock version.</summary>
        [JsiiProperty(name: "attrVersion", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVersion
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
