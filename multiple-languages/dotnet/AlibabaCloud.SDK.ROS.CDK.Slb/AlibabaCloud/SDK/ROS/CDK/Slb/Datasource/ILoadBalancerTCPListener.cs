using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Represents a `LoadBalancerTCPListener`.</summary>
    [JsiiInterface(nativeType: typeof(ILoadBalancerTCPListener), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListener")]
    public interface ILoadBalancerTCPListener : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AclId: The ID of the network ACL that is associated with the listener.</summary>
        [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclId
        {
            get;
        }

        /// <summary>Attribute AclIds: The ID list of the network ACL that is associated with the listener.</summary>
        [JsiiProperty(name: "attrAclIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclIds
        {
            get;
        }

        /// <summary>Attribute AclStatus: Indicates whether access control is enabled.</summary>
        [JsiiProperty(name: "attrAclStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclStatus
        {
            get;
        }

        /// <summary>Attribute AclType: The type of the ACL.</summary>
        [JsiiProperty(name: "attrAclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAclType
        {
            get;
        }

        /// <summary>Attribute BackendServerPort: The backend port used by the CLB instance.</summary>
        [JsiiProperty(name: "attrBackendServerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackendServerPort
        {
            get;
        }

        /// <summary>Attribute Bandwidth: The maximum bandwidth of the listener.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute ConnectionDrain: Indicates whether connection draining is enabled.</summary>
        /// <remarks>
        /// If ConnectionDrain is set to on, the parameter is returned.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionDrain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionDrain
        {
            get;
        }

        /// <summary>Attribute ConnectionDrainTimeout: The timeout period of connection draining.</summary>
        /// <remarks>
        /// If ConnectionDrain is set to on, the parameter is returned.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionDrainTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionDrainTimeout
        {
            get;
        }

        /// <summary>Attribute Description: The description of the listener.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute EstablishedTimeout: The timeout period of a connection.</summary>
        [JsiiProperty(name: "attrEstablishedTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEstablishedTimeout
        {
            get;
        }

        /// <summary>Attribute HealthCheck: Indicates whether the health check feature is enabled.</summary>
        [JsiiProperty(name: "attrHealthCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheck
        {
            get;
        }

        /// <summary>Attribute HealthCheckConnectPort: The port that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckConnectPort
        {
            get;
        }

        /// <summary>Attribute HealthCheckConnectTimeout: The timeout period.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckConnectTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckConnectTimeout
        {
            get;
        }

        /// <summary>Attribute HealthCheckDomain: The domain name that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckDomain
        {
            get;
        }

        /// <summary>Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.</summary>
        [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckHttpCode
        {
            get;
        }

        /// <summary>Attribute HealthCheckInterval: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Valid values: 1 to 50. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckInterval
        {
            get;
        }

        /// <summary>Attribute HealthCheckMethod: The health check method.</summary>
        [JsiiProperty(name: "attrHealthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckMethod
        {
            get;
        }

        /// <summary>Attribute HealthCheckType: The health check method that is used by the TCP listener.</summary>
        [JsiiProperty(name: "attrHealthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckType
        {
            get;
        }

        /// <summary>Attribute HealthCheckUri: The URL that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckUri
        {
            get;
        }

        /// <summary>Attribute HealthyThreshold: The healthy threshold.</summary>
        /// <remarks>
        /// The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
        /// </remarks>
        [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthyThreshold
        {
            get;
        }

        /// <summary>Attribute ListenerPort: The frontend port used by the CLB instance.</summary>
        [JsiiProperty(name: "attrListenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrListenerPort
        {
            get;
        }

        /// <summary>Attribute LoadBalancerId: The ID of the CLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerId
        {
            get;
        }

        /// <summary>Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.</summary>
        [JsiiProperty(name: "attrMasterSlaveServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterSlaveServerGroupId
        {
            get;
        }

        /// <summary>Attribute PersistenceTimeout: The timeout period of session persistence.</summary>
        [JsiiProperty(name: "attrPersistenceTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPersistenceTimeout
        {
            get;
        }

        /// <summary>Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.</summary>
        [JsiiProperty(name: "attrProxyProtocolV2Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProxyProtocolV2Enabled
        {
            get;
        }

        /// <summary>Attribute Scheduler: The scheduling algorithm.</summary>
        [JsiiProperty(name: "attrScheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduler
        {
            get;
        }

        /// <summary>Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.</summary>
        [JsiiProperty(name: "attrSynProxy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSynProxy
        {
            get;
        }

        /// <summary>Attribute UnhealthyThreshold: The unhealthy threshold.</summary>
        /// <remarks>
        /// The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
        /// </remarks>
        [JsiiProperty(name: "attrUnhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUnhealthyThreshold
        {
            get;
        }

        /// <summary>Attribute VServerGroupId: The ID of the associated server group.</summary>
        [JsiiProperty(name: "attrVServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVServerGroupId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenerProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps Props
        {
            get;
        }

        /// <summary>Represents a `LoadBalancerTCPListener`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerTCPListener), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListener")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListener
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AclId: The ID of the network ACL that is associated with the listener.</summary>
            [JsiiProperty(name: "attrAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclIds: The ID list of the network ACL that is associated with the listener.</summary>
            [JsiiProperty(name: "attrAclIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclStatus: Indicates whether access control is enabled.</summary>
            [JsiiProperty(name: "attrAclStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AclType: The type of the ACL.</summary>
            [JsiiProperty(name: "attrAclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAclType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BackendServerPort: The backend port used by the CLB instance.</summary>
            [JsiiProperty(name: "attrBackendServerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackendServerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Bandwidth: The maximum bandwidth of the listener.</summary>
            /// <remarks>
            /// Unit: Mbit/s.
            /// </remarks>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionDrain: Indicates whether connection draining is enabled.</summary>
            /// <remarks>
            /// If ConnectionDrain is set to on, the parameter is returned.
            /// </remarks>
            [JsiiProperty(name: "attrConnectionDrain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionDrain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionDrainTimeout: The timeout period of connection draining.</summary>
            /// <remarks>
            /// If ConnectionDrain is set to on, the parameter is returned.
            /// </remarks>
            [JsiiProperty(name: "attrConnectionDrainTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionDrainTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the listener.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EstablishedTimeout: The timeout period of a connection.</summary>
            [JsiiProperty(name: "attrEstablishedTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEstablishedTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheck: Indicates whether the health check feature is enabled.</summary>
            [JsiiProperty(name: "attrHealthCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheck
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckConnectPort: The port that is used for health checks.</summary>
            [JsiiProperty(name: "attrHealthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckConnectPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckConnectTimeout: The timeout period.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckConnectTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckConnectTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckDomain: The domain name that is used for health checks.</summary>
            [JsiiProperty(name: "attrHealthCheckDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.</summary>
            [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckHttpCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckInterval: The interval between two consecutive health checks.</summary>
            /// <remarks>
            /// Valid values: 1 to 50. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckInterval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckMethod: The health check method.</summary>
            [JsiiProperty(name: "attrHealthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckMethod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckType: The health check method that is used by the TCP listener.</summary>
            [JsiiProperty(name: "attrHealthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckUri: The URL that is used for health checks.</summary>
            [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthyThreshold: The healthy threshold.</summary>
            /// <remarks>
            /// The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
            /// </remarks>
            [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthyThreshold
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ListenerPort: The frontend port used by the CLB instance.</summary>
            [JsiiProperty(name: "attrListenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerId: The ID of the CLB instance.</summary>
            [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.</summary>
            [JsiiProperty(name: "attrMasterSlaveServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterSlaveServerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PersistenceTimeout: The timeout period of session persistence.</summary>
            [JsiiProperty(name: "attrPersistenceTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPersistenceTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.</summary>
            [JsiiProperty(name: "attrProxyProtocolV2Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProxyProtocolV2Enabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Scheduler: The scheduling algorithm.</summary>
            [JsiiProperty(name: "attrScheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduler
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.</summary>
            [JsiiProperty(name: "attrSynProxy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSynProxy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UnhealthyThreshold: The unhealthy threshold.</summary>
            /// <remarks>
            /// The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
            /// </remarks>
            [JsiiProperty(name: "attrUnhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUnhealthyThreshold
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VServerGroupId: The ID of the associated server group.</summary>
            [JsiiProperty(name: "attrVServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVServerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenerProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenerProps>()!;
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
