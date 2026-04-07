using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `DelegatedAdministrator`.</summary>
    [JsiiInterface(nativeType: typeof(IDelegatedAdministrator), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IDelegatedAdministrator")]
    public interface IDelegatedAdministrator : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.</summary>
        [JsiiProperty(name: "attrAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountId
        {
            get;
        }

        /// <summary>Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.</summary>
        [JsiiProperty(name: "attrDelegationEnabledTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDelegationEnabledTime
        {
            get;
        }

        /// <summary>Attribute ServicePrincipal: The identifier of the trusted service.</summary>
        [JsiiProperty(name: "attrServicePrincipal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServicePrincipal
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.DelegatedAdministratorProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDelegatedAdministratorProps Props
        {
            get;
        }

        /// <summary>Represents a `DelegatedAdministrator`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDelegatedAdministrator), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IDelegatedAdministrator")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDelegatedAdministrator
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.</summary>
            [JsiiProperty(name: "attrAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.</summary>
            [JsiiProperty(name: "attrDelegationEnabledTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDelegationEnabledTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServicePrincipal: The identifier of the trusted service.</summary>
            [JsiiProperty(name: "attrServicePrincipal", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServicePrincipal
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.DelegatedAdministratorProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDelegatedAdministratorProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IDelegatedAdministratorProps>()!;
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
