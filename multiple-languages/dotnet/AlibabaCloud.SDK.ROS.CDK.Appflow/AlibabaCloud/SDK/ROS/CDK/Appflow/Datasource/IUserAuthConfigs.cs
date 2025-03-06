using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Appflow.Datasource
{
    /// <summary>Represents a `UserAuthConfigs`.</summary>
    [JsiiInterface(nativeType: typeof(IUserAuthConfigs), fullyQualifiedName: "@alicloud/ros-cdk-appflow.datasource.IUserAuthConfigs")]
    public interface IUserAuthConfigs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AuthConfigIds: The list of auth config ids.</summary>
        [JsiiProperty(name: "attrAuthConfigIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthConfigIds
        {
            get;
        }

        /// <summary>Attribute AuthConfigs: The list of auth configs.</summary>
        [JsiiProperty(name: "attrAuthConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAuthConfigs
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-appflow.datasource.UserAuthConfigsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Appflow.Datasource.IUserAuthConfigsProps Props
        {
            get;
        }

        /// <summary>Represents a `UserAuthConfigs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserAuthConfigs), fullyQualifiedName: "@alicloud/ros-cdk-appflow.datasource.IUserAuthConfigs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Appflow.Datasource.IUserAuthConfigs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AuthConfigIds: The list of auth config ids.</summary>
            [JsiiProperty(name: "attrAuthConfigIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthConfigIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AuthConfigs: The list of auth configs.</summary>
            [JsiiProperty(name: "attrAuthConfigs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAuthConfigs
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-appflow.datasource.UserAuthConfigsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Appflow.Datasource.IUserAuthConfigsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Appflow.Datasource.IUserAuthConfigsProps>()!;
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
