using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm.Datasource
{
    /// <summary>Represents a `Configurations`.</summary>
    [JsiiInterface(nativeType: typeof(IConfigurations), fullyQualifiedName: "@alicloud/ros-cdk-acm.datasource.IConfigurations")]
    public interface IConfigurations : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Configurations: The list of configurations.</summary>
        [JsiiProperty(name: "attrConfigurations", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigurations
        {
            get;
        }

        /// <summary>Attribute DataIds: The list of configuration data IDs.</summary>
        [JsiiProperty(name: "attrDataIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-acm.datasource.ConfigurationsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Acm.Datasource.IConfigurationsProps Props
        {
            get;
        }

        /// <summary>Represents a `Configurations`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConfigurations), fullyQualifiedName: "@alicloud/ros-cdk-acm.datasource.IConfigurations")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acm.Datasource.IConfigurations
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Configurations: The list of configurations.</summary>
            [JsiiProperty(name: "attrConfigurations", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigurations
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DataIds: The list of configuration data IDs.</summary>
            [JsiiProperty(name: "attrDataIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-acm.datasource.ConfigurationsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Acm.Datasource.IConfigurationsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Acm.Datasource.IConfigurationsProps>()!;
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
