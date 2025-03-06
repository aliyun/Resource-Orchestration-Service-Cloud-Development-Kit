using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource
{
    /// <summary>Represents a `LoadBalancers`.</summary>
    [JsiiInterface(nativeType: typeof(ILoadBalancers), fullyQualifiedName: "@alicloud/ros-cdk-nlb.datasource.ILoadBalancers")]
    public interface ILoadBalancers : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute LoadBalancerIds: The list of load balancer IDs.</summary>
        [JsiiProperty(name: "attrLoadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerIds
        {
            get;
        }

        /// <summary>Attribute LoadBalancers: The list of load balancers.</summary>
        [JsiiProperty(name: "attrLoadBalancers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancers
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nlb.datasource.LoadBalancersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancersProps Props
        {
            get;
        }

        /// <summary>Represents a `LoadBalancers`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILoadBalancers), fullyQualifiedName: "@alicloud/ros-cdk-nlb.datasource.ILoadBalancers")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancers
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute LoadBalancerIds: The list of load balancer IDs.</summary>
            [JsiiProperty(name: "attrLoadBalancerIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancers: The list of load balancers.</summary>
            [JsiiProperty(name: "attrLoadBalancers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancers
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nlb.datasource.LoadBalancersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nlb.Datasource.ILoadBalancersProps>()!;
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
