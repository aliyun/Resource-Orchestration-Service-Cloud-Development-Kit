using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Represents a `BasicAcceleratorIpEndpointRelation`.</summary>
    [JsiiInterface(nativeType: typeof(IBasicAcceleratorIpEndpointRelation), fullyQualifiedName: "@alicloud/ros-cdk-ga.IBasicAcceleratorIpEndpointRelation")]
    public interface IBasicAcceleratorIpEndpointRelation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccelerateIpId: The ID of the accelerated IP address.</summary>
        [JsiiProperty(name: "attrAccelerateIpId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccelerateIpId
        {
            get;
        }

        /// <summary>Attribute AcceleratorId: The ID of the basic GA instance.</summary>
        [JsiiProperty(name: "attrAcceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAcceleratorId
        {
            get;
        }

        /// <summary>Attribute EndpointId: The ID of the endpoint.</summary>
        [JsiiProperty(name: "attrEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndpointId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.BasicAcceleratorIpEndpointRelationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ga.IBasicAcceleratorIpEndpointRelationProps Props
        {
            get;
        }

        /// <summary>Represents a `BasicAcceleratorIpEndpointRelation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBasicAcceleratorIpEndpointRelation), fullyQualifiedName: "@alicloud/ros-cdk-ga.IBasicAcceleratorIpEndpointRelation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBasicAcceleratorIpEndpointRelation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccelerateIpId: The ID of the accelerated IP address.</summary>
            [JsiiProperty(name: "attrAccelerateIpId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccelerateIpId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AcceleratorId: The ID of the basic GA instance.</summary>
            [JsiiProperty(name: "attrAcceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndpointId: The ID of the endpoint.</summary>
            [JsiiProperty(name: "attrEndpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndpointId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.BasicAcceleratorIpEndpointRelationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ga.IBasicAcceleratorIpEndpointRelationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ga.IBasicAcceleratorIpEndpointRelationProps>()!;
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
