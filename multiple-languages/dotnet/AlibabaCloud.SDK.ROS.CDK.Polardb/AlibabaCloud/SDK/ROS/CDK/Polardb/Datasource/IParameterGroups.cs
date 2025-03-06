using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource
{
    /// <summary>Represents a `ParameterGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IParameterGroups), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.IParameterGroups")]
    public interface IParameterGroups : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ParameterGroupIds: The list of parameter group IDs.</summary>
        [JsiiProperty(name: "attrParameterGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterGroupIds
        {
            get;
        }

        /// <summary>Attribute ParameterGroups: The list of parameter groups.</summary>
        [JsiiProperty(name: "attrParameterGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameterGroups
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.datasource.ParameterGroupsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IParameterGroupsProps Props
        {
            get;
        }

        /// <summary>Represents a `ParameterGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IParameterGroups), fullyQualifiedName: "@alicloud/ros-cdk-polardb.datasource.IParameterGroups")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IParameterGroups
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ParameterGroupIds: The list of parameter group IDs.</summary>
            [JsiiProperty(name: "attrParameterGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParameterGroups: The list of parameter groups.</summary>
            [JsiiProperty(name: "attrParameterGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameterGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-polardb.datasource.ParameterGroupsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IParameterGroupsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Polardb.Datasource.IParameterGroupsProps>()!;
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
