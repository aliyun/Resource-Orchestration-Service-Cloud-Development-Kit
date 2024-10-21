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
    public class LoadBalancerTCPListener : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
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
        [JsiiProperty(name: "attrAclId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAclId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute AclIds: The ID list of the network ACL that is associated with the listener.</summary>
        [JsiiProperty(name: "attrAclIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAclIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute AclStatus: Indicates whether access control is enabled.</summary>
        [JsiiProperty(name: "attrAclStatus", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAclStatus
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute AclType: The type of the ACL.</summary>
        [JsiiProperty(name: "attrAclType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAclType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute BackendServerPort: The backend port used by the CLB instance.</summary>
        [JsiiProperty(name: "attrBackendServerPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrBackendServerPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Bandwidth: The maximum bandwidth of the listener.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrBandwidth
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ConnectionDrain: Indicates whether connection draining is enabled.</summary>
        /// <remarks>
        /// If ConnectionDrain is set to on, the parameter is returned.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionDrain", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrConnectionDrain
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ConnectionDrainTimeout: The timeout period of connection draining.</summary>
        /// <remarks>
        /// If ConnectionDrain is set to on, the parameter is returned.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionDrainTimeout", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrConnectionDrainTimeout
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Description: The description of the listener.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDescription
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute EstablishedTimeout: The timeout period of a connection.</summary>
        [JsiiProperty(name: "attrEstablishedTimeout", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrEstablishedTimeout
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheck: Indicates whether the health check feature is enabled.</summary>
        [JsiiProperty(name: "attrHealthCheck", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheck
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheckConnectPort: The port that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckConnectPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheckConnectPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheckConnectTimeout: The timeout period.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckConnectTimeout", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheckConnectTimeout
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheckDomain: The domain name that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckDomain", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheckDomain
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.</summary>
        [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheckHttpCode
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheckInterval: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Valid values: 1 to 50. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheckInterval
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheckMethod: The health check method.</summary>
        [JsiiProperty(name: "attrHealthCheckMethod", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheckMethod
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheckType: The health check method that is used by the TCP listener.</summary>
        [JsiiProperty(name: "attrHealthCheckType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheckType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthCheckUri: The URL that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthCheckUri
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute HealthyThreshold: The healthy threshold.</summary>
        /// <remarks>
        /// The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
        /// </remarks>
        [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHealthyThreshold
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ListenerPort: The frontend port used by the CLB instance.</summary>
        [JsiiProperty(name: "attrListenerPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrListenerPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute LoadBalancerId: The ID of the CLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLoadBalancerId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.</summary>
        [JsiiProperty(name: "attrMasterSlaveServerGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMasterSlaveServerGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute PersistenceTimeout: The timeout period of session persistence.</summary>
        [JsiiProperty(name: "attrPersistenceTimeout", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPersistenceTimeout
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.</summary>
        [JsiiProperty(name: "attrProxyProtocolV2Enabled", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrProxyProtocolV2Enabled
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute Scheduler: The scheduling algorithm.</summary>
        [JsiiProperty(name: "attrScheduler", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScheduler
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.</summary>
        [JsiiProperty(name: "attrSynProxy", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSynProxy
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute UnhealthyThreshold: The unhealthy threshold.</summary>
        /// <remarks>
        /// The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
        /// </remarks>
        [JsiiProperty(name: "attrUnhealthyThreshold", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrUnhealthyThreshold
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <summary>Attribute VServerGroupId: The ID of the associated server group.</summary>
        [JsiiProperty(name: "attrVServerGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVServerGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
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

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenerProps\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps>()!;
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
