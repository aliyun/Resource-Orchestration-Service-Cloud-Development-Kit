using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Represents a `K8sSlbBinding`.</summary>
    [JsiiInterface(nativeType: typeof(IK8sSlbBinding), fullyQualifiedName: "@alicloud/ros-cdk-edas.IK8sSlbBinding")]
    public interface IK8sSlbBinding : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Address: The address of load balancer instance.</summary>
        [JsiiProperty(name: "attrAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAddress
        {
            get;
        }

        /// <summary>Attribute AppId: The ID of the application.</summary>
        [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAppId
        {
            get;
        }

        /// <summary>Attribute ChangeOrderId: The ID of the change process.</summary>
        [JsiiProperty(name: "attrChangeOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrChangeOrderId
        {
            get;
        }

        /// <summary>Attribute LoadBalancerId: The ID of load balancer instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerId
        {
            get;
        }

        /// <summary>Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.</summary>
        [JsiiProperty(name: "attrLoadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-edas.K8sSlbBindingProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Edas.IK8sSlbBindingProps Props
        {
            get;
        }

        /// <summary>Represents a `K8sSlbBinding`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IK8sSlbBinding), fullyQualifiedName: "@alicloud/ros-cdk-edas.IK8sSlbBinding")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IK8sSlbBinding
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Address: The address of load balancer instance.</summary>
            [JsiiProperty(name: "attrAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AppId: The ID of the application.</summary>
            [JsiiProperty(name: "attrAppId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAppId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ChangeOrderId: The ID of the change process.</summary>
            [JsiiProperty(name: "attrChangeOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrChangeOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerId: The ID of load balancer instance.</summary>
            [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.</summary>
            [JsiiProperty(name: "attrLoadBalancerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-edas.K8sSlbBindingProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Edas.IK8sSlbBindingProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Edas.IK8sSlbBindingProps>()!;
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
