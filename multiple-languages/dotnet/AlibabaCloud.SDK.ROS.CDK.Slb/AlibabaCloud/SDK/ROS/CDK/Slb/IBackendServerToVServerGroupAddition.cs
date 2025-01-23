using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Represents a `BackendServerToVServerGroupAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IBackendServerToVServerGroupAddition), fullyQualifiedName: "@alicloud/ros-cdk-slb.IBackendServerToVServerGroupAddition")]
    public interface IBackendServerToVServerGroupAddition : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute VServerGroupId: The ID of virtual server group.</summary>
        [JsiiProperty(name: "attrVServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVServerGroupId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.BackendServerToVServerGroupAdditionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerToVServerGroupAdditionProps Props
        {
            get;
        }

        /// <summary>Represents a `BackendServerToVServerGroupAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBackendServerToVServerGroupAddition), fullyQualifiedName: "@alicloud/ros-cdk-slb.IBackendServerToVServerGroupAddition")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerToVServerGroupAddition
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute VServerGroupId: The ID of virtual server group.</summary>
            [JsiiProperty(name: "attrVServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVServerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.BackendServerToVServerGroupAdditionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerToVServerGroupAdditionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerToVServerGroupAdditionProps>()!;
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
