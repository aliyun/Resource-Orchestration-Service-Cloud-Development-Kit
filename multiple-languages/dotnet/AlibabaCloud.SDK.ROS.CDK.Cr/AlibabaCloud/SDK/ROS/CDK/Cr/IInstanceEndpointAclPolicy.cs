using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Represents a `InstanceEndpointAclPolicy`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceEndpointAclPolicy), fullyQualifiedName: "@alicloud/ros-cdk-cr.IInstanceEndpointAclPolicy")]
    public interface IInstanceEndpointAclPolicy : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Entry: The IP address range that is allowed to access the instance.</summary>
        [JsiiProperty(name: "attrEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEntry
        {
            get;
        }

        /// <summary>Attribute InstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cr.IInstanceEndpointAclPolicyProps Props
        {
            get;
        }

        /// <summary>Represents a `InstanceEndpointAclPolicy`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstanceEndpointAclPolicy), fullyQualifiedName: "@alicloud/ros-cdk-cr.IInstanceEndpointAclPolicy")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IInstanceEndpointAclPolicy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Entry: The IP address range that is allowed to access the instance.</summary>
            [JsiiProperty(name: "attrEntry", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEntry
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cr.InstanceEndpointAclPolicyProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cr.IInstanceEndpointAclPolicyProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cr.IInstanceEndpointAclPolicyProps>()!;
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
