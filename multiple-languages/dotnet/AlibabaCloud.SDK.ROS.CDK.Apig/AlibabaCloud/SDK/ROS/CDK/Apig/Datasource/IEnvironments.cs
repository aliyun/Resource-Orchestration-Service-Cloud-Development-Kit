using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig.Datasource
{
    /// <summary>Represents a `Environments`.</summary>
    [JsiiInterface(nativeType: typeof(IEnvironments), fullyQualifiedName: "@alicloud/ros-cdk-apig.datasource.IEnvironments")]
    public interface IEnvironments : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EnvironmentIds: The list of environment IDs.</summary>
        [JsiiProperty(name: "attrEnvironmentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentIds
        {
            get;
        }

        /// <summary>Attribute Environments: The list of environments.</summary>
        [JsiiProperty(name: "attrEnvironments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironments
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.datasource.EnvironmentsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IEnvironmentsProps Props
        {
            get;
        }

        /// <summary>Represents a `Environments`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvironments), fullyQualifiedName: "@alicloud/ros-cdk-apig.datasource.IEnvironments")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IEnvironments
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EnvironmentIds: The list of environment IDs.</summary>
            [JsiiProperty(name: "attrEnvironmentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Environments: The list of environments.</summary>
            [JsiiProperty(name: "attrEnvironments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironments
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.datasource.EnvironmentsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IEnvironmentsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IEnvironmentsProps>()!;
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
