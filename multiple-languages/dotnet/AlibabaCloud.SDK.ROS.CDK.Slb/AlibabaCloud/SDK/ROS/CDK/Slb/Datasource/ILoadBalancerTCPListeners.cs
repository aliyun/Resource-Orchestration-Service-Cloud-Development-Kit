using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Represents a `LoadBalancerTCPListeners`.</summary>
    [JsiiInterface(nativeType: typeof(ILoadBalancerTCPListeners), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListeners")]
    public interface ILoadBalancerTCPListeners : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ListenerPorts: The list of listener ports.</summary>
        [JsiiProperty(name: "attrListenerPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrListenerPorts
        {
            get;
        }

        /// <summary>Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.</summary>
        [JsiiProperty(name: "attrLoadBalancerTcpListeners", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerTcpListeners
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenersProps Props
        {
            get;
        }

        /// <summary>Represents a `LoadBalancerTCPListeners`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancerTCPListeners), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ILoadBalancerTCPListeners")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListeners
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ListenerPorts: The list of listener ports.</summary>
            [JsiiProperty(name: "attrListenerPorts", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrListenerPorts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.</summary>
            [JsiiProperty(name: "attrLoadBalancerTcpListeners", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerTcpListeners
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.LoadBalancerTCPListenersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ILoadBalancerTCPListenersProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
