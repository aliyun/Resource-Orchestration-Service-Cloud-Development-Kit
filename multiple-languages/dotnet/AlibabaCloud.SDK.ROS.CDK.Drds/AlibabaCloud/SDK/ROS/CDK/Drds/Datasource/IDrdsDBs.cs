using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds.Datasource
{
    /// <summary>Represents a `DrdsDBs`.</summary>
    [JsiiInterface(nativeType: typeof(IDrdsDBs), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.IDrdsDBs")]
    public interface IDrdsDBs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Databases: The list of drds databases.</summary>
        [JsiiProperty(name: "attrDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDatabases
        {
            get;
        }

        /// <summary>Attribute DrdsDatabaseNames: The list of drds database names.</summary>
        [JsiiProperty(name: "attrDrdsDatabaseNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDrdsDatabaseNames
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.DrdsDBsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDBsProps Props
        {
            get;
        }

        /// <summary>Represents a `DrdsDBs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDrdsDBs), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.IDrdsDBs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDBs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Databases: The list of drds databases.</summary>
            [JsiiProperty(name: "attrDatabases", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDatabases
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DrdsDatabaseNames: The list of drds database names.</summary>
            [JsiiProperty(name: "attrDrdsDatabaseNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDrdsDatabaseNames
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-drds.datasource.DrdsDBsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDBsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDBsProps>()!;
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
