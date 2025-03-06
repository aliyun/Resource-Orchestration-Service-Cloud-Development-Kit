using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `TrafficMirrorFilter`.</summary>
    [JsiiInterface(nativeType: typeof(ITrafficMirrorFilter), fullyQualifiedName: "@alicloud/ros-cdk-vpc.ITrafficMirrorFilter")]
    public interface ITrafficMirrorFilter : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EgressRules: Egress rules.</summary>
        [JsiiProperty(name: "attrEgressRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEgressRules
        {
            get;
        }

        /// <summary>Attribute IngressRules: Ingress rules.</summary>
        [JsiiProperty(name: "attrIngressRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIngressRules
        {
            get;
        }

        /// <summary>Attribute TrafficMirrorFilterDescription: The description of the filter.</summary>
        [JsiiProperty(name: "attrTrafficMirrorFilterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTrafficMirrorFilterDescription
        {
            get;
        }

        /// <summary>Attribute TrafficMirrorFilterId: The ID of the filter.</summary>
        [JsiiProperty(name: "attrTrafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTrafficMirrorFilterId
        {
            get;
        }

        /// <summary>Attribute TrafficMirrorFilterName: The name of the filter.</summary>
        [JsiiProperty(name: "attrTrafficMirrorFilterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTrafficMirrorFilterName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficMirrorFilterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilterProps Props
        {
            get;
        }

        /// <summary>Represents a `TrafficMirrorFilter`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITrafficMirrorFilter), fullyQualifiedName: "@alicloud/ros-cdk-vpc.ITrafficMirrorFilter")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilter
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EgressRules: Egress rules.</summary>
            [JsiiProperty(name: "attrEgressRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEgressRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IngressRules: Ingress rules.</summary>
            [JsiiProperty(name: "attrIngressRules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIngressRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TrafficMirrorFilterDescription: The description of the filter.</summary>
            [JsiiProperty(name: "attrTrafficMirrorFilterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTrafficMirrorFilterDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TrafficMirrorFilterId: The ID of the filter.</summary>
            [JsiiProperty(name: "attrTrafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTrafficMirrorFilterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TrafficMirrorFilterName: The name of the filter.</summary>
            [JsiiProperty(name: "attrTrafficMirrorFilterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTrafficMirrorFilterName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficMirrorFilterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorFilterProps>()!;
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
