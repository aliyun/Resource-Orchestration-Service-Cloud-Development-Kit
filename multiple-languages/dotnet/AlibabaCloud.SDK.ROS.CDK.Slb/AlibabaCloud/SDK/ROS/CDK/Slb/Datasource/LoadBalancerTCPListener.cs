using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListener`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancerTCPListener`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.LoadBalancerTCPListener), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListener", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class LoadBalancerTCPListener : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListener
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public LoadBalancerTCPListener(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected LoadBalancerTCPListener(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected LoadBalancerTCPListener(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AclId: The ID of the network ACL that is associated with the listener.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAclId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AclIds: The ID list of the network ACL that is associated with the listener.</summary>
        [JsiiProperty(name: "attrAclIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAclIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AclStatus: Indicates whether access control is enabled.</summary>
        [JsiiProperty(name: "attrAclStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAclStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AclType: The type of the ACL.</summary>
        [JsiiProperty(name: "attrAclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAclType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BackendServerPort: The backend port used by the CLB instance.</summary>
        [JsiiProperty(name: "attrBackendServerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBackendServerPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Bandwidth: The maximum bandwidth of the listener.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBandwidth
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionDrain: Indicates whether connection draining is enabled.</summary>
        /// <remarks>
        /// If ConnectionDrain is set to on, the parameter is returned.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionDrain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionDrain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionDrainTimeout: The timeout period of connection draining.</summary>
        /// <remarks>
        /// If ConnectionDrain is set to on, the parameter is returned.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionDrainTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionDrainTimeout
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the listener.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EstablishedTimeout: The timeout period of a connection.</summary>
        [JsiiProperty(name: "attrEstablishedTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEstablishedTimeout
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheck: Indicates whether the health check feature is enabled.</summary>
        [JsiiProperty(name: "attrHealthCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheck
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckConnectPort: The port that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckConnectPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckConnectTimeout: The timeout period.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckConnectTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckConnectTimeout
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckDomain: The domain name that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.</summary>
        [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckHttpCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckInterval: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Valid values: 1 to 50. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckInterval
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckMethod: The health check method.</summary>
        [JsiiProperty(name: "attrHealthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckMethod
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckType: The health check method that is used by the TCP listener.</summary>
        [JsiiProperty(name: "attrHealthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckUri: The URL that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckUri
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthyThreshold: The healthy threshold.</summary>
        /// <remarks>
        /// The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
        /// </remarks>
        [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthyThreshold
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ListenerPort: The frontend port used by the CLB instance.</summary>
        [JsiiProperty(name: "attrListenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrListenerPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LoadBalancerId: The ID of the CLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLoadBalancerId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.</summary>
        [JsiiProperty(name: "attrMasterSlaveServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMasterSlaveServerGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PersistenceTimeout: The timeout period of session persistence.</summary>
        [JsiiProperty(name: "attrPersistenceTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPersistenceTimeout
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.</summary>
        [JsiiProperty(name: "attrProxyProtocolV2Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProxyProtocolV2Enabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Scheduler: The scheduling algorithm.</summary>
        [JsiiProperty(name: "attrScheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScheduler
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.</summary>
        [JsiiProperty(name: "attrSynProxy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSynProxy
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UnhealthyThreshold: The unhealthy threshold.</summary>
        /// <remarks>
        /// The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
        /// </remarks>
        [JsiiProperty(name: "attrUnhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUnhealthyThreshold
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VServerGroupId: The ID of the associated server group.</summary>
        [JsiiProperty(name: "attrVServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVServerGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenerProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps>()!;
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
